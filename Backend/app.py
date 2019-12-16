from flask import Flask, request, jsonify
from main import *

def add_cors_header(response):
  allow = 'HEAD,OPTIONS,GET,POST,PUT,DELETE'
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers['Access-Control-Allow-Methods'] = allow
  response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
  response.headers['Access-Control-Expose-Headers'] = 'content-range'
  response.headers['Access-Control-Allow-Credentials'] = 'true'
  response.headers['Content-Type'] = 'application/json; charset=utf-8'
  response.headers['content-range'] = 'person 12-16/190'
  return response

app = Flask(__name__)

app.after_request(add_cors_header)

@app.route('/', methods=["POST"])
def hello_world():
  data = request.get_json()
  out = main(data) # 
  return jsonify(out)


# main driver function
if __name__ == '__main__':
  app.run(debug=True)
