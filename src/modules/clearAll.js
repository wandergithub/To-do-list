function removeCompletedTasks() {
  const list = JSON.parse(localStorage.getItem('Tasks'));
  const result = list.filter((element) => element.completed !== true);
  localStorage.setItem('Tasks', JSON.stringify(result));
}

function butonHandler() {
  const button = document.getElementById('button-container');
  button.addEventListener('click', () => {
    removeCompletedTasks();
  });
}

export { removeCompletedTasks };
export default butonHandler;