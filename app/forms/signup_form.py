from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, Length, ValidationError
from app.models import User

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def valid_image(form, field):
    # Checks if the image is a valid file type.
    image = field.data
    is_valid_image = False
    if image.__contains__('png') or image.__contains__('jpg') or image.__contains__('jpeg'):
        is_valid_image = True
    if image == '':
        is_valid_image = True
    if is_valid_image == False:
        raise ValidationError('Image link is not a .png, .jpg, or .jpeg')

def valid_url(form, field):
    # Checks if the image is a valid file type.
    image = field.data
    is_valid_url = False
    if image.__contains__('http://') or image.__contains__('https://'):
        is_valid_url = True
    if image == '':
        is_valid_url = True
    if is_valid_url == False:
        raise ValidationError("Image link must begin with http:// or https://")

class SignUpForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message="Email is required"), Email(), user_exists])
    password = StringField('password', validators=[DataRequired(message="Password is required")])
    firstName = StringField('First Name', 
                        validators=[DataRequired(message='First name is required'), 
                        Length(max=100, message='First name must be less than 100 characters' )])
    lastName = StringField('Last Name', 
                        validators=[DataRequired(message='Last name is required'), 
                        Length(max=100, message='Last name must be less than 100 characters')])
    image = StringField('Image', validators=[valid_image, valid_url])