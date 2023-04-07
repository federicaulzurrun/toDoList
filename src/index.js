import './style.css';
import {
  addTask, renderToDo,
} from './modules/functionality.js';

const form = document.getElementById('list-form');
const containerTask = document.getElementById('toDo-list');
const toDos = [];

// form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  addTask();
  renderToDo();
  localStorage.setItem('toDos', JSON.stringify(toDos));
});

// edit task
containerTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-task-icon')) {
    const taskElement = event.target.parentNode;
    // eslint-disable-next-line radix
    const taskId = parseInt(taskElement.querySelector('.text-input').getAttribute('data-id'));
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    const taskInput = taskElement.querySelector('.text-input');
    const newTaskValue = taskInput.value;
    toDos[taskIndex].value = newTaskValue;
    localStorage.setItem('toDos', JSON.stringify(toDos));
    renderToDo();
  }
});

// delete task
containerTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task-icon')) {
    const taskElement = event.target.parentNode;
    const taskId = parseInt(taskElement.querySelector('.text-input').getAttribute('data-id'), 10);
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    toDos.splice(taskIndex, 1);
    taskElement.remove();

    // update the id of the remaining tasks
    for (let i = taskIndex; i < toDos.length; i += 1) {
      toDos[i].id = i + 1;
    }

    localStorage.setItem('toDos', JSON.stringify(toDos));
  }
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  const completedTasks = [];
  tasks.forEach((task, index) => {
    if (task.querySelector('.checkbox-input').checked) {
      // eslint-disable-next-line radix
      const taskId = parseInt(task.querySelector('.text-input').getAttribute('data-id'));
      const taskIndex = toDos.findIndex((task) => task.id === taskId);
      toDos.splice(taskIndex, 1);
      task.remove();
    } else {
      completedTasks.push(false);
    }
    // update ids
    // eslint-disable-next-line radix
    const taskId = parseInt(task.querySelector('.text-input').getAttribute('data-id'));
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    toDos[taskIndex].id = index + 1;
    task.querySelector('.text-input').setAttribute('data-id', index + 1);
  });
  localStorage.setItem('toDos', JSON.stringify(toDos));
});

document.addEventListener('DOMContentLoaded', () => {
  renderToDo();
});
