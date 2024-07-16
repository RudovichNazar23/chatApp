from rest_framework.viewsets import ModelViewSet
import rest_framework.permissions as permissions

from django.contrib.auth.models import User

from .serializers import UserSerializer

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
