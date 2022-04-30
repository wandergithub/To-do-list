import tasksList from "./tasksList.js";
import {updateAppStorage, updateLocalStorage, initStorage} from './localStorage.js';
import { toNumber } from "lodash";
export default function modifyTask(newdescription, index, completed=false) {
  index = index[index.length-1];
  // console.log("index "+ index);
  // console.log("descr "+ newdescription);
  // console.log(completed);
  tasksList.forEach(element => {
    if (String(element.index) === index) {
      element.description = newdescription;
      element.index = toNumber(index);
    }
  });
  console.log(tasksList);
  localStorage.setItem('Tasks', JSON.stringify(tasksList));
}
