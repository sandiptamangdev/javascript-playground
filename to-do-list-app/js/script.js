
const taskInput = document.getElementById('input');
const todoList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add');
const completedList = document.getElementById('completed-task');

// function themeSwitcher() {
//     const themeSwitcherBtn = document.getElementById('theme-switcher');
//     let theme = localStorage.getItem("theme");
//     const getSystemTheme = () => window.matchMedia("(prefers-color-mode: dark)").match ? "Dark" : "Light"; 
//     if (!theme) theme = getSystemTheme();

//     themeSwitcherBtn.innerText = theme;

//     document.documentElement.classList.add(theme);

//     themeSwitcherBtn.addEventListener('click', ()=> {
//         theme = theme === "Light" ? "Dark" : "Light";
//         themeSwitcherBtn.innerText= theme;

//         document.documentElement.classList.toggle("Light", theme === "Light");
//         document.documentElement.classList.toggle("Dark", theme === "Dark");

//         localStorage.setItem("theme", theme);
//     });
// }

function deleteTask(todoItem, buttonWrapper) {
    const deleteTaskBtn = document.createElement("button");
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash';

    deleteTaskBtn.appendChild(deleteIcon);
    deleteTaskBtn.classList.add("delete-task-btn");
    deleteTaskBtn.addEventListener('click', ()=> {
        todoItem.remove();
    });
    buttonWrapper.appendChild(deleteTaskBtn);
}

function completedTask(todoItem, buttonWrapper, deleteTaskBtn) {
    const completedTaskBtn = document.createElement("button");
    const completedIcon = document.createElement('i');
    completedIcon.className = 'fa-solid fa-check';
    completedTaskBtn.appendChild(completedIcon);
    completedTaskBtn.addEventListener('click', () =>{
        completedList.appendChild(todoItem);
        completedTaskBtn.remove();
    });
    
    buttonWrapper.appendChild(completedTaskBtn);
}

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const todoItem = document.createElement("li");
    todoItem.textContent = taskText;

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");

    deleteTask(todoItem, buttonWrapper);
    completedTask(todoItem, buttonWrapper);

    todoItem.appendChild(buttonWrapper);
    todoList.appendChild(todoItem);
    input.value = "";
}


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        addTask()
    }
});

// themeSwitcher();


const todayPageBtn = document.getElementById('today_page');
const taskPageBtn = document.getElementById('task_page');
const completedPageBtn = document.getElementById('completed_page');
const chooseBtn = document.getElementById('choose');

const leftPage = document.getElementById('left')
const centerPage = document.getElementById('center')
const rightPage = document.getElementById('right')


todayPageBtn.addEventListener('click', () => {
    leftPage.classList.remove('remove')
    centerPage.classList.remove('active')
    rightPage.classList.remove('active')
});

taskPageBtn.addEventListener('click', () => {
    leftPage.classList.add('remove')
    centerPage.classList.add('active')
    rightPage.classList.remove('active')
});

chooseBtn.addEventListener('click', () => {
    leftPage.classList.add('remove')
    centerPage.classList.add('active')
    rightPage.classList.remove('active')
});

completedPageBtn.addEventListener('click', () => {
    leftPage.classList.add('remove')
    centerPage.classList.remove('active')
    rightPage.classList.add('active')
});
