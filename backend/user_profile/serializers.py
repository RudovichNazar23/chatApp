from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers

from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password", "email", "first_name", "last_name"]
    
    def create(self, validated_data):
        user = User(**validated_data)
        password = validated_data["password"]

        try:
            validate_password(password=password)
            user.set_password(password)
            user.save()
        except ValidationError as error:
            raise serializers.ValidationError({"password": error.messages})
        return user
    