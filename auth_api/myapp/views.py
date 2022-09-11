from rest_framework import viewsets
from django.contrib.auth.models import User
from django.http.response import JsonResponse
from .models import Fileinfo
from .serializers import UserSerialiser,FileInfoSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerialiser
class FileInfoViewSet(viewsets.ModelViewSet):
    queryset = Fileinfo.objects.all()
    serializer_class = FileInfoSerializer
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]


