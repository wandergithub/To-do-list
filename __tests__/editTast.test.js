import modifyTask from "../src/modules/modifyTask"
import addTask from "../src/modules/addTask"

const html = `
<ul>
    <li id="title" class="icon"><h1>Today's To Do</h1><img src='assets/images/refresh.png' alt="refresh icon"></li>
    <li class="icon"><input id="add-input" value="Add to your list..."><img src="./assets/images/arrow.png" alt=""></li>
    <li id="button-container"><a href="">Clear all completed</a></li>
  </ul>
`
document.body.innerHTML = html


describe('the modify task function', () => {
  test('it updates the task\'s description and updates the localStorage', () => {
    const event = {
      keyCode: 13
    };
    const array = [];
    localStorage.setItem('Tasks', JSON.stringify(array));
    addTask(event);

    const editableTask = document.body.querySelectorAll('li')[3].classList[0];
    const newDescription = 'New Description';

    modifyTask(newDescription, editableTask);

    const list = JSON.parse(localStorage.getItem('Tasks'))

    expect(list[0].description).toBe(newDescription);
  })
})