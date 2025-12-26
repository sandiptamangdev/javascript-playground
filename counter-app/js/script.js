let counter = parseInt(localStorage.getItem("counter")) || 0;
const max = 10;
const min = -10;
const value = document.getElementById('value');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const body = document.querySelector('body');

/*
Here let is used to counter because counter value needs to be changed where as, the use of const or var is not done because const doesn't let the counter to change and var is old school best not used in modern js to reduce unexpected errors.

we have count max and min in cost because it doesn't need to be change;

value, increase, decrease, reset are used the selector document.getElementById() as they are id but i recently found out that we can make use of document.querySelector() to call on id which was interesting to know. 

body is called with querySelector.

parseInt(): function used to prase a string argument and return an integer.

parse: resolve;

string argument: 

parseInt(localStorage.getItem("counter")) is helping the localStorage to get the data and then put that data in the comparison with 0 but why or get one '|' (seems it's called bitwise OR) or gate is so what is '||' (seems it's called logical OR so basically it checks expressions first and if it can be made true it uses that or uses the second expression.)

*/

function updateCounter() {
    value.textContent = counter;
    body.style.backgroundColor =
        counter > 0 ? "#c5c5c5ff" :
        counter < 0 ? "#000103" :
        "#515052";

    increase.disabled = counter >= max;
    decrease.disabled = counter <= min;

    localStorage.setItem("counter", counter);
}

/* 

We are using function declaration (function name()) here and then using the 

value.textContent = counter;

1) textContent

What it does:
Returns/sets the raw text inside an element.

Key traits:

- Fastest
- Ignores CSS (hidden text still appears)
- Treats everything as plain text
- Safest for UI updates
- Use when: updating text, not HTML.

2) innerText

What it does:
Returns/sets the visible text only (what the user can see).

Key traits:

-  Slow (forces layout calculations)
-  Respects CSS (display: none, visibility, etc.)
-  Text changes may trigger reflow
-  Use when: you specifically need visible text only.

3) innerHTML

What it does:
Returns/sets HTML markup inside an element.

Key traits:

- Parses HTML
- Can create elements
- Risky if used with untrusted input (injection)
- Use when: you want to inject HTML structure.

*/

increase.addEventListener('click', () => {
    if (counter < max) counter++;
    value.textContent = counter;
    updateCounter();
});

decrease.addEventListener('click', () => {
    if (counter > min) counter--;
    value.textContent = counter;
    updateCounter();
});

reset.addEventListener('click', () => {
    counter = 0;
    value.textContent = counter;
    updateCounter();
});

updateCounter();

/* 

Event listener is used here specific called Event click, also use of arrow function here the increase decreases uses the if to see if the counter is not more than max or min and if it is so then it will not do more ++ or --.

the textContent is used here instead of innerText or innerHTMl due to it being faster here and also it's safest for the UI update. The main reason we need to use textContent is because we need to update the text not the html.

*/