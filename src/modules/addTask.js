import { input } from "./htmlElements.js";
import tasksList from "./tasksList.js";
import {updateAppStorage, updateLocalStorage, initStorage} from './localStorage.js'
import generateItems from "./generateItems.js";
import { ul } from "./htmlElements.js";
const addTask = (e) => {
  if (e.keyCode === 13) {
    let list = JSON.parse(localStorage.getItem('Tasks'));
    let item = {
      description: input.value ,
      completed: false,
      index: list.length
    }
    input.value = "";
    list.push(item);
    generateItems(list, ul);
    updateLocalStorage(list);
  }
};
export default addTask;