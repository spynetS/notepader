from django.db import models

# Create your models here.

class user(models.Models):
    username = models.TextField(default="", null= False)
    email    = models.EmailField(default="", null= False)
    password = models.TextField(default="", null= False)
