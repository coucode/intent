from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, DateField, SubmitField
from wtforms.validators import DataRequired, NumberRange, Length

class TopicForm(FlaskForm):
  # form variables are in camelCase to better match the front end

  name = StringField("Name", validators=[DataRequired(message="Name is required")])
  categoryId = IntegerField("Category")
  ownerId = IntegerField("Owner")