from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/categorias/', include('categorias.urls')),
]

"""     
    path('preguntas/', include('preguntas.urls')) """