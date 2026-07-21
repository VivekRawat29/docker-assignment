from flask import Flask, request

app = Flask(__name__)

@app.route("/submit", methods=["POST"])
def submit():

    name = request.form.get("name")
    email = request.form.get("email")

    return f"""
    <h2>Data Received Successfully!</h2>

    <p>Name: {name}</p>

    <p>Email: {email}</p>
    """

@app.route("/")
def home():
    return "Flask Backend is Running"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)