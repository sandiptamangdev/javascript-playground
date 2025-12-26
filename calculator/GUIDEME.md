### **1. Concept List**

* Read user input from terminal.
* Parse input (numbers, operators).
* Perform calculations (+, -, *, /, %, etc.).
* Handle invalid inputs (letters, divide by zero).
* Loop or exit based on user choice.

---

### **2. JS Tools Needed**

* `readline` → get user input.
* `console.log` → display results.
* `Number()` or `parseFloat()` → convert strings to numbers.
* `switch` or `if-else` → operation selection.
* `process.exit()` → quit program.

Optional:

* `chalk` (npm) → color output.
* `inquirer` (npm) → fancier prompts.

---

### **3. UI Layout (Terminal)**

```
Enter first number: _
Enter operator (+,-,*,/): _
Enter second number: _
Result: <calculated value>
Do you want to continue? (y/n): _
```

---

### **4. State Design**

* `firstNum` → number
* `operator` → string
* `secondNum` → number
* `result` → number
* `running` → boolean (loop control)

---

### **5. Core Logic Flow**

1. Prompt first number → validate.
2. Prompt operator → validate (+,-,*,/,%).
3. Prompt second number → validate.
4. Calculate → display result.
5. Ask continue? → loop or exit.

---

### **6. Failure Modes + Fixes**

* **Non-numeric input** → re-prompt, `Number()` check.
* **Divide by zero** → error message, skip calculation.
* **Invalid operator** → re-prompt.
* **Unexpected input in yes/no** → default to exit or re-prompt.

---

### **7. Micro-task Plan**

1. **Input system** → setup `readline` to read first number.
2. **Operator parsing** → validate +, -, *, /, %.
3. **Calculation function** → return result based on operator.
4. **Loop & exit** → ask user to continue or quit.
5. **Error handling** → invalid numbers/operators, divide by zero.

---