from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    ingredients = models.TextField()
    cooking_time = models.IntegerField()
    steps = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def create(self, title, description, ingredients, cooking_time, steps, user):
        self.title = title
        self.description = description
        self.ingredients = ingredients
        self.cooking_time = cooking_time
        self.steps = steps
        self.user = user
        self.save()

    def share(self, user):
        # This is a simple implementation for sharing a recipe.
        # In a real application, you might want to send an email or notification to the user.
        print(f"{self.user.username} shared a recipe with you: {self.title}")
