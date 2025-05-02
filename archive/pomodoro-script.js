let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;

const taskName = document.getElementById('task-name');
const taskPriority = document.getElementById('task-priority');
const taskDueDate = document.getElementById('task-due-date');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

// Example Task (replace with dynamic task details from Task Manager)
taskName.textContent = "Task 1: Study Pomodoro";
taskPriority.textContent = "Priority: High";
taskDueDate.textContent = "Due Date: 2025-05-02";

// Start Button
startButton.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    }
});

// Pause Button
pauseButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
});

// Reset Button
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
});

// Timer functionality
function startTimer() {
    isRunning = true;
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;

    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert('Pomodoro session complete!');
                resetButton.disabled = true;
                startButton.disabled = false;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        updateTimerDisplay();
    }, 1000);
}

// Update Timer Display
function updateTimerDisplay() {
    timerDisplay.innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Format Time to 2 digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
