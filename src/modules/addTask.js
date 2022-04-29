import { input } from "./htmlElements.js";
import tasksList from "./tasksList.js";
import {updateAppStorage, updateLocalStorage, initStorage} from './localStorage.js'
import generateItems from "./generateItems.js";
import { ul } from "./htmlElements.js";
const addTask = (e) => {
  if (e.keyCode === 13) {
    let item = {
      description: input.value ,
      completed: false,
      index: tasksList.length
    }
    tasksList.push(item);
    console.log(tasksList);
    generateItems(tasksList, ul);
    updateLocalStorage();
  }
};
export default addTask;