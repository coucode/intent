from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange
from app.models import Step


class StepForm(FlaskForm):
  # form variables are in camelCase to better match the front end
  
  topicId = IntegerField("Topic")
  stepNumber = IntegerField("Step Number", validators=[DataRequired(message="Number for this step is required"), NumberRange(min=1, max=25, message="Step number must be between 1 and 25")])
  summary = StringField("Summary", validators=[DataRequired(message="Summary of this step is required"), Length(max=200, message="Summary must be less than 200 characters")])
  description = StringField("Description", validators=[Length(max=1000, message="Desription must bre less than 1000 characters")])
