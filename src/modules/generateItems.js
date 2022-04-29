import generate from './generateli.js';

const generateItems = (tasksList, ul) => {
    for (let j = 0; j < tasksList.length; j += 1) {
      if (tasksList[j].index >= document.getElementsByClassName('flag').length) {
        generate(tasksList[j], ul);
      }
    }
  };

export default generateItems;