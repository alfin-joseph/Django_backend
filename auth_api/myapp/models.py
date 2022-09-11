from django.db import models

class Fileinfo(models.Model):
    fileName = models.CharField(max_length=100,null=False,unique=True)
    Status = models.CharField(max_length=100)
    CreatedBy = models.CharField(max_length=100)
    AssignedTo = models.CharField(max_length=100)

