from django.db import models
from authentication.models import User

import json

# Create your models here.
class File (models.Model):

    name = models.TextField()
    data = models.TextField(default="")
    parent = models.ForeignKey('self', on_delete=models.CASCADE,null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # add uniuq id so we can refrence it

    def retJson(self):
        ret = {
            "name":self.name,
            "data":self.data,
            "parent":self.parent,
            "createdAt": str(self.createdAt),
            "naupdatedAtme": str(self.updatedAt)
        }

        return (ret)
