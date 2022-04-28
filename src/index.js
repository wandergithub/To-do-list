import './style.css';
import './assets/images/refresh.png';
import './assets/images/arrow.png';
import './assets/images/dot.png';
import tasksList from './modules/tasksList.js';
import ul from './modules/htmlElements.js';
import generateItems from './modules/generateItmes.js';

generateItems(tasksList, ul);