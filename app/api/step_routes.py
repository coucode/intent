from flask import Blueprint, request
from app.api.auth_routes import validation_errors_to_error_messages
from flask_login import login_required
from ..models import db, Step
from ..forms.step_form import StepForm

step_routes = Blueprint('step', __name__)

# Gets all steps
@step_routes.route("")
def all_steps():
  steps = [step.to_dict() for step in Step.query.all()]
  return {"steps": steps}

# Gets one step
@step_routes.route("/<int:id>")
def one_step(id):
  step = Step.query.get(id)
  if step is not None:
    return step.to_dict()
  else: 
    return {
      "statusCode": 404, 
      "message": "Topic not found"
    }

# Creates a new step
@step_routes.route("", methods=["POST"])
def new_step():
  form = StepForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    new_step = Step(
      topic_id = form.data['topicId'],
      step_number = form.data['stepNumber'],
      summary = form.data['summary'],
      description = form.data['description']
    )
    db.session.add(new_step)
    db.session.commit()
    return new_step.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Update an existing step
@step_routes.route("/<int:id>", methods=["PUT"])
def update_step(id):
  update_form = StepForm()
  update_form['csrf_token'].data = request.cookies['csrf_token']

  if update_form.validate_on_submit():
    Step.query.filter(Step.id == id).update({
      "topic_id": update_form.data['topicId'],
      "step_number": update_form.data['stepNumber'],
      "summary": update_form.data['summary'],
      "description": update_form.data['description']
    })
    db.session.commit()
    step = Step.query.filter(Step.id == id)[0]
    return step.to_dict()
  return {'errors': validation_errors_to_error_messages(update_form.errors)}, 401


# Delete an existing step
@step_routes.route('/<int:id>', methods=["DELETE"])
def delete_step(id):
  step = Step.query.get(id)
  if step is not None:
    db.session.delete(step)
    db.session.commit()
    return {
      "statusCode": 200,
      "message": f'Successfully deleted {step.summary}'
    }
  else: 
    return {
      "statusCode": 404,
      "message": "Topic not found"
    }