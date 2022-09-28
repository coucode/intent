from flask_sqlalchemy import SQLAlchemy
from .db import db

# -- Variables
small_str = 100
med_str = 200
long_str = 1000

# -- Tables
class Category(db.Model):
  __tablename__="categories"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(small_str), nullable=False) # REQUIRED
  headline = db.Column(db.String(med_str)) 
  description = db.Column(db.String(long_str)) 
  purpose = db.Column(db.String(small_str)) 
  is_private = db.Column(db.Boolean) 
  icon = db.Column(db.String(long_str)) 
  owner_id = db.Column(db.Integer, db.ForeignKey('users.id')) 

  def to_dict(self):
    return {
      "id": self.id, 
      "name": self.name,
      "headline": self.headline,
      "description": self.description,
      "purpose": self.purpose,
      "isPrivate": self.is_private,
      "icon": self.icon,
      "ownerId": self.owner_id
    }


class Topic(db.Model):
  __tablename__="topics"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(small_str), nullable=False) # REQUIRED
  category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
  owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  def to_dict(self):
    return {
      "id": self.id,     
      "name": self.name,
      "categoryId": self.category_id,
      "ownerId": self.owner_id  
    }

class Step(db.Model):
  __tablename__="steps"

  id = db.Column(db.Integer, primary_key=True)
  topic_id = db.Column(db.Integer, db.ForeignKey('topics.id'))
  step_number = db.Column(db.Integer, nullable=False) # REQUIRED
  summary = db.Column(db.String(med_str), nullable=False) # REQUIRED
  description = db.Column(db.String(long_str))

  def to_dict(self):
    return {
      "id": self.id, 
      "topicId": self.topic_id,
      "stepNumber": self.step_number,
      "summary": self.summary,
      "description": self.description
    }

class Score(db.Model):
  __tablename__="scores"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  step_id = db.Column(db.Integer, db.ForeignKey('steps.id'))
  score = db.Column(db.Integer)

  def to_dict(self):
    return {
      "id": self.id,   
      "userId": self.user_id,
      "stepId": self.step_id,
      "score": self.score    
    }