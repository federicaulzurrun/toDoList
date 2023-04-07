import './style.css';
import {
  renderToDo, edit,
} from './modules/functionality.js';

const form = document.getElementById('list-form');
const containerTask = document.getElementById('toDo-list');
const newToDo = document.getElementById('imput-task');
let toDos = [];

// function add taks
const addTask = () => {
  const toDoValue = newToDo.value;
  const emptyToDo = toDoValue === '';

  if (emptyToDo) return;

  const task = {
    value: toDoValue,
    completed: false,
    id: toDos.length + 1,
  };

  newToDo.value = '';
  toDos.push(task);
  localStorage.setItem('todos', JSON.stringify(toDos));

  renderToDo(); // llamamos a la función renderToDo para mostrar el nuevo elemento en la pantalla
};

// const addTask = () => {
//   const toDoValue = newToDo.value;
//   const emptyToDo = toDoValue === '';

//   if (emptyToDo) return;
//   const task = {
//     value: toDoValue,
//     completed: false,
//     id: toDos.length + 1,
//   };
//   newToDo.value = '';
//   toDos.push(task);
//   localStorage.setItem('todos', JSON.stringify(toDos));
// };
const submitIcon = document.getElementById('submit-icon');
submitIcon.addEventListener('click', addTask);

// form submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  addTask();
  renderToDo();
  localStorage.setItem('todos', JSON.stringify(toDos));
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

    localStorage.setItem('todos', JSON.stringify(toDos));
  }
});

// clear all checked button
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  const completedTasks = [];
  const newToDos = []; // new list for remaing tasks
  tasks.forEach((task) => {
    if (task.querySelector('.checkbox-input').checked) {
      const taskId = parseInt(task.querySelector('.text-input').getAttribute('data-id'), 10);
      const taskIndex = toDos.findIndex((task) => task.id === taskId);
      toDos.splice(taskIndex, 1);
      task.remove();
    } else {
      completedTasks.push(false);
      const taskId = parseInt(task.querySelector('.text-input').getAttribute('data-id'), 10);
      const taskIndex = toDos.findIndex((task) => task.id === taskId);
      // Update the task index in the new list
      newToDos.push({ ...toDos[taskIndex], id: newToDos.length + 1 });
    }
  });
  // Update the variable on the new list
  toDos = newToDos;
  localStorage.setItem('todos', JSON.stringify(toDos));
});

// edit task
containerTask.addEventListener('click', (event) => {
  const textInput = event.target.closest('.text-input');
  if (textInput) {
    const textInputs = containerTask.querySelectorAll('.text-input');
    const index = Array.from(textInputs).indexOf(textInput);
    edit(index);
  }
});

window.addEventListener('load', () => {
  const storedToDos = JSON.parse(localStorage.getItem('todos'));
  if (storedToDos) {
    toDos = storedToDos;
    renderToDo();
  }
});