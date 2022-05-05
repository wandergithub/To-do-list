import modifyTask from './modifyTask.js';

const removeTask = (event) => {
  const elementLi = event.currentTarget.parentNode;
  const list = JSON.parse(localStorage.getItem('Tasks'));
  const newlist = list.filter((task) => task.index !== Number(elementLi.classList[0].slice(5)));
  let newindex = 0;
  elementLi.remove();
  newlist.forEach((element) => {
    element.index = newindex;
    newindex += 1;
  });
  localStorage.setItem('Tasks', JSON.stringify(newlist));
};

function finishEditing(event) {
  const selectedElementClass = `.${event.currentTarget.parentNode.parentNode.classList[0]}`;
  const elementLi = document.querySelector(selectedElementClass);
  const elementInput = event.currentTarget;
  elementLi.classList.remove('editing-background');
  elementInput.classList.remove('editing-background');
  elementInput.addEventListener('input', modifyTask(elementInput.value, selectedElementClass));
  const icon = document.querySelector(`${selectedElementClass} > img`);
  icon.setAttribute('src', './assets/images/dot.png');
}

function editingTask(event) {
  document.querySelectorAll('.editing-background').forEach((element) => {
    element.classList.remove('editing-background');
  });
  const elementLi = event.currentTarget;
  const elementInput = event.currentTarget.firstElementChild.lastElementChild;
  elementInput.addEventListener('blur', finishEditing);
  elementLi.classList.add('editing-background');
  elementInput.classList.add('editing-background');
  const icon = document.querySelector('.editing-background > img');
  icon.setAttribute('src', './assets/images/trash-can.png');
  icon.addEventListener('click', removeTask);
}

export { finishEditing, editingTask, removeTask };