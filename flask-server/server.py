from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.sqlite3'
db = SQLAlchemy(app)

# Members API Route
@app.route("/members")
def members():
    return {"members": ["Sam","Alexis","Carter","Daniel","Rohit","Huskerjv?","itsdabigk?","Josh","Kyle","Liam","Henny?","Mandy","Miguel","Urjeet","Ramsey","Rushil","Tolu"]}

if __name__ == "__main__":
    app.run(debug = True)