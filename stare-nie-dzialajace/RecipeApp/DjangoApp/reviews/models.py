from django.db import models
from django.contrib.auth import get_user_model
from recipes.models import Recipe

User = get_user_model()

class Review(models.Model):
    rating = models.IntegerField()
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return f'Review by {self.user.username} on {self.recipe.title}'

    def rate(self, rating):
        self.rating = rating
        self.save()

    def comment(self, comment):
        self.comment = comment
        self.save()
