from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'message', views.MessageViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("message/", views.message, name="message")
]