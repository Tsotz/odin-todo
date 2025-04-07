import './style.css';
import Project from './project.js';
import Todo from './todo.js';
import { renderProjectList, renderTodos } from './dom.js';

const projects = [new Project('Default Project')];
renderProjectList(projects);
renderTodos(projects[0]);
