from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length

class TopicForm(FlaskForm):
  # form variables are in camelCase to better match the front end

  name = StringField("Name", validators=[DataRequired(message="Name is required"), Length(max=100, message="Name must be less than 100 characters")])
  categoryId = IntegerField("Category")
  ownerId = IntegerField("Owner")