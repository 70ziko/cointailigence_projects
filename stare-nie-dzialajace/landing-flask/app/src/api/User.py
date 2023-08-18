from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(UserMixin):
    def __init__(self, username, password):
        self.username = username
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def get_id(self):
        return self.username

    def register(self):
        # Registration logic goes here

    def get_profile(self):
        # Return user profile data
        return {
            'username': self.username,
            # Add more profile data here
        }
