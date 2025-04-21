const allCols = document.querySelector('.all-cols');
const panelTaskBg = document.querySelector('.panel-add-task-bg');

function addCol() {
  const colTasks = document.createElement('div');
  const headerColTasks = document.createElement('div');
  const h1 = document.createElement('h1');
  const interactionsColTasks = document.createElement('div')
  const btnAddTask = document.createElement('button');
  const btnRemoveCol = document.createElement('button');
  const imgAddTask = document.createElement('img');
  const imgRemoveCol = document.createElement('img');
  const tasksList = document.createElement('ul');
  
  colTasks.classList.add('col-tasks');
  headerColTasks.classList.add('header-col-tasks');
  interactionsColTasks.classList.add('interactions-col-tasks');
  btnAddTask.classList.add('btn-add-task');
  btnRemoveCol.classList.add('btn-remove-col');
  tasksList.classList.add('tasks-list');
  imgAddTask.src = './imgs/add.svg';
  imgRemoveCol.src = './imgs/trash.svg';

  h1.textContent = 'Nova Lista';
  btnAddTask.onclick = addTask;
  btnRemoveCol.onclick = removeCol;

  allCols.appendChild(colTasks);
  colTasks.appendChild(headerColTasks);
  headerColTasks.appendChild(h1);
  headerColTasks.appendChild(interactionsColTasks);
  interactionsColTasks.appendChild(btnAddTask);
  interactionsColTasks.appendChild(btnRemoveCol);
  btnAddTask.appendChild(imgAddTask);
  btnRemoveCol.appendChild(imgRemoveCol);
  colTasks.appendChild(tasksList);
}

// Ocultar painel de novas tarefas
document.onclick = function(event) {
  if (event.target === panelTaskBg) {
    panelTaskBg.style.display = 'none';
  }
}

function removeCol(event) {
  event.currentTarget.parentNode.parentNode.parentNode.remove();
}

const titleNewTask = document.getElementById('new-task-title');
const descNewTask = document.getElementById('new-task-desc');
const btnSaveTask = document.querySelector('.btn-save-task');
const btnEditTask = document.querySelector('.btn-edit-task');
let colCurrent;

function clearFormTask() {
  titleNewTask.value = '';
  descNewTask.value = '';
}

function addTask(event) {
  colCurrent = event.currentTarget.closest('.col-tasks');
  clearFormTask();
  panelTaskBg.style.display = 'flex';
  btnSaveTask.style.display = 'block';
  btnEditTask.style.display = 'none';
}

// Salvar nova tarefa
document.querySelector('.btn-save-task').addEventListener('click', () => {
  const li = document.createElement('li');
  const infoTask = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const interactionsTask = document.createElement('div');
  const btnCheck = document.createElement('button');
  const btnEdit = document.createElement('button');
  const imgCheck = document.createElement('img');
  const imgEdit = document.createElement('img');

  li.classList.add('task');
  infoTask.classList.add('info-task');
  h2.classList.add('task-title');
  p.classList.add('task-desc');
  btnCheck.classList.add('check-task');
  btnEdit.classList.add('edit-task');
  interactionsTask.classList.add('interactions-task');

  imgCheck.src = './imgs/check.svg';
  imgEdit.src = './imgs/edit.svg';
  h2.textContent = titleNewTask.value;
  p.textContent = descNewTask.value;
  btnCheck.onclick = checkTask;
  btnEdit.onclick = editTask;

  colCurrent.appendChild(li);
  li.appendChild(infoTask);
  li.appendChild(interactionsTask);
  infoTask.appendChild(h2);
  infoTask.appendChild(p);
  interactionsTask.appendChild(btnCheck);
  interactionsTask.appendChild(btnEdit);
  btnCheck.appendChild(imgCheck);
  btnEdit.appendChild(imgEdit);

  panelTaskBg.style.display = 'none';
})

// Excluir tarefa marcada como concluída
function checkTask(event) {
  event.currentTarget.closest('.task').remove();
}

let titleTask;
let descTask;

function editTask(event) {
  titleTask = event.currentTarget.parentNode.parentNode.children[0].children[0];
  descTask = event.currentTarget.parentNode.parentNode.children[0].children[1];

  titleNewTask.value = titleTask.textContent;
  descNewTask.value = descTask.textContent;
  panelTaskBg.style.display = 'flex';
  btnSaveTask.style.display = 'none';
  btnEditTask.style.display = 'block';
}

// Salvar tarefa com as informações editadas
document.querySelector('.btn-edit-task').addEventListener('click', () => {
  selecTitleTask.textContent = titleNewTask.value;
  selecDescTask.textContent = descNewTask.value;

  panelTaskBg.style.display = 'none';
})