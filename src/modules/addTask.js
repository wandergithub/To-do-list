import { updateLocalStorage } from './localStorage.js';
import { generateItems } from './generateli.js';

const add = (item) => {
  const list = JSON.parse(localStorage.getItem('Tasks'));
  list.push(item);
  updateLocalStorage(list);
  return list;
};

const addTask = (e) => {
  const ul = document.querySelector('body ul');
  const input = document.getElementById('add-input');
  let list = JSON.parse(localStorage.getItem('Tasks'));

  if (e.keyCode === 13) {
    const item = {
      description: input.value,
      completed: false,
      index: list.length,
    };
    list = add(item);
    input.value = '';
    generateItems(list, ul);
  }
};
export default addTask;
