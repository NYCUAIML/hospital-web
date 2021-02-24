from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import pymysql

app = Flask(__name__)
api = Api(app)

CORS(app)
connection = pymysql.connect(host='140.113.59.182',user='rickylu6',password='r6852625',db='angular')

@app.route("/")
def hello():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM `user`")
        all = cursor.fetchall() 
        return jsonify(all)
    ##return jsonify({'text':'Hello World!'})

@app.route("/formjson")
def getform():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM `formjson`")
        all = cursor.fetchall() 
        return jsonify(all)
    ##return jsonify({'text':'Hello World!'})

class Employees(Resource):
    def get(self):
        return {'employees': [{'id':1, 'name':'Balram'},{'id':2, 'name':'Tom'}]} 

class Employees_Name(Resource):
    def get(self, employee_id):
        print('Employee id:' + employee_id)
        result = {'data': {'id':1, 'name':'Balram'}}
        return jsonify(result)       


api.add_resource(Employees, '/employees') # Route_1
api.add_resource(Employees_Name, '/employees/<employee_id>') # Route_3


if __name__ == '__main__':
     app.run(port=5002)