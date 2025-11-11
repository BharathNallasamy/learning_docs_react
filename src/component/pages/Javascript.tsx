import { useState } from "react";

const Javascript = () => {
  const [activeTab, setActiveTab] = useState("fundamentals");

  const topics = [
    { id: "fundamentals", label: "JS Fundamentals", icon: "📚" },
    { id: "es6", label: "ES6+ Features", icon: "✨" },
    { id: "dom", label: "DOM Manipulation", icon: "🎯" },
    { id: "async", label: "Async JavaScript", icon: "⏱️" },
    { id: "promises", label: "Promises & Async/Await", icon: "🔄" },
    { id: "oop", label: "OOP in JavaScript", icon: "🏗️" },
    { id: "modules", label: "Modules", icon: "📦" },
    { id: "testing", label: "Testing", icon: "🧪" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "fundamentals":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              JavaScript Fundamentals
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              JavaScript is a high-level, interpreted programming language that
              enables interactive web pages. It's an essential part of web
              development alongside HTML and CSS.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Variables and Data Types
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Variable declarations
let name = "John";        // String
const age = 25;          // Number
var isStudent = true;    // Boolean
let hobbies = ["reading", "coding"];  // Array
let person = { name: "Alice", age: 30 };  // Object

// Data types
let str = "Hello World";
let num = 42;
let bool = true;
let nothing = null;
let notDefined = undefined;
let sym = Symbol("unique");`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Functions
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Example usage
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(add(5, 3));        // 8
console.log(multiply(4, 2));   // 8`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Control Flow
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// If-else statement
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Switch statement
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

hobbies.forEach(hobby => {
  console.log(hobby);
});`}
              </pre>
            </div>
          </div>
        );

      case "es6":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              ES6+ Features
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ECMAScript 6 (ES6) and later versions introduced many powerful
              features that make JavaScript more expressive and easier to work
              with.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Destructuring
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

// Object destructuring
const person = { name: "Alice", age: 30, city: "NYC" };
const { name, age } = person;

// Function parameter destructuring
function printUser({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}

printUser(person);  // "Alice is 30 years old"`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Spread and Rest Operators
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Spread operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));  // 10`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Template Literals and Arrow Functions
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Template literals
const name = "Alice";
const age = 30;
const message = \`My name is \${name} and I am \${age} years old\`;

// Multi-line strings
const multiLine = \`
  This is a
  multi-line
  string
\`;

// Arrow functions
const square = x => x * x;
const greet = name => \`Hello, \${name}!\`;

// Array methods with arrow functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);`}
              </pre>
            </div>
          </div>
        );

      case "dom":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              DOM Manipulation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Document Object Model (DOM) is a programming interface for web
              documents. It represents the page structure as a tree of objects
              that can be manipulated with JavaScript.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Selecting Elements
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Select by ID
const element = document.getElementById("myId");

// Select by class name
const elements = document.getElementsByClassName("myClass");

// Select by tag name
const paragraphs = document.getElementsByTagName("p");

// Query selector (CSS selector)
const firstDiv = document.querySelector("div");
const allDivs = document.querySelectorAll("div");

// Modern approach
const button = document.querySelector(".btn-primary");
const allButtons = document.querySelectorAll("button");`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Modifying Elements
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Change text content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Change attributes
element.setAttribute("data-id", "123");
element.id = "newId";
element.className = "new-class";

// Change styles
element.style.color = "blue";
element.style.fontSize = "20px";

// Add/remove classes
element.classList.add("active");
element.classList.remove("inactive");
element.classList.toggle("visible");`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Event Handling
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Add event listener
button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Arrow function event handler
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Event:", e.target);
});

// Multiple event types
input.addEventListener("input", (e) => {
  console.log("Value:", e.target.value);
});

input.addEventListener("focus", () => {
  console.log("Input focused");
});

// Remove event listener
const handler = () => console.log("Click");
button.addEventListener("click", handler);
button.removeEventListener("click", handler);`}
              </pre>
            </div>
          </div>
        );

      case "async":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Async JavaScript
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              JavaScript is single-threaded, but asynchronous programming allows
              code to run without blocking the main thread, enabling responsive
              applications.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Callbacks
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Callback function
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Data received:", result);
});

// Callback hell (avoid this!)
getData((a) => {
  getMoreData(a, (b) => {
    getEvenMoreData(b, (c) => {
      console.log("Done!");
    });
  });
});`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SetTimeout and SetInterval
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// setTimeout - execute once after delay
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

// setInterval - execute repeatedly
const intervalId = setInterval(() => {
  console.log("Executed every 3 seconds");
}, 3000);

// Clear interval
clearInterval(intervalId);

// Clear timeout
const timeoutId = setTimeout(() => {
  console.log("This won't execute");
}, 5000);
clearTimeout(timeoutId);`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Event Loop
              </h3>
              <p className="text-gray-700 mb-3">
                JavaScript uses an event loop to handle asynchronous operations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Call Stack: Executes synchronous code</li>
                <li>Callback Queue: Holds callback functions</li>
                <li>Event Loop: Moves callbacks from queue to stack when stack is empty</li>
                <li>Web APIs: Handle async operations (setTimeout, fetch, etc.)</li>
              </ul>
            </div>
          </div>
        );

      case "promises":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Promises & Async/Await
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Promises provide a cleaner way to handle asynchronous operations,
              and async/await makes asynchronous code look synchronous.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Creating and Using Promises
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Creating a promise
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
};

// Using promises
fetchUserData()
  .then(data => {
    console.log("User data:", data);
    return data.id;
  })
  .then(id => {
    console.log("User ID:", id);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed");
  });`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Async/Await
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Async function
async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log("User:", user);

    const posts = await fetchUserPosts(user.id);
    console.log("Posts:", posts);

    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call async function
getUserData().then(result => {
  console.log("Result:", result);
});

// Async arrow function
const getData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Promise Methods
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Promise.all - wait for all promises
const promises = [
  fetch("/api/users"),
  fetch("/api/posts"),
  fetch("/api/comments")
];

Promise.all(promises)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(data => console.log("All data:", data));

// Promise.race - first to complete
Promise.race(promises)
  .then(first => console.log("First response:", first));

// Promise.allSettled - wait for all regardless of outcome
Promise.allSettled(promises)
  .then(results => console.log("Results:", results));`}
              </pre>
            </div>
          </div>
        );

      case "oop":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Object-Oriented Programming in JavaScript
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              JavaScript supports OOP concepts including classes, inheritance,
              encapsulation, and polymorphism.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Classes and Objects
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  // Getter
  get info() {
    return \`\${this.name} is \${this.age} years old\`;
  }

  // Setter
  set age(value) {
    if (value < 0) throw new Error("Age must be positive");
    this._age = value;
  }

  // Static method
  static species() {
    return "Homo sapiens";
  }
}

// Create instance
const person = new Person("Alice", 30);
console.log(person.greet());
console.log(Person.species());`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inheritance
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }

  speak() {
    return \`\${this.name} barks\`;
  }

  fetch() {
    return \`\${this.name} is fetching the ball\`;
  }
}

const dog = new Dog("Max", "Golden Retriever");
console.log(dog.speak());   // "Max barks"
console.log(dog.fetch());   // "Max is fetching the ball"`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Encapsulation (Private Fields)
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Private fields with #
class BankAccount {
  #balance = 0;  // Private field

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }

  #calculateInterest() {
    return this.#balance * 0.05;
  }
}

const account = new BankAccount("Alice");
account.deposit(1000);
console.log(account.getBalance());  // 1000
// console.log(account.#balance);   // Error: Private field`}
              </pre>
            </div>
          </div>
        );

      case "modules":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              JavaScript Modules
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Modules allow you to organize code into separate files and import/export
              functionality between them, making code more maintainable and reusable.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Export and Import
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// math.js - Named exports
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export function multiply(a, b) {
  return a * b;
}

// user.js - Default export
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// app.js - Importing
import User from './user.js';
import { add, subtract } from './math.js';
import * as math from './math.js';

const user = new User("Alice");
console.log(add(5, 3));
console.log(math.multiply(4, 2));`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Import Variations
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Import with alias
import { add as sum } from './math.js';

// Import everything
import * as MathUtils from './math.js';

// Import default and named
import User, { validateUser, formatUser } from './user.js';

// Dynamic import
const loadModule = async () => {
  const module = await import('./math.js');
  console.log(module.add(1, 2));
};

// Re-export
export { add, subtract } from './math.js';
export { default as User } from './user.js';`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Module Best Practices
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use named exports for multiple utilities from a module</li>
                <li>Use default export for the main functionality of a module</li>
                <li>Keep modules focused on a single responsibility</li>
                <li>Avoid circular dependencies between modules</li>
                <li>Use dynamic imports for code splitting and lazy loading</li>
                <li>Group related exports in barrel files (index.js)</li>
              </ul>
            </div>
          </div>
        );

      case "testing":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              JavaScript Testing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Testing ensures your code works as expected and helps prevent bugs.
              Learn about different testing approaches and popular testing frameworks.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Unit Testing with Jest
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// math.test.js
import { add, subtract } from './math';

describe('Math operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Testing Async Code
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// api.js
export async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

// api.test.js
import { fetchUser } from './api';

describe('API calls', () => {
  test('fetches user successfully', async () => {
    const user = await fetchUser(1);
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
  });

  test('handles errors', async () => {
    await expect(fetchUser(-1)).rejects.toThrow();
  });
});

// Mocking
jest.mock('./api');
fetchUser.mockResolvedValue({ id: 1, name: 'Alice' });`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Testing Best Practices
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Write tests before or alongside your code (TDD)</li>
                <li>Keep tests simple, focused, and independent</li>
                <li>Use descriptive test names that explain what is being tested</li>
                <li>Test edge cases and error conditions</li>
                <li>Mock external dependencies (APIs, databases, etc.)</li>
                <li>Aim for high code coverage but focus on critical paths</li>
                <li>Run tests automatically in CI/CD pipelines</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Popular Testing Frameworks:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Jest - Full-featured testing framework</li>
                  <li>Mocha - Flexible testing framework</li>
                  <li>Vitest - Fast unit test framework for Vite</li>
                  <li>Cypress - End-to-end testing</li>
                  <li>Playwright - Browser automation and testing</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">JavaScript Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master JavaScript from fundamentals to advanced concepts. Learn the
              language that powers the modern web.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === topic.id
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{topic.icon}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Javascript;