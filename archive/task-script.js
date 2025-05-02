const taskForm = document.getElementById('task-form');
const taskNameInput = document.getElementById('task-name');
const dueDateInput = document.getElementById('due-date');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('task-list');

// Array to hold tasks
let tasks = [];

// Add new task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = taskNameInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    const task = {
        id: Date.now(),
        name: taskName,
        dueDate: dueDate,
        priority: priority
    };

    tasks.push(task);
    renderTasks();
    taskForm.reset();
});

// Render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.name}</span>
            <span>${task.dueDate}</span>
            <span>${task.priority}</span>
            <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
