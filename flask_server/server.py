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

class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    artist = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)

                            
class Playlist(db.Model):
   id = db.Column(db.Integer, primary_key=True, autoincrement=True)
   date = db.Column(db.DateTime, nullable=False)
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
    name = db.Column(db.String, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    image = db.Column(db.String,
                    default="some s3 bucket url",
                    nullable=True)
    playlists = db.relationship('Playlist',
                                backref='show',
                                lazy=True)
    user_id = db.Column(db.Integer,
                        db.ForeignKey('user.id'),
                        nullable=False)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uin = db.Column(db.Integer, unique=True, nullable=False)
    bio = db.Column(db.String)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    dj_name = db.Column(db.String, unique=True, nullable=True)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    shows = db.relationship('Show',
                                backref='user',
                                lazy=True)
    officer = db.Column(db.Boolean, default=False, nullable=False)
    officer_title = db.Column(db.String, nullable=True)
    articles = db.relationship('Article',
                                backref='user',
                                lazy=True)

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date = db.Column(db.DateTime,
                    default=datetime.utcnow(),
                    nullable=False)
    content = db.Column(db.String, nullable=False)
    header = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer,
                        db.ForeignKey('user.id'),
                        nullable=False)



# Create the database before we take any requests
@app.before_first_request
def init_db():
    db.create_all()

    # Add a test officer if not added already.
    if not User.query.filter_by(uin=423).first():
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
    '''
    Example Request:
    {
        "uin": "1337",
        "password": "mmilf",
        "first_name": "kanye",
        "last_name": "west",
        "dj_name": "ye",
        "email": "mmilf@mmilf.com"
    }

    Example Response:
    {
        "access_token": "fdsfsdfsd"
    }
    '''
    uin = request.form.get("uin", None)
    password = request.form.get("password", None)
    first_name = request.form.get("first_name", None)
    last_name = request.form.get("last_name", None)
    dj_name = request.form.get("dj_name", None)
    email = request.form.get("email", None)

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
                    email=email)

    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@app.route("/login", methods=["GET"])
def login():
    '''
    Example Request:
    {
        "email": "123",
        "password": "mmilf"
    }

    Example Response:
    {
        "access_token": "fdsfsdfsd",
        "dj_name": "Yeat
    }
    '''
    email = request.form.get("email", None)
    password = request.form.get("password", None)

    current_user = User.query.filter_by(email=email, password=password).first()
    if current_user:
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token, dj_name=current_user.dj_name)
    else:
        return jsonify({"msg": "Wrong UIN and/or password!"}), 401

'''
For every @jwt_required request, you must include the following
to get permission.
{
    "Authorization": "Bearer {access_token}"
}
'''
@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = User.query.filter_by(uin=get_jwt_identity()).first()
    return jsonify(logged_in_as=current_user.dj_name)


@app.route("/add_show", methods=["POST"])
@jwt_required()
def add_show():
    '''
    Example Request:
    {
        "email": "xxx@gmail.com",
        "date": "YYYY-MM-DD hh:mm:ss am/pm",
        "show_name": "sorry bout dat",
        "image": "pepesmile.jpeg"
    }
    The email is the user who is the DJ of the show (not the officer).

    The date will be incremented weekly so just put the start date
    for the show every semester.

    This request must come from an officer's account. If not, then
    it will be invalid.
    '''
    current_user = User.query.filter_by(uin=get_jwt_identity()).first()
    if not current_user.officer:
        return jsonify({"msg": "Only officers are allowed to add shows!"}), 401

    email = request.form.get("email", 0)
    date = request.form.get("date", 0)
    show_name = request.form.get("show_name", 0)

    new_show_user = User.query.filter_by(email=email).first()
    if not new_show_user:
        return jsonify({"msg": "Dj does not exist!"}), 404

    new_show = Show(date=date,
                    user_id=new_show_user.id,
                    name=show_name)

    db.session.add(new_show)
    db.session.commit()

    return jsonify({"msg": "Success!"})

@app.route("/add_article", methods=["POST"])
@jwt_required()
def add_article():
    '''
    Example Request:
    {
        "email": "xxx",
        "header": "lorem ipsum",
        "content": "lorem ipsum...",
        "image": "pepesmile.jpeg",
    }
    The email is the user who has submitted the article (not the officer).

    This request must come from an officer's account. If not, then
    it will be invalid.
    '''
    current_user = User.query.filter_by(uin=get_jwt_identity()).first()
    if not current_user.officer:
        return jsonify({"msg": "Only officers are allowed to add articles!"}), 401

    email = request.form.get("email", 0)
    header = request.form.get("header", 0)
    content = request.form.get("content", 0)
    image = request.form.get("image", 0)

    new_article_user = User.query.filter_by(email=email).first()
    if not new_article_user:
        return jsonify({"msg": "User does not exist!"}), 404

    new_article = Article(user_id=new_article_user.id,
                        header=header,
                        content=content,
                        image=image)

    db.session.add(new_article)
    db.session.commit()

    return jsonify({"msg": "Success!"})

@app.route("/get_show", methods=["GET"])
def get_show():
    '''
    Example Request:
    {
        "show_id": "54634"
    }

    Example Response:
    {
        "dj_name": "yeat",
        "user_id": "1234",
        "time": "Fridays on 7:30 pm to 8:30pm",
        "show_name": "sorry bout dat",
        "playlists": {
            "April 20, 2022": "playlist_id",
            "April 27, 2022": "2nd_playlist_id"
        },
    }
    '''
    return jsonify({"msg": "Need more info on database"})

@app.route("/get_user", methods=["GET"])
def get_dj():
    '''
    Example Request:
    {
        "user_id": "1234"
    }

    Example Response:
    {
        "dj_name": "yeat",
        "show_name": "sorry bout dat",
        "show_id": "54634
        "bio": "i should get out moooooore",
        "image": "{some s3 bucket url}",
        "officer_title": "webmaster :nerd:"
    }

    officer_title will only be returned if the user is an officer.
    dj_title will only be returned if the user is a dj.
    '''
    return jsonify({"msg": "Need more info on database"})

@app.route("/get_playlist", methods=["GET"])
def get_playlist():
    '''
    Example Request:
    {
        "playlist_id": "12211"
    }

    Example Response:
    {
        "show_name": "sorry bout dat",
        "dj_name": "yeat",
        "date": "2022-04-20 04:20:20 pm",
        "songs": [
                ("Hey Soul Sister", album, "Train"),
                ("Duvet", album, "Boa"),
                ("Do it Again", album, "Steely Dan")
            ]
    }
    '''
    return jsonify({"msg": "Need more info on database"})

@app.route("/get_article", methods=["GET"])
def get_article():
    '''
    Example Request:
    {
        "article_id": "4232"
    }

    Example Response:
    {
        "first_name": "yeah yeah yeah",
        "last_name": "s",
        "dj_name": "yeat",
        "date": "2022-04-20",
        "content": "lorem ipsum...",
        "header": "lorem ipsum",
        "image": "{some s3 bucket url}"
    }
    '''
    return jsonify({"msg": "Need more info on database"})


if __name__ == "__main__":
    app.run(debug = True)