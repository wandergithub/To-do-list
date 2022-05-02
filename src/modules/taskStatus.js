function taskStatus(event) {
  const list = JSON.parse(localStorage.getItem('Tasks'));
  const taskChecked = Number(event.currentTarget.parentNode.parentNode.classList[0].slice(5));
  if (!list[taskChecked].completed) {
    event.currentTarget.parentNode.parentNode.firstChild.lastChild.style.textDecoration = 'line-through';
  } else {
    event.currentTarget.parentNode.parentNode.firstChild.lastChild.style.textDecoration = 'none';
  }
  list.forEach((element) => {
    if (event.currentTarget.nodeType === 1) {
      if (element.index === taskChecked) {
        element.completed = !element.completed;
      }
    }
  });
  localStorage.setItem('Tasks', JSON.stringify(list));
  document.querySelectorAll('.editing-background').forEach((element) => {
    element.classList.remove('editing-background');
  });
}

export default taskStatus;