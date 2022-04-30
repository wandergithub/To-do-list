/* eslint-disable */
import './style.css';
import './assets/images/refresh.png';
import './assets/images/arrow.png';
import './assets/images/dot.png';
import './assets/images/trash-can.png';
import userActionHandler from './modules/userActions.js';
import { initStorage } from './modules/localStorage.js';

userActionHandler();
window.addEventListener('load', initStorage);
