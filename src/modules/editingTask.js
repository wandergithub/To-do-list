import { updateAppStorage, updateLocalStorage } from "./localStorage.js";
import modifyTask from "./modifyTask.js"; 
import tasksList from "./tasksList.js";
function editingTask(event) {
  let selectedElementClass = `.${event.path[2].classList[0]}`;
  let elementLi = document.querySelector(selectedElementClass);
  let elementInput = document.querySelector(`.${event.path[2].classList[0]} > div > input + input`);
  elementLi.classList.add('editing-background');
  elementInput.classList.add('editing-background');
  let icon = document.querySelector('.editing-background > img');
  icon.setAttribute('src', './assets/images/trash-can.png');
  icon.addEventListener('click', () => {
    let list = JSON.parse(localStorage.getItem('Tasks'));
    let newlist = [];
    list.forEach(element => {
      // console.log(event.path[2].classList[0].slice(5,));
      if (element.index !== Number(event.path[2].classList[0].slice(5,))) {
        newlist.push(element);
      }
    });
    let newindex = 0;
    elementLi.remove();
    newlist.forEach(element => {
      element.index = newindex;
      newindex++;
    });
    localStorage.setItem('Tasks', JSON.stringify(newlist));
    
  });
}
function finishEditing(event) {
  let selectedElementClass = `.${event.path[2].classList[0]}`;
  let elementLi = document.querySelector(selectedElementClass);
  let elementInput = document.querySelector(`.${event.path[2].classList[0]} > div > input + input`);
  elementLi.classList.remove('editing-background');
  elementInput.classList.remove('editing-background');
  elementInput.addEventListener('input', modifyTask(elementInput.value, selectedElementClass));
  let icon = document.querySelector(`.${event.path[2].classList[0]} > img`);
  icon.setAttribute('src', './assets/images/dot.png');
}

export  { finishEditing, editingTask };