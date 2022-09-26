from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def createFile(request):
    
    return HttpResponse(request.GET["first"],status=403)