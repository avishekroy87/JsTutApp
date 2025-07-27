from flask import Flask, jsonify, request

app = Flask(__name__)

tasks = [{
    'id': 1,
    'title': 'Buy groceries',
    'description': 'Milk, Bread, Eggs',
    'done': False
},
{
    'id': 2,
    'title': 'Buy stationaery',
    'description': 'Pen and Paper',
    'done': True
}]
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})
