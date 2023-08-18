from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("register/", include("users.views.register"), name="register"),
    path("login/", include("users.views.login"), name="login"),
    path("logout/", include("users.views.logout"), name="logout"),
    path("recipe/create/", include("recipes.views.create"), name="create_recipe"),
    path("recipe/share/", include("recipes.views.share"), name="share_recipe"),
    path("review/", include("reviews.views.review"), name="review"),
    path("profile/view/", include("profiles.views.view"), name="view_profile"),
    path("profile/edit/", include("profiles.views.edit"), name="edit_profile"),
    path("search/", include("search.views.search"), name="search"),
]
