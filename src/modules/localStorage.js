import { generateItems } from './generateli.js';
import tasksList from './tasksList.js';
import { ul } from './htmlElements.js';

function updateLocalStorage(tL = tasksList) {
  localStorage.setItem('Tasks', JSON.stringify(tL));
}

function updateAppStorage() {
  const items = JSON.parse(localStorage.getItem('Tasks'));
  items.forEach((element) => {
    tasksList.push(element);
  });
}

function initStorage() {
  if (localStorage.getItem('Tasks') === null) {
    localStorage.setItem('Tasks', JSON.stringify(tasksList));
    return;
  }// Print/load local storage.
  updateAppStorage();
  generateItems(JSON.parse(localStorage.getItem('Tasks')), ul);
}

export { updateAppStorage, updateLocalStorage, initStorage };
