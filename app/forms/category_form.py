from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, DateField, SubmitField
from wtforms.validators import DataRequired, NumberRange, Length

class CategoryForm(FlaskForm):
  # form variables are in camelCase to better match the front end

  name = StringField("Name", validators=[DataRequired(message="Name is required")])
  headline = StringField("Headline", validators=[Length(max=200, message="Headline must be less than 200 characters")])
  description = StringField("Description", validators=[Length(max=1000, message="Desription must bre less than 1000 characters")])
  purpose = StringField("Purpose", validators=[Length(max=100, message="Purpose must be less than 100 characters")])
  private = BooleanField("Private")
  icon = StringField("Icon", validators=[Length(max=1000, message="Icon input must be less than 1000 characters")])
  ownerId = IntegerField("Owner")