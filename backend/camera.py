import cv2 
import json
import math
import numpy as np
import cv2
import time
import posemodule as pm

class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        print("videocap started")

    def __del__(self):
        self.video.release()

    def get_frame(self):
            #if ex=="sqauts":
                        pTime = 0
                        detector = pm.poseDetector()
                        count = 0

                        f=0
                        
                        while count < 100000000:
                            ret, img = self.video.read()
                            img = detector.findPose(img)
                            lmlist = detector.getPosition(img,draw=False)
                            
                            # if u want all dots then put draw= true and comment out the cv2.circle part in the if part below
                            
                            if len(lmlist)!=0:
                                cv2.circle(img,(lmlist[25][1],lmlist[25][2]),10,(0,0,255),cv2.FILLED)
                                cv2.circle(img,(lmlist[23][1],lmlist[23][2]),10,(0,0,255),cv2.FILLED) 
                                #print(lmlist[23])
                                y1 = lmlist[25][2]
                                y2 = lmlist[23][2]
                                
                                length = y2-y1
                                if length>=0 and f==0:
                                    f=1
                                elif length<-50 and f==1:
                                    f=0
                                    count=count+1       

                                cTime = time.time()
                                fps = 1/(cTime-pTime)
                                pTime = cTime
                                cv2.putText(img,"Total Number of Squats  "+str(int(count)),(70,50),cv2.FONT_HERSHEY_DUPLEX,1,
                                (60,100,255),3)
                                cv2.putText(img,"Calories Burnt  "+str(int(count)*0.32),(70,150),cv2.FONT_HERSHEY_DUPLEX,1,
                                (60,100,255),3)
                                img = cv2.resize(img, (600,600))                 # Resize image
                                
                                calories = 0.32*count

                        ret, jpeg = cv2.imencode('.jpg', img)
                        return jpeg.tobytes()
