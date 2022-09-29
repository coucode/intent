from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length

class CategoryForm(FlaskForm):
  # form variables are in camelCase to better match the front end

  name = StringField("Name", validators=[Length(max=100, message="Name must be less than 100 characters"), DataRequired(message="Name is required")])
  headline = StringField("Headline", validators=[Length(max=200, message="Headline must be less than 200 characters")])
  description = StringField("Description", validators=[Length(max=5000, message="Desription must bre less than 1000 characters")])
  purpose = StringField("Purpose", validators=[Length(max=100, message="Purpose must be less than 100 characters")])
  isPrivate = BooleanField("Private")
  icon = StringField("Icon", validators=[Length(max=1000, message="Icon input must be less than 1000 characters")])
  ownerId = IntegerField("Owner")