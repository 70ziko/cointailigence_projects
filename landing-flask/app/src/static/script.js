document.addEventListener('DOMContentLoaded', function () {
    const createProjectForm = document.getElementById('create-project-form');
    const displayStructureButton = document.getElementById('display-structure-button');
    const downloadProjectButton = document.getElementById('download-project-button');

    createProjectForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const projectName = document.getElementById('project-name').value;
        fetch('/api/create_project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: projectName }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Project created:', data);
            alert('Project created successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    displayStructureButton.addEventListener('click', function () {
        fetch('/api/display_structure')
        .then(response => response.json())
        .then(data => {
            console.log('Project structure:', data);
            alert('Project structure displayed in console!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    downloadProjectButton.addEventListener('click', function () {
        fetch('/api/download_project')
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'project.zip';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert('Project downloaded successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
