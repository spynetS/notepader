from django.db import models

# Create your models here.

class user(models.Models):
    username = models.TextField(default="", null= False)
    email    = models.EmailField(default="", null= False)
    password = models.TextField(default="", null= False)

class u_session(models.Models):
    uId      = models.TextField(default="", null = False)
    data     = models.TextField(default="{}", null= False)
