from flask import Flask, request, redirect, url_for, render_template, send_file
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from src.api.User import User
from src.api.Project import Project
from src.api.AI_Tool import AI_Tool
import zipfile
import os

app = Flask(__name__)
app.secret_key = 'super secret key'
login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form.get('username')
    password = request.form.get('password')
    user = User(username, password)
    user.register()
    return redirect(url_for('home'))

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    user = User(username, password)
    if user and user.check_password(password):
        login_user(user)
        return redirect(url_for('home'))
    else:
        return 'Invalid credentials, please try again.'

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/profile')
@login_required
def profile():
    user = current_user
    profile_data = user.get_profile()
    return render_template('profile.html', profile_data=profile_data)

# Rest of the code...

if __name__ == '__main__':
    app.run(debug=True)
