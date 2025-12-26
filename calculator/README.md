# Simple Node.js Calculator

## Overview
A simple command-line calculator built with Node.js using the `readline` module for interactive input. Supports basic operations: addition, subtraction, multiplication, and division.

## Features
- Interactive user input for two numbers and an operator.
- Handles asynchronous input via `readline`.
- Supports operators: `+`, `-`, `*`, `/`.
- Non-blocking, modular Node.js design.

## Lessons Learned
- `readline` is used to get **user input** in Node.js.
- It’s verbose because it handles **streams** and **asynchronous input** robustly.
- Node.js is **modular, non-blocking**, and designed for **concurrency and scalability**.
- `readline` requires an **interactive terminal (TTY)** like PowerShell or Cmd.
- **MINGW64 (Git Bash)** can cause issues for Node scripts; switched to **Command Prompt** for stability.
- VS Code default terminal can be changed via **Terminal → Select Default Profile** to avoid MINGW64 issues.
- Always save files and run them from the **correct directory** to avoid `MODULE_NOT_FOUND` errors.
- Providing **full code + outputs** makes it easier for others to help.

## How It Works
1. Ask the user for the **first number**.
2. Ask for an **operator**.
3. Ask for the **second number**.
4. Parse inputs with `parseFloat()` and compute the result using a switch statement.
5. Display the **calculated result**.

## Setup & Usage
1. Ensure Node.js is installed.
2. Open **PowerShell** or **Cmd** (avoid Git Bash for readline scripts).  
3. Run the script:  
   ```bash
   node calculator.js