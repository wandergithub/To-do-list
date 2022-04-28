const generateItems = (tasksList, ul) => {
  for (let i = 0; i < tasksList.length; i += 1) {
    for (let j = 0; j < tasksList.length; j += 1) {
      if (tasksList[j].index === i) {
        const div = document.createElement('div');
        const element = tasksList[j];
        const li = document.createElement('li');
        ul.appendChild(li);
        const input = document.createElement('input');
        li.appendChild(div);
        input.setAttribute('type', 'checkbox');
        const label = document.createElement('label');
        div.appendChild(label);
        div.appendChild(input);
        div.innerHTML += element.description;
        const dotIcon = document.createElement('img');
        dotIcon.setAttribute('src', './assets/images/dot.png');
        dotIcon.classList.add('dotIcon');
        li.appendChild(dotIcon);
      }
    }
  }
};

export default generateItems;