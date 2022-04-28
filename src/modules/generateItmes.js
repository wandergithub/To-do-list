const generateItems = (tasksList, ul) => {
  for (let i = 0; i < tasksList.length; i++) {
    for (let j = 0; j < tasksList.length; j++) {
      if (tasksList[j].index === i) {
        let div = document.createElement('div');
        let element = tasksList[j];
        let li = document.createElement('li');
        ul.appendChild(li);
        let input = document.createElement('input');
        li.appendChild(div);
        input.setAttribute('type', 'checkbox');
        let label = document.createElement('label');
        div.appendChild(label);
        div.appendChild(input);
        div.innerHTML += element.description;
        let dotIcon = document.createElement('img');
        dotIcon.setAttribute('src','./assets/images/dot.png');
        dotIcon.classList.add('dotIcon');
        li.appendChild(dotIcon);
      } 
    }
  }
};

export default generateItems;