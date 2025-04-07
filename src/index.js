import './style.css';
import { renderProjectList, renderTodos } from './dom';

let projects = [];


function saveToLocalStorage() {
  const projectsJSON = JSON.stringify(projects);
  localStorage.setItem('projects', projectsJSON);
}


function loadFromLocalStorage() {
  const projectsJSON = localStorage.getItem('projects');
  if (projectsJSON) {
    try {
      projects = JSON.parse(projectsJSON);
    } catch (error) {
      console.error("Error parsing data from localStorage", error);
      projects = []; 
    }
  } else {
    projects = []; 
  }
}


function init() {
  loadFromLocalStorage();
  const addProjectInput = document.getElementById('add-project-input');
  const addProjectButton = document.getElementById('add-project');
  const projectList = document.getElementById('project-list');

  
  addProjectButton.addEventListener('click', () => {
    const projectName = addProjectInput.value.trim();
    if (projectName) {
      const newProject = { name: projectName, todos: [] };
      projects.push(newProject);
      saveToLocalStorage(); 
      renderProjectList(projects, saveToLocalStorage); 
      addProjectInput.value = ''; 
    }
  });

  
  projectList.addEventListener('click', (e) => {
    const clickedProjectDiv = e.target.closest('.project-item');
    if (clickedProjectDiv) {
      const projectName = clickedProjectDiv.textContent.trim();
      const project = projects.find((p) => p.name === projectName);
      if (project) {
        renderTodos(project);
      }
    }
  });

  renderProjectList(projects, saveToLocalStorage); 
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});
