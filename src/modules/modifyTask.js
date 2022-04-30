import tasksList from "./tasksList.js";
import {updateAppStorage, updateLocalStorage, initStorage} from './localStorage.js';
import { toNumber } from "lodash";
export default function modifyTask(newdescription, index, completed=false) {
  index = index[index.length-1];
  // console.log("index "+ index);
  // console.log("descr "+ newdescription);
  // console.log(completed);
  let list = JSON.parse(localStorage.getItem('Tasks'));
  list.forEach(element => {
    if (String(element.index) === index) {
      element.description = newdescription;
      element.index = toNumber(index);
    }
  });
  localStorage.setItem('Tasks', JSON.stringify(list));
}
