from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Fileinfo

class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password']
        extra_kwargs = {'password':{'write_only':True,'required':True}}


    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
class FileInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fileinfo
        fields = ['fileName','Status','CreatedBy','AssignedTo']