const generateItems = (tasksList, ul) => {
  for (let i = 0; i < tasksList.length; i++) {
    for (let j = 0; j < tasksList.length; j++) {
      if (tasksList[j].index === i) {
        let element = tasksList[j];
        let li = document.createElement('li');
        li.innerHTML = element.description;
        ul.appendChild(li);
      } 
    }
  }
};

export default generateItems;