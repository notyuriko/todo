
// this js is vibecoded i'm sorry :(

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const doneCount = document.getElementById('doneCount');

let tasks = [];

function render() {
    taskList.innerHTML = '';
    let done = 0;

    tasks.forEach((task, index) => {
        if (task.done) done++;

        const li = document.createElement('li');
        li.className = 'task-item';

        const check = document.createElement('span');
        check.className = 'checkbox' + (task.done ? ' done' : '');
        check.addEventListener('click', () => toggleTask(index));

        const text = document.createElement('span');
        text.className = 'task-text' + (task.done ? ' done-text' : '');
        text.textContent = task.text;

        const del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = '✕';
        del.addEventListener('click', () => deleteTask(index));

        li.appendChild(check);
        li.appendChild(text);
        li.appendChild(del);
        taskList.appendChild(li);
    });

    totalCount.textContent = 'total: ' + tasks.length;
    doneCount.textContent = 'done: ' + done;
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text, done: false });
    taskInput.value = '';
    render();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    render();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

render();