import addTask from '../src/modules/addTask.js';

const html = `
<ul>
    <li id="title" class="icon"><h1>Today's To Do</h1><img src='assets/images/refresh.png' alt="refresh icon"></li>
    <li class="icon"><input id="add-input" value="Add to your list..."><img src="./assets/images/arrow.png" alt=""></li>
    <li id="button-container"><a href="">Clear all completed</a></li>
  </ul>
`
document.body.innerHTML = html;
describe('Add task test', () => {
  test('AddTask function', () => {
    // Arange
    const event = {
      keyCode: 13
    };
    const array = [];
    localStorage.setItem('Tasks', JSON.stringify(array));
    
    // Act
    addTask(event);
    const resultingTasksList = JSON.parse(localStorage.getItem('Tasks'));
    
    // Assert
    expect(resultingTasksList.length).toBeGreaterThan(0);
  });
});














