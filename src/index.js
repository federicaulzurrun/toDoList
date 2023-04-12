import './style.css';
import {
  renderToDo,
  edit,
} from './modules/functionality.js';
import { clearAll, strikeThrough } from './modules/interactive.js';

const form = document.getElementById('list-form');
const containerTask = document.getElementById('toDo-list');
const newToDo = document.getElementById('imput-task');
let toDos = [];

// arrow function add task
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

  // update the task value of the edited input before rendering the tasks
  const editedInput = containerTask.querySelector('.text-input.edit');
  if (editedInput) {
    const taskId = parseInt(editedInput.getAttribute('data-id'), 10);
    const taskIndex = toDos.findIndex((task) => task.id === taskId);
    toDos[taskIndex].value = editedInput.value;
    editedInput.classList.remove('edit');
  }

  renderToDo();
};

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
    for (let i = taskIndex; i < toDos.length; i += 1) {
      toDos[i].id = i + 1;
    }

    localStorage.setItem('todos', JSON.stringify(toDos));
  }
});

containerTask.addEventListener('click', (event) => {
  const checkBox = event.target.closest('.checkbox-input');
  if (checkBox) {
    const checkBoxes = containerTask.querySelectorAll('.checkbox-input');
    const id = Array.from(checkBoxes).indexOf(checkBox);
    strikeThrough(id);
    renderToDo();
  }
});

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  clearAll();
  renderToDo();
});

// edit task
// edit task
containerTask.addEventListener('click', (event) => {
  const textInput = event.target.closest('.text-input');
  if (textInput) {
    const textInputs = containerTask.querySelectorAll('.text-input');
    const index = Array.from(textInputs).indexOf(textInput);
    edit(index);

    // add a blur listener to update the task value when the user leaves the input
    textInput.addEventListener('blur', () => {
      const taskId = parseInt(textInput.getAttribute('data-id'), 10);
      const taskIndex = toDos.findIndex((task) => task.id === taskId);
      toDos[taskIndex].value = textInput.value;
      localStorage.setItem('todos', JSON.stringify(toDos));
    });
  }
});

// arrow function add task

window.addEventListener('load', () => {
  const storedToDos = JSON.parse(localStorage.getItem('todos'));
  if (storedToDos) {
    toDos = storedToDos;
    renderToDo();
  }
});
