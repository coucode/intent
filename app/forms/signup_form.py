from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, Length, ValidationError, URL
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message="Email is required"), Email(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    firstName = StringField('First Name', 
                        validators=[DataRequired(message='First name is required'), 
                        Length(max=100, message='First name must be less than 100 characters' )])
    lastName = StringField('Last Name', 
                        validators=[DataRequired(message='Last name is required'), 
                        Length(max=100, message='Last name must be less than 100 characters')])
    image = StringField('Image')