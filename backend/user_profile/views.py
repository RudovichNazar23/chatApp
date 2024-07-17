from rest_framework.viewsets import ModelViewSet
import rest_framework.permissions as permissions

from django.contrib.auth.models import User

from .serializers import UserSerializer
from .permissions import IsOwner

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_permissions(self):
        permission_classes = []

        if self.action == "create":
            permission_classes = [permissions.AllowAny]
        elif self.action in ("list",):
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.IsAuthenticated, IsOwner]
        return [permission() for permission in permission_classes]
