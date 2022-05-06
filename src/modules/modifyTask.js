import { toNumber } from 'lodash';

export default function modifyTask(newdescription, index) {
  index = index[index.length - 1];
  const list = JSON.parse(localStorage.getItem('Tasks'));
  list.forEach((element) => {
    if (String(element.index) === index) {
      element.description = newdescription;
      element.index = toNumber(index);
    }
  });
  localStorage.setItem('Tasks', JSON.stringify(list));
}
