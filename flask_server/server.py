from flask import jsonify
from flask import request
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask import Flask
import os
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'database.db')
app.config["JWT_SECRET_KEY"] = ":mmilf:"
db = SQLAlchemy()
db.init_app(app)
jwt = JWTManager(app)

songs = db.Table('songs',
    db.Column('song_id', db.Integer, db.ForeignKey('song.id'), primary_key=True),
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlist.id'), primary_key=True)
)

permissions = db.Table('permissions',
    db.Column('permission_id', db.String, db.ForeignKey('permission.id'), primary_key=True),
    db.Column('user_id', db.String, db.ForeignKey('user.id'), primary_key=True)
)

roles = db.Table('roles',
    db.Column('role_id', db.String, db.ForeignKey('role.id'), primary_key=True),
    db.Column('user_id', db.String, db.ForeignKey('user.id'), primary_key=True)
)

class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    artist = db.Column(db.String,
                    default=datetime.utcnow,
                    nullable=False)

                            
class Playlist(db.Model):
   id = db.Column(db.Integer, primary_key=True, autoincrement=True)
   date = db.Column(db.DateTime,
                    default=datetime.utcnow(),
                    nullable=False)
   songs = db.relationship('Song',
                        secondary=songs,
                        lazy='subquery',
                        backref=db.backref('songs',
                        lazy=True))
   show_id = db.Column(db.Integer,
                        db.ForeignKey('show.id'),
                        nullable=False)

class Show(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date = db.Column(db.DateTime,
                    default=datetime.utcnow(),
                    nullable=False)
    playlists = db.relationship('Playlist',
                                backref='show',
                                lazy=True)
    user_id = db.Column(db.String,
                        db.ForeignKey('user.id'),
                        nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uin = db.Column(db.Integer, unique=True, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    dj_name = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    shows = db.relationship('Show',
                                backref='user',
                                lazy=True)
    permissions = db.relationship('Permission',
                                secondary=permissions,
                                lazy='subquery',
                                backref=db.backref('user', lazy=True))
    roles = db.relationship('Role',
                            secondary=roles,
                            lazy='subquery',
                            backref=db.backref('user', lazy=True))
    officer = db.Column(db.Boolean, nullable=False)

    
class Permission(db.Model):
    id = db.Column(db.String, primary_key=True)

class Role(db.Model):
    id = db.Column(db.String, primary_key=True)

# Create the database before we take any requests
@app.before_first_request
def init_db():
    db.create_all()
    new_user = User(uin=423,
                    first_name="Noah",
                    password="balaclava",
                    last_name="Smith",
                    dj_name="Yeat",
                    email="yeat@gmail.com",
                    officer=True)
    db.session.add(new_user)
    db.session.commit()

# Members API Route
@app.route("/members")
def members():
    return {"members": ["Sam","Alexis","Carter","Daniel","Rohit","Huskerjv?","itsdabigk?","Josh","Kyle","Liam","Henny?","Mandy","Miguel","Urjeet","Ramsey","Rushil","Tolu"]}

@app.route("/register", methods=["POST"])
def register():
    print(request)
    uin = request.form.get("uin", None)
    password = request.form.get("password", None)
    first_name = request.form.get("first_name", None)
    last_name = request.form.get("last_name", None)
    dj_name = request.form.get("dj_name", None)
    email = request.form.get("email", None)
    officer = request.form.get("officer", None) == "Yes"

    if User.query.filter_by(uin=uin).first():
        return jsonify({"msg": "UIN already in use!"}), 401
    elif User.query.filter_by(dj_name=dj_name).first():
        return jsonify({"msg": "DJ Name already in use!"}), 401
    elif User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already in use!"}), 401
    
    new_user = User(uin=uin,
                    first_name=first_name,
                    password=password,
                    last_name=last_name,
                    dj_name=dj_name,
                    email=email,
                    officer=officer)

    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=uin)
    return jsonify(access_token=access_token)

@app.route("/login", methods=["GET"])
def login():
    uin = request.form.get("uin", None)
    password = request.form.get("password", None)

    current_user = User.query.filter_by(uin=uin, password=password).first()
    if current_user:
        access_token = create_access_token(identity=uin)
        return jsonify(access_token=access_token, dj_name=current_user.dj_name)


@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = User.query.filter_by(uin=get_jwt_identity()).first()
    return jsonify(logged_in_as=current_user.dj_name)

if __name__ == "__main__":
    app.run(debug = True)