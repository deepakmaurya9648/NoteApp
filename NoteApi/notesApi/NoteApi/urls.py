from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('index', views.IndexView.as_view()),
    path('register', views.RegisterView.as_view()),
    path('login', views.LoginView.as_view()),
    path('postNote', views.CreateNoteView.as_view()),
    path('getNote', views.ListNoteView.as_view()),
    path('deleteNote/<int:pk>/', views.DeleteNoteView.as_view()),
    path('updateNote/<int:pk>/', views.UpdateNoteView.as_view())

]
