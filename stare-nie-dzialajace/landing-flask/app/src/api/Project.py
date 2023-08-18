import os
import shutil
import zipfile

class Project:
    def __init__(self, name):
        self.name = name

    def create_project(self):
        os.makedirs(self.name, exist_ok=True)

    def display_structure(self, start_path=None):
        if start_path is None:
            start_path = self.name

        for root, dirs, files in os.walk(start_path):
            level = root.replace(start_path, '').count(os.sep)
            indent = ' ' * 4 * level
            print('{}{}/'.format(indent, os.path.basename(root)))
            sub_indent = ' ' * 4 * (level + 1)
            for f in files:
                print('{}{}'.format(sub_indent, f))

    def download_project(self):
        shutil.make_archive(self.name, 'zip', self.name)
        print('Project zipped successfully! You can download it from the following link:')
        print(os.path.abspath(self.name + '.zip'))
