from flask import Flask, request, Response, jsonify
from database.db import initialize_db
from database.model import Users, Games, User
import pymongo
from flask_mongoengine import MongoEngine
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import datetime

app = Flask(__name__)

DB_URI = "mongodb+srv://markusmak:moonshot12345@cluster0.9ipmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.config["MONGODB_HOST"] = DB_URI
app.config.from_envvar('ENV_FILE_LOCATION')

db = MongoEngine(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@app.route('/api/auth/signup', methods=['POST'])
def sign_up():
    body = request.get_json()
    user = User(**body)
    user.hash_password()
    user.save()
    id = user.id
    return {'id': str(id)}, 200

@app.route('/api/auth/login', methods=['POST'])
def log_in():
    body = request.get_json()
    user = User.objects.get(email=body.get('email'))
    authorized = user.check_password(body.get('password'))
    if not authorized:
      return Response({'error': 'Email or password invalid'}, mimetype="application/json", status=200)
 
    expires = datetime.timedelta(days=7)
    access_token = create_access_token(identity=str(user.id), expires_delta=expires)
    return Response({'token': access_token}, mimetype="application/json", status=200)

@app.route("/api/auth/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@app.route('/api/game/create', methods=['POST'])
@jwt_required()
def create_game():
    data = request.get_json()
    game = Games(**data).save()
    return Response("What's up!", mimetype="application/json", status=200)

@app.route('/api/game', methods=['GET'])
@jwt_required()
def fetch_games():
    games = Games.objects().to_json()
    return Response(games, mimetype="application/json", status=200)

@app.route('/api/game/join', methods=['POST'])
@jwt_required()
def join_game():
    data = request.get_json()
    Games.objects(game_id=data["game_id"]).update_one(push__participants=data["uid"])
    return Response("Nice!", mimetype="application/json", status=200)


if __name__ =="__main__":
    app.run()





