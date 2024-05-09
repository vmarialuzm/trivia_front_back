from django.urls import path
from .views import CategoriaApiView, CategoriaDetailApiView

urlpatterns = [
    path('', CategoriaApiView.as_view()),
    path('<int:pk>/', CategoriaDetailApiView.as_view())
]