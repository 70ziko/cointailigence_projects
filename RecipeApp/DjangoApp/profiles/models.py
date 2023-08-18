from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    recipes = models.ManyToManyField('recipes.Recipe', blank=True)

    def view_profile(self):
        return {
            'username': self.user.username,
            'email': self.user.email,
            'bio': self.bio,
            'location': self.location,
            'recipes': [recipe.title for recipe in self.recipes.all()]
        }
    
    def edit_profile(self, bio, location):
        self.bio = bio
        self.location = location
        self.save()

    def __str__(self):
        return self.user.username
