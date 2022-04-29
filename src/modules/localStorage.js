import generateItems from "./generateItems.js";
import tasksList from "./tasksList.js";
import { ul } from './htmlElements.js';

function updateLocalStorage() {
  localStorage.setItem('Tasks', JSON.stringify(tasksList));
}

function updateAppStorage() {
  let items = JSON.parse(localStorage.getItem('Tasks'));
  items.forEach(element => {
    tasksList.push(element);
  });
}

function initStorage() {
  if (localStorage.length === 0) {
    localStorage.setItem('Tasks', JSON.stringify(tasksList));
    return;
  }//Print/load local storage.
  updateAppStorage();
  generateItems(JSON.parse(localStorage.getItem('Tasks')), ul);
  
}

export {updateAppStorage, updateLocalStorage, initStorage};
