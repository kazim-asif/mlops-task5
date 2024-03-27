# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
client = MongoClient("mongodb://mongo:27017/")
db = client["mydatabase"]
collection = db["userdata"]

@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json
    collection.insert_one(data)
    return jsonify({"message": "Data stored successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
