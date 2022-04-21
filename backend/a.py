from flask import Flask, render_template, Response
from camera import VideoCamera
import json
from collections import Counter
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import json 
import numpy as np 

app = Flask(__name__)
count=0
cal=0
data=dict({"count":0,"cal":0})
CORS(app)
@app.route('/')
def index():
    return render_template('index.js')

@app.route('/res')
def res():
    
    return data

def gen(camera,ex):
    global count
    global cal
    global data
    while True:
        
        frame,cnt,cal = camera.get_frame(ex)
        # if count!=cnt:
        count=cnt
        data["count"]=count
        data["cal"]=cal

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
               
@app.route('/squats')
def squats():
    return Response(gen(VideoCamera(),"squats"),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route('/push')
def push():
    return Response(gen(VideoCamera(),"push"),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route('/pull')
def pull():
    return Response(gen(VideoCamera(),"pull"),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route('/cru')
def cri():
    return Response(gen(VideoCamera(),"cru"),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route('/weight')
def weight():
    return Response(gen(VideoCamera(),"weight"),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
 
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=False)