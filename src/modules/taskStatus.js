function taskStatus(event) {
  let list = JSON.parse(localStorage.getItem('Tasks'));
  let taskChecked = Number(event.currentTarget.parentNode.parentNode.classList[0].slice(5,));
  // console.log(list[taskChecked].completed);
  if (!list[taskChecked].completed) {
    event.currentTarget.parentNode.parentNode.firstChild.lastChild.style.textDecoration = "line-through";
  }else {
    event.currentTarget.parentNode.parentNode.firstChild.lastChild.style.textDecoration = "none";
  }
  list.forEach(element => {
    if (event.currentTarget.nodeType === 1) {
      if (element.index === taskChecked) {
        element.completed = !element.completed;
        // console.log(element.completed);
      }
    }
  });
  localStorage.setItem('Tasks', JSON.stringify(list));
  document.querySelectorAll('.editing-background').forEach(element => {
    element.classList.remove('editing-background');
  });
  
}

export default taskStatus;