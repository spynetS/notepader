from django.shortcuts import render
from django.http import HttpResponse# Create your views here.
from backend.req import extract

from files.models import File

from authentication.models import User

def createFile(request):
    
    File(
        name = req["name"],
        parent = File.objects.filter(id="id")[0],
        user = User.objects.filter(email=req["email"])[0],
    )
    
    return HttpResponse(req['name'],status=200)