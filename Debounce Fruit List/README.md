# Getting Started with Day 2 App

## Project Overview

This project builds upon the foundation laid on Day 1 by incorporating a debounce feature. The purpose of this enhancement is to improve the performance and user experience of our application by limiting the rate at which a function is executed.

### What is Debounce?

Debounce is a programming practice used to ensure that time-consuming tasks do not fire so often, thus improving performance and preventing unintended behavior. It is particularly useful in scenarios where a function is called frequently, such as when handling user input events like keystrokes or window resizing.

## Features Added

- **Debounce Functionality:** Integrated debounce to optimize input handling and other repetitive event triggers.

## Setting up the Project

To get started with this project, follow these steps:

1. **Create the App:**
   ```
   npx create-react-app day2
   ```

2. **Install Dependencies:**
   Navigate to the project directory and install necessary dependencies.
   ```
   cd day2
   npm install
   ```

3. **Start the Application:**
   Use the following command to run the app in the development mode:
   ```
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make edits. You may also see lint errors in the console.

## Debounce Interview Questions

Here are some common interview questions related to the debounce functionality:

1. **What is debounce and how does it work?**
   - Debounce is a technique used to limit the rate at which a function executes. It works by postponing the execution of a function until after a specified time has elapsed since the last time the function was invoked.

2. **Can you explain the difference between debounce and throttle?**
   - While both debounce and throttle are used to limit the rate of function execution, debounce postpones the function call until a specified delay has passed without any new calls. Throttle, on the other hand, ensures that a function is called at most once in a specified period.

3. **In which scenarios would you use debounce over throttle?**
   - Debounce is ideal for scenarios where the function should only execute after a series of events have stopped firing, such as search input or window resizing. Throttle is better suited for scenarios where you want to ensure that the function executes at regular intervals, such as scrolling or mouse movements.

4. **How would you implement a debounce function in JavaScript?**
   ```javascript
   function debounce(func, delay) {
       let timeout;
       return function(...args) {
           clearTimeout(timeout);
           timeout = setTimeout(() => {
               func.apply(this, args);
           }, delay);
       };
   }
   ```

5. **What are some potential drawbacks of using debounce?**
   - Using debounce can delay the execution of important tasks, which might lead to a lag in the user interface. It's essential to choose an appropriate delay time to balance performance and responsiveness.

## Conclusion

The addition of debounce functionality enhances the performance and user experience of the application. Reduce the time and money spent on API calls. Understanding and implementing debounce is crucial for optimizing event-driven tasks and handling frequent user interactions efficiently.
