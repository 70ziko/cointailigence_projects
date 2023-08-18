Project Specification:

Objective: Develop a web application that allows users to create, edit, share, and delete their own recipes.

Functional Requirements:

1. User Authentication:
   - Users can register with an email and password.
   - Users can log in with their registered email and password.

2. Recipe Management:
   - Users can create a new recipe by providing details such as recipe name, ingredients, preparation steps, cooking time, and serving size.
   - Users can edit their own recipes.
   - Users can delete their own recipes.
   - Users can view their own recipes.

3. Recipe Sharing:
   - Users can share their recipes publicly.
   - Users can view recipes shared by others.

4. User Interface:
   - The web app should have a user-friendly interface.
   - The web app should have easy navigation.

5. Security:
   - The web app should have standard security measures to protect user data.

Core Classes, Functions, Methods:

1. User:
   - register(email, password): Allows a new user to register.
   - login(email, password): Allows an existing user to log in.

2. Recipe:
   - createRecipe(name, ingredients, steps, cookingTime, servingSize): Allows a user to create a new recipe.
   - editRecipe(id, name, ingredients, steps, cookingTime, servingSize): Allows a user to edit an existing recipe.
   - deleteRecipe(id): Allows a user to delete an existing recipe.
   - viewRecipe(id): Allows a user to view a specific recipe.

3. Share:
   - shareRecipe(id): Allows a user to share a specific recipe.
   - viewSharedRecipe(id): Allows a user to view a shared recipe.

4. UI:
   - render(): Renders the user interface.
   - navigate(page): Allows navigation to different pages.

5. Security:
   - encrypt(data): Encrypts sensitive data.
   - decrypt(data): Decrypts sensitive data. 

Non-functional Requirements:

1. Performance: The web app should load quickly and respond to user interactions without delay.
2. Scalability: The web app should be able to handle an increasing number of users and recipes.
3. Reliability: The web app should have a high uptime and be free of bugs and errors.
4. Usability: The web app should be easy to use, even for non-technical users.
5. Security: The web app should protect user data and prevent unauthorized access.