from django.db import models

# Create your models here.

class User(models.Model):
    username = models.TextField(default="", null= False)
    email    = models.EmailField(default="", null= False)
    password = models.TextField(default="", null= False)



class U_session(models.Model):
    user     = models.ForeignKey(User, on_delete=models.CASCADE,default=None)
    data     = models.TextField(default="{}", null= False)
