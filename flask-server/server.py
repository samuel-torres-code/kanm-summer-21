from flask import Flask


app = Flask(__name__)


# Members API Route
@app.route("/members")
def members():
    return {"members": ["Sam","Alexis","Carter","Daniel","Rohit","Huskerjv?","itsdabigk?","Josh","Kyle","Liam","Henny?","Mandy","Miguel","Urjeet","Ramsey","Rushil","Tolu"]}

if __name__ == "__main__":
    app.run(debug = True)