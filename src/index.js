import './style.css';
import {
  addTask, renderToDo,
} from './modules/functionality.js';

const form = document.getElementById('list-form');
const containerTask = document.getElementById('toDo-list');
let toDos = [];

// form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  addTask();
  renderToDo();
  localStorage.setItem('toDos', JSON.stringify(toDos));
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
    // eslint-disable-next-line no-plusplus
    for (let i = taskIndex; i < toDos.length; i++) {
      toDos[i].id = i + 1;
    }

    localStorage.setItem('toDos', JSON.stringify(toDos));
  }
});

// clear all checked button

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  const completedTasks = [];
  tasks.forEach((task, index) => {
    if (task.querySelector('.checkbox-input').checked) {
      const taskId = parseInt(task.querySelector('.text-input').getAttribute('data-id'), 10);
      const taskIndex = toDos.findIndex((task) => task.id === taskId);
      toDos[taskIndex].id = index + 1;
      task.querySelector('.text-input').setAttribute('data-id', index + 1);
      toDos.splice(taskIndex, 1);
      task.remove();
    } else {
      completedTasks.push(false);
    }
  });
  localStorage.setItem('toDos', JSON.stringify(toDos));
});

// edit task
containerTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit-task-icon')) {
    const taskElement = event.target.parentNode;
    const taskId = parseInt(taskElement.querySelector('.text-input').getAttribute('data-id'), 10);
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    const taskInput = taskElement.querySelector('.text-input');
    const newTaskValue = taskInput.value;
    toDos[taskIndex].value = newTaskValue;
    localStorage.setItem('toDos', JSON.stringify(toDos));
    renderToDo();
  }
});

window.addEventListener('load', () => {
  const storedToDos = JSON.parse(localStorage.getItem('toDos'));
  if (storedToDos) {
    toDos = storedToDos;
    renderToDo();
  }
});