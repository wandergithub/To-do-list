import { input} from "./htmlElements.js";
import addTask from './addTask.js';
import editingTask from "./editingTask.js";


const userActionHandler = () => {
  input.addEventListener('keypress', addTask);
};

export  { userActionHandler};