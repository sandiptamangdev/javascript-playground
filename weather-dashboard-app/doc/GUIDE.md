## **JavaScript Learning Guide for Weather Dashboard**

### **Core JavaScript Concepts Required**

#### **1. DOM Manipulation**
- `document.querySelector()` / `querySelectorAll()`
- `getElementById()`, `getElementsByClassName()`
- `createElement()`, `appendChild()`, `removeChild()`
- `innerHTML`, `textContent`, `innerText`
- `classList.add()`, `classList.remove()`, `classList.toggle()`
- `setAttribute()`, `getAttribute()`

#### **2. Event Handling**
- `addEventListener()` (click, submit, input, change)
- `event.preventDefault()`
- `event.target`
- Form submission handling
- Keyboard events (Enter key for search)

#### **3. Asynchronous JavaScript** ⭐ Most Important
- **Promises**
  - `.then()`, `.catch()`, `.finally()`
  - Promise chaining
- **Async/Await**
  - `async function`
  - `await` keyword
  - `try...catch` blocks for error handling
- **Fetch API**
  - `fetch(url)`
  - `.json()` method
  - HTTP methods (GET)
  - Query parameters in URLs

#### **4. Working with APIs**
- Understanding REST APIs
- API endpoints and routes
- Query strings: `?q=city&appid=key`
- Reading API documentation
- Handling API responses (JSON)
- API rate limits
- Environment variables (hiding API keys)

#### **5. JSON Data Handling**
- `JSON.parse()` - convert JSON string to object
- `JSON.stringify()` - convert object to JSON string
- Accessing nested objects: `data.main.temp`
- Array methods on JSON data

#### **6. ES6+ Features**
- **Arrow Functions**: `() => {}`
- **Template Literals**: `` `${variable}` ``
- **Destructuring**: `const { temp, humidity } = data.main`
- **Spread Operator**: `[...array]`
- **Default Parameters**: `function(city = 'London')`
- **Const/Let**: Block scoping

#### **7. Array Methods**
- `map()` - transform forecast data
- `filter()` - filter search history
- `forEach()` - loop through favorites
- `slice()` - limit search history to 5
- `find()` - find specific city in favorites
- `includes()` - check if city exists

#### **8. LocalStorage API**
- `localStorage.setItem('key', value)`
- `localStorage.getItem('key')`
- `localStorage.removeItem('key')`
- `localStorage.clear()`
- Storing arrays/objects (must use JSON.stringify/parse)

#### **9. Geolocation API**
- `navigator.geolocation.getCurrentPosition()`
- Success callback function
- Error callback function
- Latitude and longitude coordinates

#### **10. Error Handling**
- `try...catch` blocks
- `throw new Error()`
- Custom error messages
- Network error handling
- API error responses (404, 401, etc.)

#### **11. Conditional Logic**
- `if...else` statements
- Ternary operators: `condition ? true : false`
- `switch` statements (for weather conditions)
- Logical operators: `&&`, `||`, `!`

#### **12. String Manipulation**
- `toUpperCase()`, `toLowerCase()`
- `trim()` - remove whitespace
- Template literals for dynamic content
- `split()`, `join()`

#### **13. Date & Time**
- `new Date()`
- `Date` methods: `getHours()`, `getMinutes()`
- Unix timestamp conversion
- Formatting dates for display
- `toLocaleString()`, `toLocaleDateString()`

#### **14. Functions**
- Regular functions
- Arrow functions
- Callback functions
- Higher-order functions
- Function parameters and return values

---

## **JavaScript Tools & APIs Needed**

### **Browser APIs**
1. **Fetch API** - HTTP requests
2. **LocalStorage API** - Data persistence
3. **Geolocation API** - User location
4. **DOM API** - Page manipulation

### **External APIs**
1. **OpenWeatherMap API**
   - Current Weather Data
   - 5-Day Forecast
   - Geocoding API (city search)
   - Weather Icons

### **Optional Libraries** (Vanilla JS is fine, but these help)
- **None required!** - This project can be 100% vanilla JavaScript

---

## **Learning Path Order**

### **Week 1: Foundations**
1. DOM Manipulation
2. Event Handling
3. ES6 Basics (arrow functions, template literals)

### **Week 2: Async JavaScript** ⭐
1. Promises
2. Async/Await
3. Fetch API
4. Error Handling

### **Week 3: Data & Storage**
1. JSON manipulation
2. Array methods
3. LocalStorage
4. Working with APIs

### **Week 4: Advanced Features**
1. Geolocation
2. Date/Time handling
3. Dynamic UI updates
4. Responsive design with JS

---

## **Practice Exercises Before Starting**

### **Exercise 1: Fetch Practice**
```javascript
// Fetch a random user from API
async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data.results[0].name);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### **Exercise 2: LocalStorage Practice**
```javascript
// Save and retrieve array
const cities = ['London', 'Paris', 'Tokyo'];
localStorage.setItem('cities', JSON.stringify(cities));
const saved = JSON.parse(localStorage.getItem('cities'));
console.log(saved);
```

### **Exercise 3: Array Methods Practice**
```javascript
const temps = [20, 22, 18, 25, 19];
const celsius = temps.map(t => `${t}°C`);
const warm = temps.filter(t => t > 20);
console.log(celsius, warm);
```

---

## **Resources to Learn**

1. **MDN Web Docs** - JavaScript reference
2. **JavaScript.info** - Modern JavaScript tutorial
3. **freeCodeCamp** - JavaScript algorithms
4. **OpenWeatherMap Docs** - API documentation