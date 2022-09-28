from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from flask_login import login_required

from ..models import db, Topic
from app.forms.topic_form import TopicForm

topic_routes = Blueprint('topic', __name__)

# Gets all categories
@topic_routes.route("")
def all_topics():
  topics = [topic.to_dict() for topic in Topic.query.all()]
  return {"topics": topics}

# Gets one category
@topic_routes.route("/<int:id>")
def one_topic(id):
  topic = Topic.query.get(id)
  if topic is not None:
    return topic.to_dict()
  else: 
    return {
      "statusCode": 404, 
      "message": "Topic not found"
    }

# Creates a new topic
@topic_routes.route("", methods=["POST"])
def new_topic():
  form = TopicForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    new_topic = Topic(
      name=form.data['name'],
      category_id=form.data['categoryId'],
      owner_id=form.data['ownerId']
    )
    db.session.add(new_topic)
    db.session.commit()
    return new_topic.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Update an existing topic
@topic_routes.route("/<int:id>", methods=["PUT"])
def update_topic(id):
  update_form = TopicForm()
  update_form['csrf_token'].data = request.cookies['csrf_token']

  if update_form.validate_on_submit():
    Topic.query.filter(Topic.id == id).update({
      "name": update_form.data['name'],
      "category_id": update_form.data['categoryId'],
      "owner_id": update_form.data['ownerId']
    })
    db.session.commit()
    topic = Topic.query.filter(Topic.id == id)[0]
    return topic.to_dict()
  return {'errors': validation_errors_to_error_messages(update_form.errors)}, 401

# Delete an existing topic
@topic_routes.route('/<int:id>', methods=["DELETE"])
def delete_topic(id):
  topic = Topic.query.get(id)
  if topic is not None:
    db.session.delete(topic)
    db.session.commit()
    return {
      "statusCode": 200,
      "message": f'Successfully deleted {topic.name}'
    }
  else: 
    return {
      "statusCode": 404,
      "message": "Topic not found"
    }