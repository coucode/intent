from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

# -- Variables
small_str = 100
med_str = 200
long_str = 1000

# -- Tables
class Category(db.Model):
  __tablename__="categories"
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(small_str), nullable=False) # REQUIRED
  headline = db.Column(db.String(med_str)) 
  description = db.Column(db.String(5000)) 
  purpose = db.Column(db.String(small_str)) 
  is_private = db.Column(db.Boolean) 
  icon = db.Column(db.String(long_str)) 
  owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')) )

  # Relationships
  topics = db.relationship("Topic", back_populates="category", cascade="all, delete")

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
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}
    
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(small_str), nullable=False) # REQUIRED
  category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')))
  owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

  # Relationships
  category = db.relationship("Category", back_populates="topics")
  steps = db.relationship("Step", back_populates="topic", cascade="all, delete")

  def to_dict(self):
    return {
      "id": self.id,     
      "name": self.name,
      "categoryId": self.category_id,
      "ownerId": self.owner_id  
    }

class Step(db.Model):
  __tablename__="steps"
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}
    
  id = db.Column(db.Integer, primary_key=True)
  topic_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('topics.id')))
  step_number = db.Column(db.Integer, nullable=False) # REQUIRED
  summary = db.Column(db.String(med_str), nullable=False) # REQUIRED
  description = db.Column(db.String(long_str))

  # Relationship
  topic = db.relationship("Topic", back_populates="steps")


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
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}
    
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
  step_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('steps.id')))
  score = db.Column(db.Integer)

  def to_dict(self):
    return {
      "id": self.id,   
      "userId": self.user_id,
      "stepId": self.step_id,
      "score": self.score    
    }