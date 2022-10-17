from django.http import HttpResponse
from authentication.models import User
from authentication.models import U_session
from backend.req import extract

import json
from passlib.hash import argon2

def createUser(request):
    req   = extract(request)
    _user = User(username= req["username"], email= req["email"], password= (req["password"]))
    _user.save()
    return HttpResponse("ok",status=200)

def loginUser(request):
    req  = extract(request)
    try:
        user = User.objects.filter(email=req["email"],password=(req["password"]))[0]
        return HttpResponse(json.dumps({"email":user.email,"username":user.username}),status=200)

    except:
        return HttpResponse("no user with those cridensials",status=403)

