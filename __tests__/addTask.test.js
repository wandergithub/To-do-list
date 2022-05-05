import addTask from '../src/modules/addTask.js';
import { removeTask } from '../src/modules/editingTask.js';

const html = `
<ul>
    <li id="title" class="icon"><h1>Today's To Do</h1><img src='assets/images/refresh.png' alt="refresh icon"></li>
    <li class="icon"><input id="add-input" value="Add to your list..."><img src="./assets/images/arrow.png" alt=""></li>
    <li id="button-container"><a href="">Clear all completed</a></li>
  </ul>
`
document.body.innerHTML = html

describe('Add task test', () => {
  test('AddTask at local storage', () => {

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

  test('it adds another li html element after adding a new task', () => {

    const { length } = document.body.querySelectorAll('ul > li');

    const event = {
      keyCode: 13
    };

    addTask(event);
    const { length: newLength } = document.body.querySelectorAll('ul > li');

    expect(newLength).toBe(length + 1);

  })
});

describe('Remove task test', () => {
  test('Remove Task at local storage', () => {
    const event = {
      currentTarget: {
        parentNode: {
          classList: ['index0'],
          remove() {
          }
        },
      }
    };
    const Task = {
      description: "Task 1",
      completed: false,
      index: 0
    }
    localStorage.setItem('Tasks', JSON.stringify([Task]));

    removeTask(event);
    const result = JSON.parse(localStorage.getItem('Tasks'));

    expect(result.length).toBe(0);
  });
});
