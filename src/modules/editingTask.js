import modifyTask from './modifyTask.js';

function finishEditing(event) {
  const selectedElementClass = `.${event.currentTarget.parentNode.parentNode.classList[0]}`;
  // `.${event.path[2].classList[0]}`
  // console.log(selectedElementClass);
  // console.log(event.currentTarget.parentNode.parentNode.classList[0]);
  const elementLi = document.querySelector(selectedElementClass);
  const elementInput = event.currentTarget;
  elementLi.classList.remove('editing-background');
  elementInput.classList.remove('editing-background');
  elementInput.addEventListener('input', modifyTask(elementInput.value, selectedElementClass));
  const icon = document.querySelector(`${selectedElementClass} > img`);
  icon.setAttribute('src', './assets/images/dot.png');
}

function editingTask(event) {
  // console.log(event.currentTarget.classList[0]);
  const elementLi = event.currentTarget;
  const elementInput = event.currentTarget.firstElementChild.lastElementChild;
  elementInput.addEventListener('blur', finishEditing);
  elementLi.classList.add('editing-background');
  elementInput.classList.add('editing-background');
  const icon = document.querySelector('.editing-background > img');
  icon.setAttribute('src', './assets/images/trash-can.png');
  const p = event.currentTarget;
  icon.addEventListener('click', () => {
    const list = JSON.parse(localStorage.getItem('Tasks'));
    const newlist = [];
    list.forEach((element) => {
      // console.log(event.path[2].classList[0].slice(5,));
      if (element.index !== Number(p.classList[0].slice(5))) {
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

export { finishEditing, editingTask };