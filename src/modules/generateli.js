import { editingTask } from './editingTask.js';
import taskStatus from './taskStatus.js';

function generate(item, container) {
  const div = document.createElement('div');
  const element = item;
  const li = document.createElement('li');
  container.appendChild(li);
  const input = document.createElement('input');
  li.appendChild(div);
  input.setAttribute('type', 'checkbox');
  const label = document.createElement('label');
  div.appendChild(label);
  div.appendChild(input);
  input.addEventListener('change', taskStatus);
  // text editable input-- task text
  const taskDescription = document.createElement('input');
  taskDescription.value = element.description;
  div.appendChild(taskDescription);
  taskDescription.classList.add('taskDescription');
  // div.innerHTML += element.description;
  const dotIcon = document.createElement('img');
  dotIcon.setAttribute('src', './assets/images/dot.png');
  dotIcon.classList.add('dotIcon');
  li.appendChild(dotIcon);
  li.classList.add(`index${element.index}`);
  li.addEventListener('click', editingTask);
}

const generateItems = (tasksList, ul) => {
  for (let j = 0; j < tasksList.length; j += 1) {
    if (tasksList[j].index >= document.getElementsByClassName('taskDescription').length) {
      generate(tasksList[j], ul);
    }
  }
};

export { generateItems, generate };
