from django.db import models
from authentication.models import User

# Create your models here.
class File (models.Model):

    name = models.TextField()
    data = models.TextField()
    parent = models.ForeignKey('self', on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)