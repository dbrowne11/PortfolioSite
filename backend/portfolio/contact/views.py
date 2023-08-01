from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from contact.models import Message
from contact.serializers import MessageSerializer


def index(request):
    return HttpResponse("Hello, world!")

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.AllowAny]
    print("Hello")
    # permission_classes = [permissions.(Write)]    necessary?

@api_view(['POST'])
def message(request):
    print("in message")
    print(request)
    if request.method == 'POST':
        name = request.POST.get('name')
        print(name)
    return HttpResponse(request.body)

def mail(request):
    print(request)
    if request.method == 'POST':
        name = request.POST.get('name')
        print(name)
    return HttpResponse(request)
# Create your views here.
