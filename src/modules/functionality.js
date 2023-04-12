const containerTask = document.getElementById('toDo-list');

// rendering the toDo list
export const renderToDo = () => {
  const toDos = JSON.parse(localStorage.getItem('todos')) || [];
  containerTask.innerHTML = '';
  toDos.sort((a, b) => a.index - b.index);
  containerTask.innerHTML = '';
  for (let i = 0; i < toDos.length; i += 1) {
    const checked = toDos[i].completed ? 'checked' : '';
    const strike = toDos[i].completed ? 'strike-through' : '';
    const html = `
      <div class="task">
        <input type="checkbox" class="checkbox-input" ${checked}>
        <input type="text" class="text-input ${strike}" value="${toDos[i].value}" data-id="${toDos[i].id}">
        <i class="delete-task-icon fa-solid fa-trash"></i>
      </div>
    `;
    containerTask.innerHTML += html;
  }
};

export const edit = (index) => {
  const tasksArray = JSON.parse(localStorage.getItem('todos')) || [];
  const textInputs = document.querySelectorAll('.text-input');
  const task = tasksArray[index];

  textInputs[index].addEventListener('change', () => {
    task.value = textInputs[index].value;
    localStorage.setItem('todos', JSON.stringify(tasksArray));
  });

  textInputs[index].addEventListener('blur', () => {
    task.value = textInputs[index].value;
    localStorage.setItem('todos', JSON.stringify(tasksArray));
  });
};
