import re
from sqlalchemy.orm import validates, relationship

from database import base
import sqlalchemy as db

class User(base):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String , unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

    notes = relationship('Note', back_populates='owner')

class Note(base):
    __tablename__ = 'notes'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False, unique=True)
    content = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    owner = relationship('User', back_populates='notes')