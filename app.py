from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')


@app.route("/bt")
def bt():
    return render_template('bt.html')
    