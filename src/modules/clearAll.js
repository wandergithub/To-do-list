const button = document.getElementById('button-container');
function removeCompletedTasks() {
  const list = JSON.parse(localStorage.getItem('Tasks'));
  const result = list.filter((element) => element.completed !== true);
  localStorage.setItem('Tasks', JSON.stringify(result));
}

function butonHandler(button) {
  button.addEventListener('click', () => {
    removeCompletedTasks();
  });
}

export {removeCompletedTasks};
export default butonHandler;