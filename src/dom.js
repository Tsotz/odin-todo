
export function renderProjectList(projects, saveToLocalStorage) {
    const sideBar = document.getElementById('project-list');
    if (!sideBar) {
      console.error('Sidebar element not found!');
      return;
    }
    sideBar.innerHTML = ''; 
  
    projects.forEach((project) => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project-item');
      projectDiv.textContent = project.name;
  
      const addTodoButton = document.createElement('button');
      addTodoButton.textContent = 'Add Todo';
      addTodoButton.classList.add('add-todo-button');
      addTodoButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const todoInput = prompt(`Enter a todo for "${project.name}":`);
        if (todoInput) {
          project.todos.push(todoInput);
          saveToLocalStorage(); 
          renderProjectList(projects, saveToLocalStorage); 
        }
      });
  
      projectDiv.appendChild(addTodoButton);
  
      const todoList = document.createElement('ul');
      project.todos.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo;
        todoList.appendChild(todoItem);
      });
  
      projectDiv.appendChild(todoList);
      sideBar.appendChild(projectDiv);
    });
  }
  
  
  export function renderTodos(project) {
    const todosContainer = document.getElementById('todos');
    if (!todosContainer) {
      console.error('Todos container not found!');
      return;
    }
  
    todosContainer.innerHTML = '';
  
    const heading = document.createElement('h2');
    heading.textContent = `Todos for "${project.name}"`;
    todosContainer.appendChild(heading);
  
    const todoList = document.createElement('ul');
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('li');
      todoItem.textContent = todo;
      todoList.appendChild(todoItem);
    });
  
    todosContainer.appendChild(todoList);
  }
  