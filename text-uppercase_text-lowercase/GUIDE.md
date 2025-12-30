# Text to Uppercase/Lowercase Converter - Build Guide

## What You'll Build
A simple tool that takes text input and converts it to UPPERCASE or lowercase.

---

## Step 1: Create the HTML Structure

Create a file called `index.html` with:
- A text input box (or textarea) for user to type text
- Two buttons: "UPPERCASE" and "lowercase"
- A div to display the output/result
- Optional: A clear button to reset everything

**Hint:** Use `<textarea>` for multi-line text input

---

## Step 2: Style with CSS

Make it look nice:
- Style the container (width, padding, centered)
- Style the textarea (border, padding, focus effects)
- Style the buttons (colors, hover effects, padding)
- Style the output box (background color, readable font)
- Optional: Add a gradient background or nice colors

**Hint:** Use flexbox for button layout, transitions for smooth hover effects

---

## Step 3: Add JavaScript Functionality

Create a `script.js` file and add these functions:

### Function 1: Convert to Uppercase
- Get the text from the input box
- Convert it using `.toUpperCase()`
- Display the result in the output box

### Function 2: Convert to Lowercase
- Get the text from the input box
- Convert it using `.toLowerCase()`
- Display the result in the output box

### Function 3: Clear (optional)
- Clear the input box
- Clear the output box
- Set them back to empty

### Add Event Listeners
- Click event on UPPERCASE button → calls uppercase function
- Click event on lowercase button → calls lowercase function
- Click event on Clear button → calls clear function

---

## Code Structure Example

```
HTML: <textarea id="inputText"></textarea>
      <button onclick="convertUpper()">UPPERCASE</button>
      <button onclick="convertLower()">lowercase</button>
      <div id="output"></div>

JavaScript:
  function convertUpper() {
    // 1. get input value
    // 2. convert to uppercase
    // 3. display in output
  }
  
  function convertLower() {
    // 1. get input value
    // 2. convert to lowercase
    // 3. display in output
  }
```

---

## Key JavaScript Methods You'll Need

- `document.getElementById()` - get element by id
- `.value` - get the text from input
- `.toUpperCase()` - convert to uppercase
- `.toLowerCase()` - convert to lowercase
- `.textContent` or `.innerHTML` - display result

---

## Tips

- Test after each step
- Make sure buttons actually do something
- Try typing text and clicking buttons
- Make it look nice with colors and spacing
- Add hover effects to buttons for interactivity

---

## Challenge (Optional)

Once done, try adding:
- Capitalize first letter only
- Toggle case (reverse upper/lower)
- Copy to clipboard button
- Character counter