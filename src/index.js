import './style.css';
import './assets/images/refresh.png';
import './assets/images/arrow.png';
import './assets/images/dot.png';
import tasksList from './modules/tasksList';
import { ul } from './modules/htmlElements';
import generateItems from './modules/generateItmes';

generateItems(tasksList, ul);