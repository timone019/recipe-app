from django.db import models

# Create your models here.
# Ingredient Model
class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.DecimalField(max_digits=5, decimal_places=2)
    unit = models.CharField(max_length=20, default='unit')
    recipe = models.ForeignKey('recipe.Recipe', on_delete=models.CASCADE, related_name='ingredients')

    def __str__(self):
        return f"{self.name} ({self.quantity:.2f}) ({self.unit})"