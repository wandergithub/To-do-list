import modifyTask from './modifyTask.js';

function editingTask(event) {
  const selectedElementClass = `.${event.path[2].classList[0]}`;
  const elementLi = document.querySelector(selectedElementClass);
  const elementInput = document.querySelector(`.${event.path[2].classList[0]} > div > input + input`);
  elementLi.classList.add('editing-background');
  elementInput.classList.add('editing-background');
  const icon = document.querySelector('.editing-background > img');
  icon.setAttribute('src', './assets/images/trash-can.png');
  icon.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('Tasks'));
    const newlist = [];
    list.forEach((element) => {
      // console.log(event.path[2].classList[0].slice(5,));
      if (element.index !== Number(event.path[2].classList[0].slice(5))) {
        newlist.push(element);
      }
    });
    let newindex = 0;
    elementLi.remove();
    newlist.forEach((element) => {
      element.index = newindex;
      newindex += 1;
    });
    localStorage.setItem('Tasks', JSON.stringify(newlist));
  });
}
function finishEditing(event) {
  if (event.keyCode === 13) {
    const selectedElementClass = `.${event.path[2].classList[0]}`;
    const elementLi = document.querySelector(selectedElementClass);
    const elementInput = document.querySelector(`.${event.path[2].classList[0]} > div > input + input`);
    elementLi.classList.remove('editing-background');
    elementInput.classList.remove('editing-background');
    elementInput.addEventListener('input', modifyTask(elementInput.value, selectedElementClass));
    const icon = document.querySelector(`.${event.path[2].classList[0]} > img`);
    icon.setAttribute('src', './assets/images/dot.png');
  }
}

export { finishEditing, editingTask };