from .Project import Project

class AI_Tool:
    def __init__(self):
        pass

    def generate_project_structure(self, project_name):
        project = Project(project_name)
        project.create_project()
        print(f'Project {project_name} has been created successfully.')
