from server import db
import datetime

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
    id = db.Column(db.Integer, primary_key=True)
    artist = db.Column(db.String,
                    default=datetime.utcnow,
                    nullable=False)

    playlists = db.relationship('Playlist',
                                backref='show',
                                lazy=True)
                            
class Playlist(db.Model):
   id = db.Column(db.Integer, primary_key=True)
   date = db.Column(db.DateTime,
                    default=datetime.utcnow,
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
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime,
                    default=datetime.utcnow,
                    nullable=False)
    playlists = db.relationship('Playlist',
                                backref='show',
                                lazy=True)
    user_id = db.Column(db.String,
                        db.ForeignKey('user.id'),
                        nullable=False)

class User(db.Model):
    # id is their uin
    id = db.Column(db.String, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    dj_name = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
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