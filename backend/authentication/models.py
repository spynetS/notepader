from django.db import models

# Create your models here.

class User(models.Models):
    username = models.TextField(default="", null= False)
    email    = models.EmailField(default="", null= False)
    password = models.TextField(default="", null= False)

class U_session(models.Models):
    uId      = models.TextField(default="", null = False)
    data     = models.TextField(default="{}", null= False)
