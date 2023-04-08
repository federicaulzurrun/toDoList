import { renderToDo } from './functionality.js';

class TODOLIST {
  strikeThrough(id) {
    this.toDos = JSON.parse(localStorage.getItem('todos')) || [];
    const checkBoxes = document.querySelectorAll('.checkbox-input');
    if (checkBoxes[id].checked) {
      this.toDos[id].completed = true;
      localStorage.setItem('todos', JSON.stringify(this.toDos));
      renderToDo();
    } else {
      this.toDos[id].completed = false;
      localStorage.setItem('todos', JSON.stringify(this.toDos));
    }
  }
}

const clearAll = () => {
  const toDos = JSON.parse(localStorage.getItem('todos')) || [];
  for (let i = 0; i < toDos.length; i += 1) {
    if (toDos[i].completed) {
      toDos.splice(i, 1);
      i -= 1;
    }
  }
  for (let i = 1; i <= toDos.length; i += 1) {
    toDos[i - 1].id = i;
  }
  localStorage.setItem('todos', JSON.stringify(toDos));
};

export { TODOLIST, clearAll };