from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from flask_login import login_required
from ..models import db, Category
from ..forms.category_form import CategoryForm

category_routes = Blueprint('category', __name__)

# Gets all of the categories
@category_routes.route("/all")
def all_categories():
  categories_all = [category.to_dict() for category in Category.query.all()]
  return {"categories": categories_all}

# Gets one category
@category_routes.route("/<int:id>")
def one_category(id):
  category_one = Category.query.get(id)
  if category_one is not None:
    return category_one.to_dict()
  else: 
    return {
      "statusCode": 404, 
      "message": "Category not found"
    }

# Creates a new category
@category_routes.route('', methods=["POST"])
def new_category():
  form = CategoryForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_category = Category(
      name=form.data['name'],
      headline=form.data['headline'],
      description=form.data['description'],
      purpose=form.data['purpose'],
      is_private=form.data['isPrivate'],
      icon=form.data['icon'],
      owner_id=form.data['ownerId']
    )
    db.session.add(new_category)
    db.session.commit()
    return new_category.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Update an existing category
@category_routes.route('/<int:id>', methods=["PUT"])
def update_category(id):
  update_form = CategoryForm()
  update_form['csrf_token'].data = request.cookies['csrf_token']
  if update_form.validate_on_submit():
    Category.query.filter(Category.id==id).update({
      "name": update_form.data['name'],
      "headline": update_form.data['headline'],
      "description": update_form.data['description'],
      "purpose": update_form.data['purpose'],
      "is_private": update_form.data['isPrivate'],
      "icon": update_form.data['icon'],
      "owner_id": update_form.data['ownerId']
    })
    db.session.commit()
    category = Category.query.filter(Category.id == id)[0]
    return category.to_dict()
  return {'errors': validation_errors_to_error_messages(update_form.errors)}, 401

# Delete an existing category
@category_routes.route('/<int:id>', methods=["DELETE"])
def delete_category(id):
  category_one = Category.query.get(id)
  if category_one is not None:
    db.session.delete(category_one)
    db.session.commit()
    return {
      "statusCode": 200,
      "message": f'Successfully deleted {category_one.name}'
    }
  else: 
    return {
      "statusCode": 404,
      "message": "Category not found"
    }