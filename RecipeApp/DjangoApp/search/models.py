from django.db import models
from recipes.models import Recipe

class Search(models.Model):
    title = models.CharField(max_length=255, blank=True)
    ingredients = models.TextField(blank=True)
    cooking_time = models.IntegerField(null=True, blank=True)

    def search(self):
        # Use Django's ORM to search for recipes based on the parameters provided
        # Start with all recipes
        query = Recipe.objects.all()

        # Filter by title if provided
        if self.title:
            query = query.filter(title__icontains=self.title)

        # Filter by ingredients if provided
        if self.ingredients:
            query = query.filter(ingredients__icontains=self.ingredients)

        # Filter by cooking time if provided
        if self.cooking_time:
            query = query.filter(cooking_time__lte=self.cooking_time)

        # Return the filtered recipes
        return query
