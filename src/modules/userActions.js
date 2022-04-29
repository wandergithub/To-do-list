import { input } from "./htmlElements.js";
import addTask from './addTask.js';

const userActionHandler = () => {
  input.addEventListener('keypress', addTask);
};

export default userActionHandler;