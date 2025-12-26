# **Counter App**

A simple Counter App built with **pure JavaScript, HTML, and CSS**.
Designed to help beginners strengthen fundamentals before moving to larger projects like Todo Lists or Habit Trackers.

---

## 📸 Screenshot

![Project Preview](./screenshot.png)

---

## **Project Goals**

* DOM selection
* Event handling
* Variables & state
* Updating the DOM

---

## **Features**

* Increment & decrement counter
* Reset counter
* Counter state saved in `localStorage`

---

## **Tech Stack**

* HTML
* CSS
* JavaScript

---

## **Folder Structure**

```
project_folder_name/
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── .gitattributes
├── GUIDE.md
├── index.html
├── README.md
└── screenshot.png
```

---

## **How It Works**

Live project: [[here](https://sandiptamangdev.github.io/project_2_js_counter_app/)]

1. Open `index.html` in a browser
2. Click **Increase** or **Decrease** buttons to change the counter
3. **Reset** button sets counter to 0
4. Counter value persists using `localStorage`

---

## **What I Learned**

### HTML

* Preventing accidental zoom on iPhones is tricky; meta viewport `user-scalable=no` can block it, but accessibility concerns discourage full disabling. CSS `touch-action: none` is recommended for pinch gestures.
* Understanding accessibility constraints: modern browsers prioritize user experience and accessibility.

### CSS

* Use `rem` instead of `px` for scalable borders and sizing.
* Prefer `min-height`/`max-height` and `min-width`/`max-width` over fixed `height`/`width` for responsive layouts.
* `transform: scale(1.05)` adds subtle UI feedback, improving UX.

### JavaScript

* `let` for mutable counter; `const` for unchanging values like max/min.
* DOM selection: `document.getElementById()` vs `document.querySelector()` (both work with IDs).
* `parseInt(localStorage.getItem("counter") || 0)` ensures correct counter initialization.
* Understanding `||` as logical OR: returns first truthy value.
* `textContent` vs `innerText` vs `innerHTML`:

  * `textContent`: fastest, ignores CSS, safest for updating text.
  * `innerText`: slower, respects visible text, may trigger reflow.
  * `innerHTML`: parses HTML, allows element injection, risky for untrusted input.
* Event listeners: arrow functions improve readability, `if` checks prevent exceeding max/min.

---

## **Future Improvements**

* Disable double-click zoom only for counter buttons
* Add keyboard support for increment/decrement
* Animate counter changes for smoother UX

---

## **Author**

[Sandip Tamang](https://www.tamangsandip.com.np/)