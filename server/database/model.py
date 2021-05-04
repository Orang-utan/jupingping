from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class Users(db.Document):
    uid = db.StringField(required=True, unique=True)
    name = db.StringField(required=True, unique=True)
    profile_pic = db.StringField()
    curr_game = db.StringField(unique=True)
    past_games = db.ListField(db.StringField())
    

class User(db.Document):
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, p):
        return check_password_hash(self.password, p)

class Games(db.Document):
    game_type = db.BooleanField(required=True)
    created_by = db.StringField(required=True)
    uid = db.StringField(required=True)
    game_id = db.StringField(required=True, unique=True)    
    start_time = db.DateTimeField(required=True)    
    participants = db.ListField(db.StringField())
    max_participants = db.IntField(required=True)
    title = db.StringField(required=True)
    description = db.StringField(required=True)
    price = db.IntField(required=True)
    location = db.StringField(required=True)
