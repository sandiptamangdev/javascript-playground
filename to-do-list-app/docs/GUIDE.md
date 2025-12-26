## **JavaScript Learning Guide for Productivity Lab**

### **Core JavaScript Concepts Required**

#### **1. DOM Manipulation** ⭐ Most Important
- **Selecting Elements**
  - `document.getElementById()` - Get task input, buttons
  - `document.querySelector()` - Select single elements
  - `document.querySelectorAll()` - Get all task items
  - `closest()` - Find parent task element from button
  
- **Creating & Modifying Elements**
  - `createElement()` - Create new task elements
  - `appendChild()` - Add task to list
  - `removeChild()` - Delete completed tasks
  - `innerHTML` / `textContent` - Set task content
  - `remove()` - Modern way to delete elements
  
- **Styling & Classes**
  - `classList.add()` - Mark task as completed
  - `classList.remove()` - Unmark task
  - `classList.toggle()` - Toggle completed state
  - `classList.contains()` - Check if completed
  - `style.display` - Show/hide empty states

- **Attributes**
  - `setAttribute('data-id', id)` - Unique task identifiers
  - `getAttribute('data-id')` - Retrieve task ID
  - `data-*` attributes for storing task metadata

#### **2. Event Handling**
- **Click Events**
  - `addEventListener('click', handler)` - Button clicks
  - Event delegation for dynamically added tasks
  - `event.target` - Identify clicked element
  - `event.preventDefault()` - Prevent form submission
  
- **Form Events**
  - `addEventListener('submit')` - Form submission
  - `addEventListener('keypress')` - Enter key to add task
  - Input validation before adding tasks
  
- **Other Events**
  - `addEventListener('change')` - Checkbox state changes
  - `addEventListener('input')` - Real-time input validation
  - `addEventListener('dblclick')` - Double-click to edit
  - `addEventListener('blur')` - Save on focus loss

#### **3. LocalStorage API** ⭐ Critical for Persistence
- **Basic Operations**
  - `localStorage.setItem(key, value)` - Save tasks
  - `localStorage.getItem(key)` - Load tasks
  - `localStorage.removeItem(key)` - Delete specific data
  - `localStorage.clear()` - Clear all data
  
- **Working with Objects/Arrays**
  - `JSON.stringify(tasks)` - Convert to string for storage
  - `JSON.parse(data)` - Convert back to objects
  - Handle null values: `JSON.parse(data || '[]')`
  - Error handling for invalid JSON
  
- **Storage Patterns**
  - Save on every change (add/edit/delete)
  - Load on page initialization
  - Separate keys for active vs completed tasks
  - Version your data structure for migrations

#### **4. Array Methods** ⭐ Essential
- **Manipulation**
  - `push()` - Add new task to array
  - `filter()` - Remove deleted tasks
  - `map()` - Transform task objects
  - `find()` - Find specific task by ID
  - `findIndex()` - Get task position
  - `splice()` - Remove task at index
  - `sort()` - Sort by priority or date
  
- **Iteration**
  - `forEach()` - Loop through tasks to render
  - `some()` - Check if any task matches condition
  - `every()` - Check if all tasks match condition
  - `reduce()` - Calculate completion statistics

#### **5. Date & Time Handling**
- **Creating Dates**
  - `new Date()` - Current date/time
  - `Date.now()` - Timestamp for task IDs
  - `new Date(timestamp)` - Convert timestamp to date
  
- **Formatting Dates**
  - `toLocaleDateString()` - Display friendly date
  - `toLocaleTimeString()` - Display time
  - `getDate()`, `getMonth()`, `getFullYear()`
  - Calculate days until due date
  - Detect overdue tasks
  
- **Time Tracking**
  - `performance.now()` - High-precision timing
  - Calculate elapsed time for Pomodoro
  - Track task duration
  - Measure productivity patterns

#### **6. Object-Oriented JavaScript**
- **Task Object Structure**
  ```javascript
  {
    id: timestamp,
    text: "Task description",
    completed: false,
    priority: "medium",
    createdAt: Date.now(),
    dueDate: null,
    category: "work",
    timeSpent: 0
  }
  ```
  
- **Object Methods**
  - `Object.keys()` - Get all property names
  - `Object.values()` - Get all values
  - `Object.assign()` - Merge objects
  - Spread operator: `{ ...task, completed: true }`
  
- **Constructor Functions / Classes** (Optional)
  ```javascript
  class Task {
    constructor(text) {
      this.id = Date.now();
      this.text = text;
      this.completed = false;
    }
  }
  ```

#### **7. ES6+ Features**
- **Arrow Functions**
  ```javascript
  const addTask = (text) => { /* ... */ }
  tasks.filter(task => !task.completed)
  ```
  
- **Template Literals**
  ```javascript
  `<div class="task">${task.text}</div>`
  `Task created ${task.createdAt.toLocaleDateString()}`
  ```
  
- **Destructuring**
  ```javascript
  const { id, text, completed } = task;
  const [first, ...rest] = tasks;
  ```
  
- **Default Parameters**
  ```javascript
  function createTask(text, priority = 'medium') { }
  ```
  
- **Spread Operator**
  ```javascript
  const updatedTasks = [...tasks, newTask];
  const taskCopy = { ...task };
  ```

#### **8. Conditional Logic & Control Flow**
- **Task State Logic**
  ```javascript
  if (task.completed) { moveToCompleted() }
  else { showInActive() }
  ```
  
- **Ternary Operators**
  ```javascript
  const status = completed ? 'done' : 'pending';
  ```
  
- **Switch Statements**
  ```javascript
  switch(priority) {
    case 'high': color = 'red'; break;
    case 'medium': color = 'yellow'; break;
    case 'low': color = 'green'; break;
  }
  ```
  
- **Logical Operators**
  ```javascript
  const tasks = loadTasks() || [];
  if (text && text.trim()) { addTask() }
  ```

#### **9. Functions & Modularity**
- **Pure Functions** (no side effects)
  ```javascript
  function calculateCompletionRate(tasks) {
    const completed = tasks.filter(t => t.completed).length;
    return (completed / tasks.length) * 100;
  }
  ```
  
- **Higher-Order Functions**
  ```javascript
  function createTaskHandler(action) {
    return (taskId) => {
      const task = findTask(taskId);
      action(task);
    }
  }
  ```
  
- **Module Pattern** (organize code)
  ```javascript
  const TaskManager = {
    tasks: [],
    add(task) { /* ... */ },
    remove(id) { /* ... */ },
    save() { /* ... */ }
  };
  ```

#### **10. Error Handling**
- **Try-Catch Blocks**
  ```javascript
  try {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
  } catch (error) {
    console.error('Failed to load tasks:', error);
    return [];
  }
  ```
  
- **Validation**
  ```javascript
  if (!text || text.trim() === '') {
    alert('Task cannot be empty');
    return;
  }
  ```
  
- **Storage Quota Errors**
  ```javascript
  try {
    localStorage.setItem('tasks', data);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      alert('Storage full! Please delete old tasks.');
    }
  }
  ```

#### **11. Timers & Intervals** (For Pomodoro)
- **setTimeout**
  ```javascript
  setTimeout(() => {
    alert('Break time!');
  }, 25 * 60 * 1000); // 25 minutes
  ```
  
- **setInterval**
  ```javascript
  const timer = setInterval(() => {
    updateTimerDisplay();
  }, 1000); // Every second
  ```
  
- **clearTimeout / clearInterval**
  ```javascript
  clearInterval(timer); // Stop the timer
  ```

#### **12. String Manipulation**
- **Trimming & Cleaning**
  ```javascript
  text.trim() // Remove whitespace
  text.toLowerCase()
  text.replace(/\s+/g, ' ') // Remove extra spaces
  ```
  
- **Truncation**
  ```javascript
  text.slice(0, 50) + '...' // First 50 chars
  ```
  
- **Search & Match**
  ```javascript
  text.includes(searchTerm)
  text.match(/pattern/)
  ```

---

## **Key Functionality Implementations**

### **1. Add Task**
```javascript
function addTask(text) {
  // Validate input
  if (!text || text.trim() === '') return;
  
  // Create task object
  const task = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
    priority: 'medium'
  };
  
  // Add to tasks array
  tasks.push(task);
  
  // Save to localStorage
  saveTasks();
  
  // Render to DOM
  renderTask(task);
  
  // Clear input
  document.getElementById('task-input').value = '';
}
```

### **2. Toggle Task Completion**
```javascript
function toggleTask(taskId) {
  // Find task in array
  const task = tasks.find(t => t.id === taskId);
  
  if (task) {
    // Toggle completed state
    task.completed = !task.completed;
    
    // Update completion time
    if (task.completed) {
      task.completedAt = new Date().toISOString();
    }
    
    // Save changes
    saveTasks();
    
    // Update UI
    renderTasks();
  }
}
```

### **3. Delete Task**
```javascript
function deleteTask(taskId) {
  // Filter out deleted task
  tasks = tasks.filter(task => task.id !== taskId);
  
  // Save to localStorage
  saveTasks();
  
  // Remove from DOM
  const taskElement = document.querySelector(`[data-id="${taskId}"]`);
  if (taskElement) {
    taskElement.remove();
  }
  
  // Update empty state
  updateEmptyState();
}
```

### **4. Save to LocalStorage**
```javascript
function saveTasks() {
  try {
    const data = JSON.stringify(tasks);
    localStorage.setItem('tasks', data);
  } catch (error) {
    console.error('Failed to save tasks:', error);
    alert('Unable to save tasks. Storage might be full.');
  }
}
```

### **5. Load from LocalStorage**
```javascript
function loadTasks() {
  try {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load tasks:', error);
    return [];
  }
}

// Initialize on page load
let tasks = loadTasks();
```

### **6. Render Tasks**
```javascript
function renderTasks() {
  const activeContainer = document.getElementById('active-tasks');
  const completedContainer = document.getElementById('completed-tasks');
  
  // Clear containers
  activeContainer.innerHTML = '';
  completedContainer.innerHTML = '';
  
  // Separate active and completed
  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);
  
  // Render active tasks
  activeTasks.forEach(task => {
    const taskElement = createTaskElement(task);
    activeContainer.appendChild(taskElement);
  });
  
  // Render completed tasks
  completedTasks.forEach(task => {
    const taskElement = createTaskElement(task);
    completedContainer.appendChild(taskElement);
  });
  
  // Update empty states
  updateEmptyState();
}
```

### **7. Create Task Element**
```javascript
function createTaskElement(task) {
  const div = document.createElement('div');
  div.className = 'task-item';
  div.setAttribute('data-id', task.id);
  
  div.innerHTML = `
    <input type="checkbox" 
           ${task.completed ? 'checked' : ''} 
           onchange="toggleTask(${task.id})">
    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
    <button onclick="deleteTask(${task.id})">Delete</button>
  `;
  
  return div;
}
```

### **8. Event Delegation for Dynamic Elements**
```javascript
// Better approach than inline onclick
document.getElementById('task-list').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    const taskId = e.target.closest('.task-item').dataset.id;
    deleteTask(parseInt(taskId));
  }
  
  if (e.target.matches('.task-checkbox')) {
    const taskId = e.target.closest('.task-item').dataset.id;
    toggleTask(parseInt(taskId));
  }
});
```

### **9. Edit Task (Double-Click)**
```javascript
function editTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  const taskElement = document.querySelector(`[data-id="${taskId}"]`);
  const textSpan = taskElement.querySelector('span');
  
  // Create input field
  const input = document.createElement('input');
  input.value = task.text;
  input.className = 'edit-input';
  
  // Replace span with input
  textSpan.replaceWith(input);
  input.focus();
  
  // Save on blur or Enter
  input.addEventListener('blur', () => saveEdit(taskId, input.value));
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveEdit(taskId, input.value);
    }
  });
}

function saveEdit(taskId, newText) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.text = newText.trim();
    saveTasks();
    renderTasks();
  }
}
```

### **10. Filter/Search Tasks**
```javascript
function searchTasks(query) {
  const filtered = tasks.filter(task => 
    task.text.toLowerCase().includes(query.toLowerCase())
  );
  
  renderFilteredTasks(filtered);
}

// Real-time search
document.getElementById('search-input').addEventListener('input', (e) => {
  searchTasks(e.target.value);
});
```

### **11. Calculate Statistics**
```javascript
function getStats() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;
  const completionRate = total > 0 ? (completed / total * 100).toFixed(1) : 0;
  
  return { total, completed, active, completionRate };
}

function displayStats() {
  const stats = getStats();
  document.getElementById('stats').innerHTML = `
    <p>Total: ${stats.total}</p>
    <p>Active: ${stats.active}</p>
    <p>Completed: ${stats.completed}</p>
    <p>Completion Rate: ${stats.completionRate}%</p>
  `;
}
```

### **12. Pomodoro Timer**
```javascript
let timerInterval;
let timeRemaining = 25 * 60; // 25 minutes in seconds

function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    
    // Update display
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').textContent = 
      `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Timer finished
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert('Pomodoro complete! Take a break.');
      playSound();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = 25 * 60;
  updateTimerDisplay();
}
```

---

## **Learning Path Order**

### **Week 1: Todo Basics**
1. DOM manipulation (add/delete tasks)
2. Event handling (clicks, form submission)
3. Array methods (push, filter, forEach)
4. Basic task rendering

### **Week 2: Data Persistence** ⭐
1. localStorage API
2. JSON stringify/parse
3. Load tasks on page load
4. Save on every change

### **Week 3: Enhanced Features**
1. Edit task functionality
2. Task completion toggle
3. Empty state handling
4. Input validation

### **Week 4: Advanced Features**
1. Priority levels
2. Due dates and overdue detection
3. Task categories/tags
4. Search and filter

### **Week 5: Productivity Tools**
1. Pomodoro timer
2. Time tracking
3. Statistics and analytics
4. Streak counter

### **Week 6: Polish & UX**
1. Animations
2. Keyboard shortcuts
3. Drag-and-drop
4. Dark mode

---

## **Practice Exercises**

### **Exercise 1: Array Filtering**
```javascript
const tasks = [
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: true },
  { id: 3, text: 'Task 3', completed: false }
];

// Get only active tasks
const active = tasks.filter(t => !t.completed);
console.log(active); // [task1, task3]
```

### **Exercise 2: localStorage Practice**
```javascript
// Save array of tasks
const tasks = [{ id: 1, text: 'Learn JS' }];
localStorage.setItem('tasks', JSON.stringify(tasks));

// Load and parse
const loaded = JSON.parse(localStorage.getItem('tasks'));
console.log(loaded); // [{ id: 1, text: 'Learn JS' }]
```

### **Exercise 3: Date Manipulation**
```javascript
const now = new Date();
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

console.log('Today:', now.toLocaleDateString());
console.log('Tomorrow:', tomorrow.toLocaleDateString());
```

### **Exercise 4: Event Delegation**
```javascript
document.getElementById('task-list').addEventListener('click', (e) => {
  if (e.target.matches('button.delete')) {
    const taskId = e.target.closest('.task').dataset.id;
    console.log('Delete task:', taskId);
  }
});
```

---

## **Common Mistakes & Solutions**

### **1. Not using event delegation**
**Problem:** onclick attributes in dynamically created HTML
**Solution:** Use event delegation on parent element
```javascript
// ❌ Bad
div.innerHTML = `<button onclick="delete(${id})">Delete</button>`;

// ✅ Good
document.getElementById('tasks').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    const id = e.target.dataset.id;
    deleteTask(id);
  }
});
```

### **2. Forgetting to save after changes**
**Problem:** Tasks disappear on refresh
**Solution:** Call saveTasks() after every mutation
```javascript
function addTask(text) {
  tasks.push(task);
  saveTasks(); // ✅ Don't forget!
  renderTask(task);
}
```

### **3. Not validating input**
**Problem:** Empty tasks get added
**Solution:** Always validate
```javascript
if (!text || text.trim() === '') {
  return; // ✅ Exit early
}
```

### **4. Losing task IDs**
**Problem:** Using array index as ID
**Solution:** Use timestamp or UUID
```javascript
// ❌ Bad (index changes)
const id = tasks.length;

// ✅ Good (unique)
const id = Date.now();
```

---

## **Resources**

### **JavaScript Fundamentals**
* [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [JavaScript.info](https://javascript.info/)
* [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

### **localStorage & Data**
* [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [JSON.stringify/parse Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

### **DOM Manipulation**
* [MDN DOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [JavaScript DOM Manipulation Course](https://www.youtube.com/watch?v=5fb2aPlgoys)

### **Date & Time**
* [MDN Date Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Date-fns Library](https://date-fns.org/) (optional helper)

---

## **Testing Checklist**

### **Core Functionality**
- [ ] Add task with non-empty text
- [ ] Cannot add empty task
- [ ] Mark task as complete
- [ ] Unmark completed task
- [ ] Delete task
- [ ] Tasks persist after page refresh

### **Edge Cases**
- [ ] Very long task text
- [ ] Special characters in task text
- [ ] Adding 100+ tasks
- [ ] localStorage full error
- [ ] Invalid JSON in localStorage
- [ ] Rapid clicking (debounce needed?)

### **Browser Compatibility**
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers