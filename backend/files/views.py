from django.shortcuts import render
from django.http import HttpResponse,JsonResponse# Create your views here.
from backend.req import extract

from files.models import File
import json
from authentication.models import User

def createFile(request):
    req = extract(request)
    try:
        File( 
            name = req["name"],
            parent = File.objects.filter(id="id")[0],
            user = User.objects.filter(email=req["email"])[0],
        ).save()    
    except:
        File( 
            name = req["name"],
            user = User.objects.filter(email=req["email"])[0],
        ).save()
    
    
    return HttpResponse(req['name'],status=200)

def getFiles(request):
    req = extract(request)
    files = File.objects.filter(user=User.objects.filter(email=req["email"])[0])
    fArr = []
    for i in files:
        fArr.append(i.retJson())
    
    return HttpResponse(json.dumps(fArr))
