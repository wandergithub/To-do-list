import './style.css';
import tasksList from './modules/tasksList';
import { ul } from './modules/htmlElements';
import generateItems from './modules/generateItmes';

generateItems(tasksList, ul);