from django.db import models
from authentication.models import User

# Create your models here.
class File (models.Model):

    name = models.TextField()
    data = models.TextField(default="")
    parent = models.ForeignKey('self', on_delete=models.CASCADE,null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return str({
            "name":self.name,
            "data":self.data,
            "parent":self.parent,
            "createdAt":self.createdAt,
            "naupdatedAtme":self.updatedAt,
            "user":self.user,
        })