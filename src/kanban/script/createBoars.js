/* eslint-disable max-len */
let boardColumns = [
  { title: 'backlog', tasks: [] },
  { title: 'ready', tasks: [] },
  { title: 'in progress', tasks: [] },
  { title: 'finished', tasks: [] },
];

const updateStorageFromLocal = () => {
  localStorage.setItem('boardColumns', JSON.stringify(boardColumns));
};

const updateLocalFromStorage = () => {
  const boardColumnsFromStorage = JSON.parse(localStorage.getItem('boardColumns'));

  if (boardColumnsFromStorage === null) {
    updateStorageFromLocal();
    return;
  }

  boardColumns = boardColumnsFromStorage;
};

function randomNumberForIdTasks(min, max) {
  return (Math.random() * (max - min) + min).toFixed(6);
}
const repaintBoardFromLocal = () => {
  const mainDiv = document.querySelector('.blockFlexRow');
  mainDiv.innerHTML = '';

  for (let currentColumnIndex = 0; currentColumnIndex < boardColumns.length; currentColumnIndex += 1) {
    const currentColumn = boardColumns[currentColumnIndex];
    const previousColumn = boardColumns[currentColumnIndex - 1];

    const columnDiv = document.createElement('div');
    columnDiv.setAttribute('class', 'columnTask');
    const buttonMenuFromHeaderColumn = '•••';
    const columnHeaderHtml = `
    <div class="titleBoard">
        <p>${currentColumn.title}</p>
        <div class="menuBoard">${buttonMenuFromHeaderColumn}</div>
    </div>
    `;

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('class', 'buttonAddTask');
    addTaskButton.id = `${currentColumnIndex}`;
    addTaskButton.innerHTML = 'Add card';

    if (currentColumnIndex !== 0 && (previousColumn.tasks.length === 0)) addTaskButton.setAttribute('disabled', 'disabled');

    const columnTasksWrapperDiv = document.createElement('div');
    columnTasksWrapperDiv.classList.add('bodyBoard');
    columnTasksWrapperDiv.id = `col${currentColumnIndex}`;

    for (let currentTaskIndex = 0; currentTaskIndex < currentColumn.tasks.length; currentTaskIndex += 1) {
      const currentTask = currentColumn.tasks[currentTaskIndex];

      const taskDivWrapperInput = document.createElement('div');
      taskDivWrapperInput.setAttribute('class', 'blockTask');

      const taskInput = document.createElement('input');
      taskInput.type = 'text';
      taskInput.id = currentTask.id;
      taskInput.value = currentTask.text;

      taskDivWrapperInput.appendChild(taskInput);
      columnTasksWrapperDiv.insertAdjacentElement('beforeend', taskDivWrapperInput);

      taskDivWrapperInput.addEventListener('change', (e) => {
        const taskFromBackLog = currentColumn.tasks[currentColumnIndex];

        if (taskFromBackLog !== null) {
          taskFromBackLog.text = e.target.value;
          updateStorageFromLocal();
          repaintBoardFromLocal();
        }
      });
    }

    let addButtonBehavior;

    if (currentColumnIndex === 0) {
      addButtonBehavior = () => {
        const taskDivWrapperInput = document.createElement('div');
        taskDivWrapperInput.setAttribute('class', 'blockTask');

        const taskInput = document.createElement('input');
        taskInput.type = 'text';

        taskDivWrapperInput.appendChild(taskInput);
        columnTasksWrapperDiv.insertAdjacentElement('beforeend', taskDivWrapperInput);

        taskDivWrapperInput.addEventListener('change', (e) => {
          const elemTask = {
            id: `${randomNumberForIdTasks(0, 1)}`,
            text: e.target.value,
          };
          currentColumn.tasks.push(elemTask);
          updateStorageFromLocal();
          repaintBoardFromLocal();
        });
      };
    } else {
      addButtonBehavior = () => {
        const selectDivWrapper = document.createElement('div');
        selectDivWrapper.setAttribute('class', 'select-wrapper');
        const arrow1 = document.createElement('div');
        arrow1.setAttribute('class', 'select-arrow-3');

        const arrow2 = document.createElement('div');
        arrow2.setAttribute('class', 'select-arrow-3');

        const select = document.createElement('select');

        for (let i = 0; i < previousColumn.tasks.length; i += 1) {
          let elemOpt = document.createElement('option');
          elemOpt = document.createElement('option');
          elemOpt.innerHTML = previousColumn.tasks[i].text;
          elemOpt.value = previousColumn.tasks[i].id;
          select.appendChild(elemOpt);
        }

        selectDivWrapper.insertAdjacentElement('beforeend', arrow1);
        selectDivWrapper.insertAdjacentElement('beforeend', arrow2);
        selectDivWrapper.insertAdjacentElement('beforeend', select);
        columnTasksWrapperDiv.insertAdjacentElement('afterend', selectDivWrapper);

        const updateSelect = (typeEvent) => {
          select.addEventListener(typeEvent, (e) => {
            const movingTask = previousColumn.tasks.find((currentTask) => currentTask.id === e.target.value);
            currentColumn.tasks.push(movingTask);
            previousColumn.tasks.splice(previousColumn.tasks.indexOf(movingTask), 1);

            updateStorageFromLocal();
            repaintBoardFromLocal();
          });
        };
        if (select.length > 1) {
          const typeEvent = 'change';
          updateSelect(typeEvent);
        } else {
          const typeEvent = 'click';
          updateSelect(typeEvent);
        }
      };
    }
    addTaskButton.addEventListener('click', addButtonBehavior, { once: true });

    columnDiv.insertAdjacentHTML('beforeend', columnHeaderHtml);
    columnDiv.insertAdjacentElement('beforeend', columnTasksWrapperDiv);
    columnDiv.insertAdjacentElement('beforeend', addTaskButton);
    mainDiv.appendChild(columnDiv);
  }
};

window.onload = () => {
  updateLocalFromStorage();
  repaintBoardFromLocal();
};
