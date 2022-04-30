import { input, ul } from './htmlElements.js';
import { updateLocalStorage } from './localStorage.js';
import { generateItems } from './generateli.js';

const addTask = (e) => {
  if (e.keyCode === 13) {
    const list = JSON.parse(localStorage.getItem('Tasks'));
    const item = {
      description: input.value,
      completed: false,
      index: list.length,
    };
    input.value = '';
    list.push(item);
    generateItems(list, ul);
    updateLocalStorage(list);
  }
};
export default addTask;