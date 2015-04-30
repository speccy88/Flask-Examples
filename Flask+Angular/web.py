# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, jsonify
#http://flask-triangle.readthedocs.org/en/develop/installing.html
from flask.ext.triangle import Triangle
from random import randint
import platform
import json
import os

app = Flask(__name__)
Triangle(app)

@app.route("/")
def Index():
    return render_template("index.html")

@app.route("/api/hostinfo")
def getHostInfo():
    hostinfo = {
        "platform":platform.platform(),
        "hostname":platform.node(),
        "machine":platform.machine(),
        "version":platform.version(),
    }
    return jsonify(hostinfo)

@app.route("/api/random")
def getRandom():
    random = {"random":randint(1,100)}
    return jsonify(random)    
    
@app.route("/api/update",  methods=['POST'])
def postUpdate():
    data = json.loads(request.data)
    print data
    return "Success"	
	
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)