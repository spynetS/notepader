from django.http import HttpResponse
from authentication.models import user
from authentication.models import u_session
from backend.req import extract

import json
from passlib.hash import argon2

def createUser(request):
    req = extract(request)
    _user    = user(username= req["username"], email= req["email"], password= argon2.hash(req["password"]))
    _session = u_session(uId= _user.id, data= json.dumps({"username": req["username"], "email": req["email"]}))
    return HttpResponse(_session.id)

def loginUser(request):
    req = json.loads(request)
