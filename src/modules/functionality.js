// select elements
const newToDo = document.getElementById('imput-task');
const containerTask = document.getElementById('toDo-list');

// vars
let toDos = JSON.parse(localStorage.getItem('toDos')) || [];

// add tasks
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
  toDos = [...toDos, task];
  localStorage.setItem('toDos', JSON.stringify(toDos));
};

// rendering the toDo list
const renderToDo = () => {
  const toDos = JSON.parse(localStorage.getItem('toDos')) || [];
  containerTask.innerHTML = '';
  toDos.sort((a, b) => a.index - b.index);
  containerTask.innerHTML = '';
  for (let i = 0; i < toDos.length; i += 1) {
    const html = `
      <div class="task">
        <input type="checkbox" class="checkbox-input">
        <input type="text" class="text-input" value="${toDos[i].value}" data-id="${toDos[i].id}">
        <div class="edit-task-icon">&#x270E;</div>
        <div class="delete-task-icon">&#x1F5D1;</div>
      </div>
    `;
    containerTask.innerHTML += html;
  }
};

/* Export functions */
export {
  addTask, renderToDo,
};
