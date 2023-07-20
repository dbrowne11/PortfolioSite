from django.db import models

# Create your models here.

class Message(models.Model):
    name = models.CharField(max_length=128)
    date = models.DateTimeField("Time sent")
    subject = models.CharField(max_length=128)
    text = models.CharField(max_length=2048)
    email = models.CharField(max_length=128)

    def __str__(self) -> str:
        return f"{self.name}: {self.email} \n {self.subject}"
    