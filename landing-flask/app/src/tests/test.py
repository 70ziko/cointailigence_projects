import unittest
import json
from flask import Flask
from app import app

class TestApp(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True 

    def test_create_project(self):
        response = self.app.post('/api/create_project', data=json.dumps(dict(name='Test Project')), content_type='application/json')
        data = json.loads(response.get_data(as_text=True))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data['name'], 'Test Project')

    def test_display_structure(self):
        response = self.app.get('/api/display_structure')
        self.assertEqual(response.status_code, 200)

    def test_download_project(self):
        response = self.app.get('/api/download_project')
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()
