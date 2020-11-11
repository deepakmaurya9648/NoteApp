from rest_framework.serializers import ModelSerializer
from .models import NoteDetail
from .models import UserModel


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"


class NoteSerializer(ModelSerializer):
    class Meta:
        model = NoteDetail
        fields = "__all__"
