const JavaScriptData = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a dynamic programming language primarily used for creating interactive effects within web browsers. It is one of the core technologies of web development, alongside HTML and CSS.",
  },
  {
    id: 2,
    question: "What are the differences between JavaScript and Java?",
    answer:
      "JavaScript is a scripting language used mainly for web development to add interactivity, whereas Java is a full-fledged programming language often used for backend applications. Despite the similar name, they are very different in terms of syntax, functionality, and usage.",
  },
  {
    id: 3,
    question: "What are variables in JavaScript?",
    answer:
      "Variables in JavaScript are containers used to store data values. They are declared using keywords like `var`, `let`, or `const`.",
  },
  {
    id: 4,
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    answer:
      "'undefined' means a variable has been declared but has not been assigned a value, while 'null' represents the intentional absence of a value or object.",
  },
  {
    id: 5,
    question: "What are the different data types in JavaScript?",
    answer:
      "JavaScript has six primitive data types: undefined, null, boolean, number, string, and symbol. Additionally, objects are a non-primitive data type.",
  },
  {
    id: 6,
    question: "What are the scope and closures in JavaScript?",
    answer:
      "Scope defines the accessibility of variables in different parts of the program, while closures allow a function to remember and access variables from its lexical scope even after the function has executed.",
  },
  {
    id: 7,
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase before the code is executed.",
  },
  {
    id: 8,
    question: "What is the 'this' keyword in JavaScript?",
    answer:
      "'this' refers to the context in which a function is executed. It points to the object that the function is a method of. Its value depends on how a function is called.",
  },
  {
    id: 9,
    question: "What is an event in JavaScript?",
    answer:
      "An event is an action or occurrence that can be detected by JavaScript. Examples include user actions like clicks, keystrokes, and page loading.",
  },
  {
    id: 10,
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "'==' checks for equality of values, but it performs type coercion. '===' checks for both value and type equality, without type coercion.",
  },
  {
    id: 11,
    question: "What is a callback function in JavaScript?",
    answer:
      "A callback function is a function passed into another function as an argument that is executed later, typically after some asynchronous operation completes.",
  },
  {
    id: 12,
    question: "What is a promise in JavaScript?",
    answer:
      "A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.",
  },
  {
    id: 13,
    question: "What is event delegation in JavaScript?",
    answer:
      "Event delegation is a technique where a single event listener is attached to a parent element rather than individual child elements, which allows for better performance and simpler code.",
  },
  {
    id: 14,
    question: "What are arrow functions in JavaScript?",
    answer:
      "Arrow functions are a more concise syntax for writing functions in JavaScript. They also do not have their own 'this' context, but inherit it from the surrounding scope.",
  },
  {
    id: 15,
    question: "What are JavaScript modules?",
    answer:
      "JavaScript modules are individual units of code that can be exported from one file and imported into another, helping to organize and modularize JavaScript code.",
  },
  {
    id: 16,
    question: "What is the spread operator in JavaScript?",
    answer:
      "The spread operator '...' is used to unpack elements from arrays or objects, making it easier to work with and merge them.",
  },
  {
    id: 17,
    question: "What is the rest parameter in JavaScript?",
    answer:
      "The rest parameter '...' allows a function to accept an indefinite number of arguments as an array, enabling flexible function signatures.",
  },
  {
    id: 18,
    question: "What is destructuring in JavaScript?",
    answer:
      "Destructuring is a feature that allows unpacking values from arrays or objects and assigning them to variables in a more concise manner.",
  },
  {
    id: 19,
    question: "What is a setTimeout() function in JavaScript?",
    answer:
      "The setTimeout() function is used to execute a function after a specified delay, in milliseconds.",
  },
  {
    id: 20,
    question: "What is a setInterval() function in JavaScript?",
    answer:
      "The setInterval() function repeatedly executes a function at specified intervals, in milliseconds.",
  },
  {
    id: 21,
    question: "What is JSON in JavaScript?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It's commonly used to transfer data between a server and a client.",
  },
  {
    id: 22,
    question: "What is localStorage in JavaScript?",
    answer:
      "localStorage is a web API that allows storing data in the browser persistently, which can be accessed across sessions. It stores data as key-value pairs.",
  },
  {
    id: 23,
    question: "What is sessionStorage in JavaScript?",
    answer:
      "sessionStorage is similar to localStorage but stores data only for the duration of the page session. The data is lost when the browser tab or window is closed.",
  },
  {
    id: 24,
    question: "What is the difference between var, let, and const?",
    answer:
      "'var' is function-scoped and can be redeclared. 'let' is block-scoped and can be reassigned. 'const' is block-scoped and cannot be reassigned once declared.",
  },
  {
    id: 25,
    question: "What is a JavaScript class?",
    answer:
      "A class is a blueprint for creating objects with shared properties and methods. It allows for object-oriented programming in JavaScript.",
  },
  {
    id: 26,
    question: "What is the 'new' keyword in JavaScript?",
    answer:
      "The 'new' keyword is used to create an instance of a user-defined object type or a built-in object type like Array or Date.",
  },
  {
    id: 27,
    question: "What is a JavaScript object?",
    answer:
      "A JavaScript object is a collection of key-value pairs that allow for the storage and manipulation of data. Objects can store properties and methods.",
  },
  {
    id: 28,
    question: "What is an IIFE (Immediately Invoked Function Expression)?",
    answer:
      "An IIFE is a function expression that is defined and immediately executed in place. It is often used to create a private scope.",
  },
  {
    id: 29,
    question:
      "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code executes sequentially, blocking the next operation until the current one is completed. Asynchronous code allows operations to run independently, enabling non-blocking behavior.",
  },
  {
    id: 30,
    question: "What are higher-order functions in JavaScript?",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return functions as their result. Examples include map(), filter(), and reduce().",
  },
];

export default JavaScriptData;
