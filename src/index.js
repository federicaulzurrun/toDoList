import './style.css';

const activities = [
  {
    description: 'Firts',
    completed: false,
    id: 1,
  },
  {
    description: 'Second',
    completed: false,
    id: 2,
  },
  {
    description: 'Thrid',
    completed: false,
    id: 3,
  },
];

const containerTask = document.getElementById('task-list');

const showTaskList = () => {
  activities.forEach((task) => {
    const card = document.createElement('div');
    card.classList = 'task-description';
    card.innerHTML = `
    <div class="task-text">
    <input type="checkbox">
    <p class="task-text">${task.description}</p>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>`;
    containerTask.appendChild(card);
  });
};

showTaskList();