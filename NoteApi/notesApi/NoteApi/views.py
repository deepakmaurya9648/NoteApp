from django.shortcuts import render
from django.contrib.auth import authenticate
from django.http import Http404
from rest_framework.authtoken.models import Token
from rest_framework.authentication import SessionAuthentication, BaseAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from . import models
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import CreateAPIView, ListAPIView, DestroyAPIView, UpdateAPIView
from . import serializers


# Create your views here.
class IndexView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'OK': 'Works Fine!'})


class RegisterView(APIView):
    permission_classes = ()

    def post(self, request):
        try:
            first_name = request.data.get('first_name')
            last_name = request.data.get('last_name')
            username = request.data.get('username')
            email = request.data.get('email')
            password = request.data.get('password')

            validateEmail = User.objects.filter(email=email).count()
            if validateEmail > 0:
                raise Http404
            else:
                model = models.UserModel()

                userObject = User(email=email, username=username, first_name=first_name, last_name=last_name)
                userObject.set_password(password)
                userObject.save()
                Token.objects.create(user=userObject)
                model.user = userObject

                model.save()

                return Response({'registered': 'registered successfully'})
        except:
            raise Http404


class LoginView(APIView):
    permission_classes = ()

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            return Response({'Login Success': 'Success', 'Token': user.auth_token.key, 'user': user.first_name})
        else:
            return Response({'error': 'recheck the credentials'})


class CreateNoteView(APIView):
    permission_classes = [IsAuthenticated, ]

    def post(self, request):
        title = request.data.get('title')
        body = request.data.get('body')
        user = request.user
        modelTest = models.NoteDetail(title=title, body=body, user=user)
        modelTest.save()
        return Response({'saved': 'Note saved successfully!'})


class ListNoteView(ListAPIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        model = models.NoteDetail.objects.filter(user=request.user)
        serializer_class = serializers.NoteSerializer(model, many=True)
        return Response(serializer_class.data)


class DeleteNoteView(DestroyAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = serializers.NoteSerializer
    queryset = models.NoteDetail.objects.all()


class UpdateNoteView(UpdateAPIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = serializers.NoteSerializer
    queryset = models.NoteDetail.objects.all()
