from django.db import models
from categorias.models import Categoria

class Pregunta(models.Model):
    dificultad = models.CharField(max_length=50)
    enunciado = models.CharField(max_length=250) 
    categoria = models.ForeignKey(Categoria, on_delete = models.CASCADE, blank = True, null = True)
    respuesta_correcta = models.CharField(max_length=100)
    respuestas_incorrectas = models.CharField(max_length=250)

    def __str__(self):
        return self.enunciado
