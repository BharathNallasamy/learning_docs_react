import { useState } from "react";

interface Section {
  heading: string;
  text?: string;
  code?: string;
  points?: string[];
}

interface ContentSection {
  title: string;
  description: string;
  sections: Section[];
}

const Javascript = () => {
  const [activeTab, setActiveTab] = useState("basics");

  const topics = [
    { id: "basics", label: "Basics & Fundamentals", icon: "✅" },
    { id: "variables", label: "Variables & Data Types", icon: "🔤" },
    { id: "operators", label: "Operators", icon: "➕" },
    { id: "control-flow", label: "Control Flow", icon: "🔁" },
    { id: "functions", label: "Functions", icon: "📦" },
    { id: "arrays", label: "Arrays", icon: "🧱" },
    { id: "objects", label: "Objects", icon: "🧱" },
    { id: "dom", label: "DOM", icon: "🌐" },
    { id: "events", label: "Events", icon: "🖱️" },
    { id: "timers", label: "Timers", icon: "⏱️" },
    { id: "storage", label: "Storage", icon: "💾" },
    { id: "async", label: "Asynchronous JS", icon: "🔄" },
    { id: "fetch", label: "Fetch API", icon: "🌍" },
    { id: "es6", label: "ES6+ Features", icon: "🧱" },
    { id: "errors", label: "Error Handling", icon: "🎨" },
    { id: "oop", label: "OOP", icon: "⚙️" },
    { id: "apis", label: "Browser APIs", icon: "🧠" },
    { id: "tools", label: "Tools & NPM", icon: "🤖" },
  ];

  const content: Record<string, ContentSection> = {
    basics: {
      title: "Basics & Fundamentals",
      description: "Learn what JavaScript is and how it works in browsers to make web pages interactive.",
      sections: [
        {
          heading: "What is JavaScript & How It Works in Browsers",
          text: "JavaScript is a high-level, interpreted programming language that runs in web browsers. It enables interactive web pages by manipulating HTML and CSS, responding to user actions, and communicating with servers. JavaScript is executed by the browser's JavaScript engine (V8 in Chrome, SpiderMonkey in Firefox).",
        },
        {
          heading: "How to Add JavaScript",
          text: "There are three ways to add JavaScript to your web pages:",
          points: [
            "Inline JavaScript: Using onclick and other event attributes directly in HTML elements",
            "Internal JavaScript: Using <script> tags in the HTML document",
            "External JavaScript: Linking separate .js files using <script src='...'> (recommended)",
          ],
          code: `<!-- Inline JavaScript -->
<button onclick="alert('Hello!')">Click me</button>

<!-- Internal JavaScript -->
<script>
  console.log('Hello from internal script!');
</script>

<!-- External JavaScript (Recommended) -->
<script src="script.js"></script>
<script src="app.js" defer></script>`,
        },
        {
          heading: "console.log() for Debugging",
          text: "console.log() is the most important tool for debugging. It prints values to the browser's developer console.",
          code: `// Basic logging
console.log('Hello, World!');
console.log(42);
console.log(true);

// Logging variables
const name = 'Alice';
const age = 25;
console.log('Name:', name, 'Age:', age);

// Logging objects
const person = { name: 'Bob', age: 30 };
console.log(person);

// Other console methods
console.error('This is an error');
console.warn('This is a warning');
console.table([1, 2, 3, 4]);
console.clear(); // Clear console`,
        },
        {
          heading: "Comments in JavaScript",
          text: "Comments help document your code and are ignored by the JavaScript engine.",
          code: `// This is a single-line comment

/*
  This is a
  multi-line comment
  explaining complex logic
*/

let x = 5; // Inline comment

/**
 * JSDoc comment for documentation
 * @param {string} name - The user's name
 * @returns {string} A greeting message
 */
function greet(name) {
  return 'Hello, ' + name;
}`,
        },
      ],
    },
    variables: {
      title: "Variables & Data Types",
      description: "Understand how to store and work with different types of data in JavaScript.",
      sections: [
        {
          heading: "var, let, const",
          text: "JavaScript provides three ways to declare variables, each with different scoping rules.",
          code: `// var (old way - avoid using)
var oldWay = 'I have function scope';
var oldWay = 'Can be redeclared'; // Allowed but problematic

// let (modern - use for values that change)
let age = 25;
age = 26; // Can be reassigned
// let age = 30; // Error: Cannot redeclare

// const (modern - use for values that don't change)
const name = 'Alice';
// name = 'Bob'; // Error: Cannot reassign
const PI = 3.14159;

// Scope differences
{
  let blockScoped = 'Only inside this block';
  var functionScoped = 'Available outside block';
}
// console.log(blockScoped); // Error
console.log(functionScoped); // Works`,
        },
        {
          heading: "Primitive Data Types",
          text: "JavaScript has 7 primitive data types that represent single values.",
          code: `// String - text data
let str = "Hello World";
let str2 = 'Single quotes work too';
let str3 = \`Template literal with \${str}\`;

// Number - integers and decimals
let integer = 42;
let decimal = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN;

// Boolean - true or false
let isActive = true;
let isCompleted = false;

// Null - intentional absence of value
let empty = null;

// Undefined - variable declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// Symbol - unique identifier (ES6)
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2); // false - always unique

// BigInt - large integers (ES2020)
let bigNumber = 9007199254740991n;
let anotherBig = BigInt(123456789);`,
        },
        {
          heading: "Reference Data Types",
          text: "Reference types store collections of data or more complex entities.",
          code: `// Arrays - ordered list of values
let fruits = ['apple', 'banana', 'orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'two', true, null, { key: 'value' }];

// Objects - key-value pairs
let person = {
  name: 'Alice',
  age: 25,
  isStudent: true,
  hobbies: ['reading', 'coding']
};

// Functions - reusable blocks of code
function greet(name) {
  return 'Hello, ' + name;
}

// Checking types
console.log(typeof 'hello');        // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (JavaScript quirk)
console.log(typeof {});             // "object"
console.log(typeof []);             // "object"
console.log(typeof function(){});   // "function"
console.log(Array.isArray([]));     // true`,
        },
      ],
    },
    operators: {
      title: "Operators",
      description: "Learn about arithmetic, comparison, logical, and other operators in JavaScript.",
      sections: [
        {
          heading: "Arithmetic & Assignment Operators",
          code: `// Arithmetic operators
let a = 10;
let b = 3;

console.log(a + b);  // 13 - Addition
console.log(a - b);  // 7  - Subtraction
console.log(a * b);  // 30 - Multiplication
console.log(a / b);  // 3.333... - Division
console.log(a % b);  // 1  - Modulus (remainder)
console.log(a ** b); // 1000 - Exponentiation

// Increment and Decrement
let x = 5;
x++;      // x = 6 (post-increment)
++x;      // x = 7 (pre-increment)
x--;      // x = 6 (post-decrement)
--x;      // x = 5 (pre-decrement)

// Assignment operators
let num = 10;
num += 5;  // num = num + 5  →  15
num -= 3;  // num = num - 3  →  12
num *= 2;  // num = num * 2  →  24
num /= 4;  // num = num / 4  →  6
num %= 4;  // num = num % 4  →  2
num **= 3; // num = num ** 3 →  8`,
        },
        {
          heading: "Comparison Operators",
          text: "Comparison operators return boolean values (true or false).",
          code: `// Equality operators
console.log(5 == '5');   // true  - loose equality (type coercion)
console.log(5 === '5');  // false - strict equality (no type coercion)
console.log(5 != '5');   // false - loose inequality
console.log(5 !== '5');  // true  - strict inequality

// ALWAYS use === and !== to avoid unexpected behavior

// Relational operators
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 5);    // false

// String comparison (alphabetical)
console.log('apple' < 'banana'); // true
console.log('Z' < 'a');          // true (uppercase comes first)`,
        },
        {
          heading: "Logical Operators",
          text: "Logical operators are used to combine or invert boolean values.",
          code: `// AND (&&) - returns true if both are true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

// OR (||) - returns true if at least one is true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - inverts boolean value
console.log(!true);           // false
console.log(!false);          // true

// Practical examples
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('Can drive');
}

const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
  console.log('No work today!');
}

// Short-circuit evaluation
const user = null;
const username = user && user.name; // undefined (doesn't error)
const defaultName = username || 'Guest'; // 'Guest'`,
        },
        {
          heading: "Ternary Operator",
          text: "A shorthand for if-else statements. Syntax: condition ? valueIfTrue : valueIfFalse",
          code: `// Basic ternary
const age = 20;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // "Yes"

// Traditional if-else equivalent
let message;
if (age >= 18) {
  message = 'Adult';
} else {
  message = 'Minor';
}

// With ternary (cleaner)
const status = age >= 18 ? 'Adult' : 'Minor';

// Nested ternary (use sparingly - can be hard to read)
const score = 85;
const grade = score >= 90 ? 'A' :
              score >= 80 ? 'B' :
              score >= 70 ? 'C' :
              score >= 60 ? 'D' : 'F';

// Practical example
const isLoggedIn = true;
const greeting = isLoggedIn ? 'Welcome back!' : 'Please log in';
console.log(greeting);`,
        },
      ],
    },
    "control-flow": {
      title: "Control Flow",
      description: "Learn how to control the flow of your program with conditionals and loops.",
      sections: [
        {
          heading: "if, else if, else",
          code: `// Basic if statement
const age = 20;
if (age >= 18) {
  console.log('You are an adult');
}

// if-else
const temperature = 25;
if (temperature > 30) {
  console.log('It\\'s hot!');
} else {
  console.log('It\\'s not that hot');
}

// if-else if-else
const score = 85;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// Multiple conditions
const hour = 14;
const isWeekend = false;

if (hour < 12 && !isWeekend) {
  console.log('Good morning, time to work!');
} else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}`,
        },
        {
          heading: "switch Statement",
          text: "Switch statements provide a cleaner way to handle multiple conditions based on a single value.",
          code: `// Basic switch
const day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of the work week');
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('Midweek');
    break;
  case 'Friday':
    console.log('TGIF!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Invalid day');
}

// Switch with return (in function)
function getSeasonMessage(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'Winter';
    case 3:
    case 4:
    case 5:
      return 'Spring';
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 9:
    case 10:
    case 11:
      return 'Fall';
    default:
      return 'Invalid month';
  }
}`,
        },
        {
          heading: "Loops: for, while, do...while",
          code: `// For loop
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}
// Output: 0, 1, 2, 3, 4

// Loop through array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop - condition checked before execution
let count = 0;
while (count < 5) {
  console.log('Count:', count);
  count++;
}

// Do-while loop - executes at least once
let num = 0;
do {
  console.log('Number:', num);
  num++;
} while (num < 5);

// Loop control statements
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // Skip iteration when i is 3
  if (i === 7) break;     // Exit loop when i is 7
  console.log(i);         // Output: 0,1,2,4,5,6
}`,
        },
        {
          heading: "Loop Helpers: forEach, for...in, for...of",
          code: `// forEach - iterate over array elements
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});

// for...in - iterate over object keys
const person = { name: 'Alice', age: 25, city: 'NYC' };
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// for...in with arrays (not recommended - use for...of)
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
  console.log(\`\${index}: \${colors[index]}\`);
}

// for...of - iterate over iterable values (ES6)
for (let color of colors) {
  console.log(color);
}

// for...of with strings
const name = 'Alice';
for (let char of name) {
  console.log(char); // A, l, i, c, e
}

// for...of with Map
const map = new Map([['a', 1], ['b', 2]]);
for (let [key, value] of map) {
  console.log(\`\${key}: \${value}\`);
}`,
        },
      ],
    },
    functions: {
      title: "Functions",
      description: "Learn how to create reusable blocks of code with functions.",
      sections: [
        {
          heading: "Function Declaration vs Expression",
          code: `// Function Declaration (hoisted - can be called before definition)
console.log(greet('Alice')); // Works!

function greet(name) {
  return 'Hello, ' + name + '!';
}

// Function Expression (not hoisted)
// console.log(sayHi('Bob')); // Error: Cannot access before initialization

const sayHi = function(name) {
  return 'Hi, ' + name;
};

console.log(sayHi('Bob')); // Works!

// Named function expression
const multiply = function mult(a, b) {
  return a * b;
};

// Anonymous function (often used as callbacks)
setTimeout(function() {
  console.log('This runs after 1 second');
}, 1000);`,
        },
        {
          heading: "Arrow Functions",
          text: "Arrow functions provide a shorter syntax and don't bind their own 'this'.",
          code: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// Concise arrow function (implicit return)
const multiply = (a, b) => a * b;

// Single parameter (parentheses optional)
const square = x => x * x;
const greet = name => 'Hello, ' + name;

// No parameters
const sayHello = () => console.log('Hello!');

// Returning object literal (wrap in parentheses)
const makePerson = (name, age) => ({ name, age });

// Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);`,
        },
        {
          heading: "Parameters vs Arguments",
          text: "Parameters are variables in function definitions. Arguments are actual values passed to functions.",
          code: `// Parameters with default values
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet());                    // "Hello, Guest!"
console.log(greet('Alice'));             // "Hello, Alice!"
console.log(greet('Bob', 'Hi'));         // "Hi, Bob!"

// Rest parameters - collect remaining arguments into array
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Mixing regular and rest parameters
function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]

// Arguments object (old way - use rest parameters instead)
function oldWay() {
  console.log(arguments); // array-like object
}`,
        },
        {
          heading: "Return Values",
          code: `// Explicit return
function add(a, b) {
  return a + b;
  console.log('This never executes'); // Code after return is unreachable
}

// No return (returns undefined)
function sayHello(name) {
  console.log('Hello, ' + name);
  // implicit: return undefined;
}

const result = sayHello('Alice'); // Logs: "Hello, Alice"
console.log(result);               // undefined

// Early return (for validation)
function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

// Returning objects
function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      return 'Hello, I am ' + this.name;
    }
  };
}

// Returning functions (higher-order functions)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10`,
        },
      ],
    },
    arrays: {
      title: "Arrays",
      description: "Master array creation and essential array methods for manipulating lists of data.",
      sections: [
        {
          heading: "Creating Arrays",
          code: `// Array literal (most common)
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, 'two', true, null, { key: 'value' }, [1, 2]];

// Array constructor
const arr1 = new Array(3);           // [empty × 3]
const arr2 = new Array(1, 2, 3);     // [1, 2, 3]

// Array.from() - create from array-like or iterable
const str = 'hello';
const chars = Array.from(str);       // ['h', 'e', 'l', 'l', 'o']
const range = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// Array.of() - create from arguments
const arr3 = Array.of(7);            // [7]
const arr4 = Array.of(1, 2, 3);      // [1, 2, 3]

// Accessing elements
console.log(fruits[0]);              // "apple"
console.log(fruits[fruits.length - 1]); // "orange" (last element)
console.log(fruits.length);          // 3`,
        },
        {
          heading: "Adding/Removing Elements: push, pop, shift, unshift",
          code: `const fruits = ['apple', 'banana'];

// push() - add to end (returns new length)
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// pop() - remove from end (returns removed element)
const last = fruits.pop();
console.log(last);   // 'orange'
console.log(fruits); // ['apple', 'banana']

// unshift() - add to beginning (returns new length)
fruits.unshift('mango');
console.log(fruits); // ['mango', 'apple', 'banana']

// shift() - remove from beginning (returns removed element)
const first = fruits.shift();
console.log(first);  // 'mango'
console.log(fruits); // ['apple', 'banana']

// splice() - add/remove at any position
const nums = [1, 2, 5, 6];
nums.splice(2, 0, 3, 4); // At index 2, remove 0, add 3, 4
console.log(nums); // [1, 2, 3, 4, 5, 6]

nums.splice(1, 2); // At index 1, remove 2 elements
console.log(nums); // [1, 4, 5, 6]`,
        },
        {
          heading: "Array Methods: map, filter, reduce",
          code: `const numbers = [1, 2, 3, 4, 5];

// map() - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squares = numbers.map(n => n ** 2);
console.log(squares); // [1, 4, 9, 16, 25]

// filter() - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const greaterThan2 = numbers.filter(n => n > 2);
console.log(greaterThan2); // [3, 4, 5]

// reduce() - reduce array to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product); // 120

// Practical example: calculate average
const average = numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
console.log(average); // 3

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 3)           // [6, 12]
  .reduce((acc, n) => acc + n, 0); // 18
console.log(result);`,
        },
        {
          heading: "Other Useful Methods: find, some, every, includes, indexOf",
          code: `const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];

// find() - returns first element that passes test
const found = numbers.find(n => n > 3);
console.log(found); // 4

// findIndex() - returns index of first match
const index = numbers.findIndex(n => n > 3);
console.log(index); // 3

// some() - returns true if at least one passes test
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every() - returns true if all pass test
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// includes() - check if array contains value
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false
console.log(numbers.includes(3));       // true

// indexOf() - returns first index of value (-1 if not found)
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('grape'));  // -1

// lastIndexOf() - returns last index of value
const nums = [1, 2, 3, 2, 1];
console.log(nums.lastIndexOf(2)); // 3

// join() - create string from array
console.log(fruits.join(', ')); // "apple, banana, orange"

// reverse() - reverse array in place
fruits.reverse();
console.log(fruits); // ['orange', 'banana', 'apple']

// sort() - sort array in place
const sorted = [3, 1, 4, 1, 5].sort((a, b) => a - b);
console.log(sorted); // [1, 1, 3, 4, 5]`,
        },
      ],
    },
    objects: {
      title: "Objects",
      description: "Learn how to work with objects, JavaScript's fundamental data structure for storing key-value pairs.",
      sections: [
        {
          heading: "Object Literals",
          code: `// Creating objects
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  isStudent: true
};

// Nested objects
const user = {
  name: 'Bob',
  address: {
    street: '123 Main St',
    city: 'Boston',
    zipCode: '02101'
  },
  hobbies: ['reading', 'coding', 'gaming']
};

// Shorthand property names (ES6)
const name = 'Charlie';
const age = 30;
const personShorthand = { name, age }; // { name: 'Charlie', age: 30 }

// Computed property names
const key = 'favoriteColor';
const obj = {
  [key]: 'blue',
  ['user' + 'Name']: 'admin'
};
console.log(obj); // { favoriteColor: 'blue', userName: 'admin' }`,
        },
        {
          heading: "Accessing Properties: Dot & Bracket Notation",
          code: `const person = {
  name: 'Alice',
  age: 25,
  'favorite color': 'blue', // Property with space
  job: 'developer'
};

// Dot notation (most common)
console.log(person.name);    // "Alice"
console.log(person.age);     // 25

// Bracket notation
console.log(person['name']); // "Alice"
console.log(person['favorite color']); // "blue" (required for spaces)

// Dynamic property access
const prop = 'job';
console.log(person[prop]);   // "developer"

// Accessing nested properties
const user = {
  name: 'Bob',
  address: {
    city: 'Boston'
  }
};

console.log(user.address.city);           // "Boston"
console.log(user['address']['city']);     // "Boston"

// Optional chaining (ES2020) - safe navigation
const value = user.address?.zipCode;      // undefined (no error)
const nested = user.contact?.email?.primary; // undefined

// Adding properties
person.email = 'alice@example.com';
person['phone'] = '555-1234';

// Modifying properties
person.age = 26;

// Deleting properties
delete person.job;`,
        },
        {
          heading: "Object Methods",
          code: `// Methods - functions as object properties
const calculator = {
  add: function(a, b) {
    return a + b;
  },

  // Shorthand method syntax (ES6)
  subtract(a, b) {
    return a - b;
  },

  // Arrow function as method
  multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 7));  // 21

// Object with state and methods
const counter = {
  count: 0,

  increment() {
    this.count++;
    return this.count;
  },

  decrement() {
    this.count--;
    return this.count;
  },

  reset() {
    this.count = 0;
  }
};

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // count is now 0`,
        },
        {
          heading: "this Keyword & JSON",
          code: `// 'this' refers to the object the method belongs to
const person = {
  name: 'Alice',
  age: 25,

  greet() {
    return 'Hello, I am ' + this.name;
  },

  getInfo() {
    return \`\${this.name} is \${this.age} years old\`;
  }
};

console.log(person.greet());    // "Hello, I am Alice"
console.log(person.getInfo());  // "Alice is 25 years old"

// JSON - JavaScript Object Notation
const user = {
  name: 'Bob',
  age: 30,
  hobbies: ['reading', 'coding']
};

// Convert object to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"Bob","age":30,"hobbies":["reading","coding"]}'

// Parse JSON string to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "Bob"

// Pretty print JSON
const formatted = JSON.stringify(user, null, 2);
console.log(formatted);

// Object methods
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);      // ['a', 'b', 'c']
Object.values(obj);    // [1, 2, 3]
Object.entries(obj);   // [['a', 1], ['b', 2], ['c', 3]]

// Merge objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2 }`,
        },
      ],
    },
    dom: {
      title: "DOM (Document Object Model)",
      description: "Learn how to select and manipulate HTML elements dynamically with JavaScript.",
      sections: [
        {
          heading: "Selecting Elements: getElementById, querySelector, querySelectorAll",
          code: `// getElementById - select by ID
const header = document.getElementById('header');

// getElementsByClassName - returns HTMLCollection (live)
const buttons = document.getElementsByClassName('btn');

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName('p');

// querySelector - returns first match (CSS selector)
const firstButton = document.querySelector('.btn');
const mainDiv = document.querySelector('#main');
const firstP = document.querySelector('p');

// querySelectorAll - returns NodeList (static)
const allButtons = document.querySelectorAll('.btn');
const allDivs = document.querySelectorAll('div');

// Complex CSS selectors
const specific = document.querySelector('.container .item:first-child');
const inputs = document.querySelectorAll('input[type="text"]');

// Converting NodeList/HTMLCollection to Array
const buttonsArray = Array.from(buttons);
const divsArray = [...allDivs];

// Iterating over selections
allButtons.forEach(button => {
  console.log(button.textContent);
});`,
        },
        {
          heading: "Changing Content & Styles: innerHTML, textContent, style",
          code: `const element = document.querySelector('#myElement');

// Change text content (safer - doesn't parse HTML)
element.textContent = 'New text content';

// Change HTML content (can parse HTML)
element.innerHTML = '<strong>Bold text</strong>';

// Security warning: Be careful with user input!
// Don't do: element.innerHTML = userInput; // XSS vulnerability

// Change inline styles
element.style.color = 'blue';
element.style.fontSize = '20px';
element.style.backgroundColor = '#f0f0f0';
element.style.border = '2px solid red';

// Change multiple styles
Object.assign(element.style, {
  color: 'white',
  backgroundColor: 'navy',
  padding: '10px',
  borderRadius: '5px'
});

// Get computed styles
const styles = window.getComputedStyle(element);
console.log(styles.color);
console.log(styles.fontSize);

// Change attributes
element.setAttribute('data-id', '123');
element.setAttribute('title', 'Hover text');
element.id = 'newId';
element.className = 'new-class';

// Get attributes
const id = element.getAttribute('data-id');
const title = element.getAttribute('title');`,
        },
        {
          heading: "Adding/Removing Elements: createElement, append, remove",
          code: `// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div';
newDiv.className = 'box';
newDiv.id = 'myBox';

// Create and add multiple elements
const list = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
  const li = document.createElement('li');
  li.textContent = \`Item \${i}\`;
  list.appendChild(li);
}

// Adding elements to DOM
const container = document.querySelector('#container');

container.appendChild(newDiv);     // Add to end
container.append(list);            // Add to end (can add multiple)
container.prepend(newDiv);         // Add to beginning
container.before(newDiv);          // Add before container
container.after(newDiv);           // Add after container

// insertBefore (older method)
const referenceNode = container.firstChild;
container.insertBefore(newDiv, referenceNode);

// Removing elements
newDiv.remove();                   // Remove element
container.removeChild(newDiv);     // Remove child (older)

// Replace element
const newElement = document.createElement('p');
newElement.textContent = 'Replacement';
container.replaceChild(newElement, list);

// Clone element
const clone = newDiv.cloneNode(true); // true = deep clone (with children)
container.appendChild(clone);`,
        },
        {
          heading: "Working with Classes: classList.add/remove/toggle",
          code: `const element = document.querySelector('.box');

// Add class
element.classList.add('active');
element.classList.add('highlight', 'featured'); // Add multiple

// Remove class
element.classList.remove('active');
element.classList.remove('highlight', 'featured');

// Toggle class (add if absent, remove if present)
element.classList.toggle('hidden');

// Toggle with condition
element.classList.toggle('active', true);  // Always add
element.classList.toggle('active', false); // Always remove

// Check if class exists
if (element.classList.contains('active')) {
  console.log('Element is active');
}

// Replace class
element.classList.replace('old-class', 'new-class');

// Get all classes as string
console.log(element.className); // "box active highlight"

// Iterate over classes
element.classList.forEach(cls => {
  console.log(cls);
});

// Practical example: toggle menu
const menuButton = document.querySelector('#menu-btn');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.classList.toggle('active');
});`,
        },
      ],
    },
    events: {
      title: "Events",
      description: "Learn how to respond to user interactions like clicks, keyboard input, and mouse movements.",
      sections: [
        {
          heading: "onclick & addEventListener",
          code: `// Method 1: Inline onclick (not recommended)
// <button onclick="handleClick()">Click me</button>

// Method 2: DOM property (can only assign one handler)
const button1 = document.querySelector('#btn1');
button1.onclick = function() {
  console.log('Button clicked!');
};

// Method 3: addEventListener (best practice - can add multiple)
const button2 = document.querySelector('#btn2');

button2.addEventListener('click', function() {
  console.log('First handler');
});

button2.addEventListener('click', function() {
  console.log('Second handler');
});

// Arrow function as handler
button2.addEventListener('click', () => {
  console.log('Arrow function handler');
});

// Remove event listener
function handleClick() {
  console.log('Clicked!');
}

button2.addEventListener('click', handleClick);
button2.removeEventListener('click', handleClick); // Must use same function reference`,
        },
        {
          heading: "Keyboard & Mouse Events",
          code: `// Keyboard events
const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  console.log('Key pressed:', e.key);
  console.log('Key code:', e.code);
});

input.addEventListener('keyup', (e) => {
  console.log('Key released:', e.key);
});

input.addEventListener('keypress', (e) => {
  console.log('Key press:', e.key); // Deprecated, use keydown
});

// Detect specific keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
  }
  if (e.key === 'Escape') {
    console.log('Escape pressed');
  }
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    console.log('Ctrl+S pressed');
  }
});

// Mouse events
const box = document.querySelector('.box');

box.addEventListener('click', () => {
  console.log('Single click');
});

box.addEventListener('dblclick', () => {
  console.log('Double click');
});

box.addEventListener('mousedown', () => {
  console.log('Mouse button pressed');
});

box.addEventListener('mouseup', () => {
  console.log('Mouse button released');
});

box.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
});

box.addEventListener('mouseleave', () => {
  console.log('Mouse left');
});

box.addEventListener('mousemove', (e) => {
  console.log(\`Mouse position: \${e.clientX}, \${e.clientY}\`);
});

// Other useful events
input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input blurred'));
input.addEventListener('change', () => console.log('Input changed'));
input.addEventListener('input', () => console.log('Input value changing'));

window.addEventListener('scroll', () => console.log('Page scrolling'));
window.addEventListener('resize', () => console.log('Window resized'));`,
        },
        {
          heading: "Event Object & event.target",
          code: `// Event object provides details about the event
button.addEventListener('click', function(event) {
  // Event properties
  console.log('Event type:', event.type);           // "click"
  console.log('Target element:', event.target);     // The clicked element
  console.log('Current target:', event.currentTarget); // Element with listener
  console.log('Timestamp:', event.timeStamp);

  // Mouse event properties
  console.log('Mouse X:', event.clientX);
  console.log('Mouse Y:', event.clientY);
  console.log('Mouse page X:', event.pageX);
  console.log('Mouse page Y:', event.pageY);

  // Keyboard modifiers
  console.log('Ctrl key:', event.ctrlKey);
  console.log('Shift key:', event.shiftKey);
  console.log('Alt key:', event.altKey);
});

// event.target - element that triggered event
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});

// Prevent default behavior
const link = document.querySelector('a');
link.addEventListener('click', (e) => {
  e.preventDefault(); // Don't follow link
  console.log('Link clicked but not followed');
});

// Stop event propagation (bubbling)
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

child.addEventListener('click', (e) => {
  e.stopPropagation(); // Don't trigger parent's handler
  console.log('Child clicked');
});

parent.addEventListener('click', () => {
  console.log('Parent clicked'); // Won't fire if child is clicked
});

// Event delegation - attach listener to parent
document.querySelector('#list').addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});`,
        },
      ],
    },
    timers: {
      title: "Timers",
      description: "Learn how to execute code after a delay or repeatedly with setTimeout and setInterval.",
      sections: [
        {
          heading: "setTimeout - Execute Once After Delay",
          code: `// Basic setTimeout - executes once after delay
setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

// setTimeout with function reference
function greet() {
  console.log('Hello!');
}
setTimeout(greet, 1000);

// setTimeout with parameters
function sayHello(name, greeting) {
  console.log(\`\${greeting}, \${name}!\`);
}
setTimeout(sayHello, 1500, 'Alice', 'Hi');

// Storing timeout ID
const timeoutId = setTimeout(() => {
  console.log('This might not run');
}, 3000);

// Cancel timeout before it executes
clearTimeout(timeoutId);

// Practical example: delayed message
const showMessage = (message, delay) => {
  return setTimeout(() => {
    console.log(message);
  }, delay);
};

const msgTimeout = showMessage('Loading complete!', 2000);

// Cancel if needed
// clearTimeout(msgTimeout);`,
        },
        {
          heading: "setInterval - Execute Repeatedly",
          code: `// Basic setInterval - executes repeatedly
const intervalId = setInterval(() => {
  console.log('This runs every 2 seconds');
}, 2000);

// Stop interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval stopped');
}, 10000);

// Countdown timer example
let count = 10;
const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log('Countdown finished!');
  }
}, 1000);

// Clock example
function displayTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  console.log(time);
}

const clock = setInterval(displayTime, 1000);

// Stop clock after 30 seconds
setTimeout(() => clearInterval(clock), 30000);

// setInterval with parameters
const interval = setInterval((name) => {
  console.log(\`Hello, \${name}!\`);
}, 2000, 'Alice');`,
        },
        {
          heading: "Clearing Timers & Best Practices",
          code: `// Store timer IDs for cleanup
const timers = [];

// Add timers to array
timers.push(setTimeout(() => console.log('Timer 1'), 1000));
timers.push(setTimeout(() => console.log('Timer 2'), 2000));
timers.push(setInterval(() => console.log('Interval'), 500));

// Clear all timers
function clearAllTimers() {
  timers.forEach(timer => {
    clearTimeout(timer);  // Works for both timeout and interval
    clearInterval(timer);
  });
  timers.length = 0; // Empty array
}

// Call when component unmounts or page unloads
window.addEventListener('beforeunload', clearAllTimers);

// Alternative: Use one timeout to schedule next execution
function recurringTask() {
  console.log('Task executed');

  // Schedule next execution
  setTimeout(recurringTask, 1000);
}

// Start the task
recurringTask();

// Best practices
// 1. Always store timer IDs if you need to cancel them
// 2. Clear timers when they're no longer needed
// 3. Be careful with setInterval - prefer setTimeout for complex tasks
// 4. Remember that timers are not guaranteed to execute exactly on time

// requestAnimationFrame (better for animations)
function animate() {
  // Animation code here
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`,
        },
      ],
    },
    storage: {
      title: "Web Storage",
      description: "Learn how to store data in the browser using localStorage and sessionStorage.",
      sections: [
        {
          heading: "localStorage - Persistent Storage",
          text: "localStorage persists data even after closing the browser. Data has no expiration time.",
          code: `// Store data (string values only)
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('count', '42');

// Retrieve data
const username = localStorage.getItem('username');
console.log(username); // "Alice"

const theme = localStorage.getItem('theme');
console.log(theme); // "dark"

// Check if key exists
if (localStorage.getItem('username') !== null) {
  console.log('Username exists');
}

// Remove specific item
localStorage.removeItem('count');

// Clear all data
localStorage.clear();

// Get number of items
console.log(localStorage.length);

// Get key by index
const firstKey = localStorage.key(0);

// Iterate over all items
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(\`\${key}: \${value}\`);
}`,
        },
        {
          heading: "sessionStorage - Temporary Storage",
          text: "sessionStorage persists only for the current session (tab). Data is cleared when tab is closed.",
          code: `// Same API as localStorage
sessionStorage.setItem('temp', 'data');
const tempData = sessionStorage.getItem('temp');
sessionStorage.removeItem('temp');
sessionStorage.clear();

// Practical example: form data persistence
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

// Save on input
nameInput.addEventListener('input', () => {
  sessionStorage.setItem('formName', nameInput.value);
});

// Restore on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedName = sessionStorage.getItem('formName');
  if (savedName) {
    nameInput.value = savedName;
  }
});

// Clear on form submit
form.addEventListener('submit', () => {
  sessionStorage.removeItem('formName');
});`,
        },
        {
          heading: "JSON.stringify() & JSON.parse() for Objects",
          text: "Storage APIs only accept strings. Use JSON to store objects and arrays.",
          code: `// Storing objects
const user = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'coding']
};

// Convert to JSON string before storing
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse back to object
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name);    // "Alice"
console.log(storedUser.hobbies); // ['reading', 'coding']

// Storing arrays
const todos = [
  { id: 1, text: 'Learn JavaScript', done: false },
  { id: 2, text: 'Build a project', done: false }
];

localStorage.setItem('todos', JSON.stringify(todos));

// Retrieve array
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos);

// Helper functions
const storage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};

// Usage
storage.set('user', { name: 'Bob', age: 30 });
const userData = storage.get('user');
storage.remove('user');

// Practical example: Settings
const defaultSettings = {
  theme: 'light',
  fontSize: 16,
  notifications: true
};

function loadSettings() {
  const saved = localStorage.getItem('settings');
  return saved ? JSON.parse(saved) : defaultSettings;
}

function saveSettings(settings) {
  localStorage.setItem('settings', JSON.stringify(settings));
}

const settings = loadSettings();
console.log(settings.theme);`,
        },
      ],
    },
    async: {
      title: "Asynchronous JavaScript",
      description: "Understand callbacks, promises, and async/await for handling asynchronous operations.",
      sections: [
        {
          heading: "Callbacks",
          text: "A callback is a function passed as an argument to another function, to be executed later.",
          code: `// Simple callback example
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'Alice' };
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log('Data received:', result);
});

// Callback with error handling
function getData(callback) {
  setTimeout(() => {
    const error = null;
    const data = { user: 'Bob' };

    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  }, 1000);
}

getData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Success:', data);
  }
});

// Callback hell - nested callbacks (hard to read!)
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log('All data loaded');
    });
  });
});`,
        },
        {
          heading: "Promises (.then, .catch)",
          text: "Promises provide a cleaner way to handle asynchronous operations.",
          code: `// Creating a promise
const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: 'Alice' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
};

// Using promises with .then and .catch
fetchUserData()
  .then(data => {
    console.log('User data:', data);
    return data.id;
  })
  .then(id => {
    console.log('User ID:', id);
  })
  .catch(error => {
    console.error('Error:', error.message);
  })
  .finally(() => {
    console.log('Promise completed');
  });

// Promise chaining
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'Bob' }), 500);
  });
}

function getPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]), 500);
  });
}

getUser(1)
  .then(user => {
    console.log('User:', user);
    return getPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });`,
        },
        {
          heading: "async / await",
          text: "Async/await makes asynchronous code look and behave more like synchronous code.",
          code: `// Async function - always returns a promise
async function getUserData() {
  return { id: 1, name: 'Alice' };
}

getUserData().then(data => console.log(data));

// Using await - pauses execution until promise resolves
async function fetchData() {
  try {
    const user = await fetchUserData();
    console.log('User:', user);

    const posts = await getPosts(user.id);
    console.log('Posts:', posts);

    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call async function
fetchData();

// Async arrow function
const getData = async () => {
  const data = await fetchUserData();
  return data;
};

// Multiple await calls
async function loadAllData() {
  const user = await getUser(1);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);

  return { user, posts, comments };
}

// Parallel execution with Promise.all
async function loadDataParallel() {
  const [users, posts, comments] = await Promise.all([
    getUsers(),
    getPosts(),
    getComments()
  ]);

  return { users, posts, comments };
}

// Error handling with try-catch
async function safeDataFetch() {
  try {
    const data = await fetchUserData();
    return data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    return null;
  }
}

// Top-level await (modern browsers)
const data = await fetchUserData();
console.log(data);`,
        },
      ],
    },
    fetch: {
      title: "Fetch API & AJAX",
      description: "Learn how to make HTTP requests to APIs and display dynamic data on web pages.",
      sections: [
        {
          heading: "fetch() to Call APIs",
          code: `// Basic GET request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log('Users:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// With async/await (cleaner)
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// POST request - sending data
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage
createUser({ name: 'Alice', email: 'alice@example.com' });

// PUT request - update data
async function updateUser(id, updates) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  return response.json();
}

// DELETE request
async function deleteUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'DELETE'
  });
  return response.ok;
}`,
        },
        {
          heading: "Handling Responses (JSON)",
          code: `// Check response status
async function fetchData() {
  const response = await fetch('https://api.example.com/data');

  if (!response.ok) {
    throw new Error(\`HTTP error! Status: \${response.status}\`);
  }

  const data = await response.json();
  return data;
}

// Different response types
async function handleResponse() {
  const response = await fetch('https://api.example.com/data');

  // JSON
  const json = await response.json();

  // Text
  const text = await response.text();

  // Blob (for files/images)
  const blob = await response.blob();

  // FormData
  const formData = await response.formData();
}

// Checking content type
async function smartFetch(url) {
  const response = await fetch(url);
  const contentType = response.headers.get('content-type');

  if (contentType.includes('application/json')) {
    return response.json();
  } else if (contentType.includes('text/')) {
    return response.text();
  } else {
    return response.blob();
  }
}

// Headers
const headers = new Headers();
headers.append('Authorization', 'Bearer token123');
headers.append('Content-Type', 'application/json');

fetch('https://api.example.com/protected', { headers });`,
        },
        {
          heading: "Display Data Dynamically on Webpage",
          code: `// Fetch and display users
async function displayUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const container = document.querySelector('#users');

    users.forEach(user => {
      const div = document.createElement('div');
      div.className = 'user-card';
      div.innerHTML = \`
        <h3>\${user.name}</h3>
        <p>Email: \${user.email}</p>
        <p>Phone: \${user.phone}</p>
      \`;
      container.appendChild(div);
    });
  } catch (error) {
    console.error('Error loading users:', error);
  }
}

// Call when page loads
displayUsers();

// Complete example: Todo list
async function loadTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  const list = document.querySelector('#todo-list');

  todos.slice(0, 10).forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = \`
      <input type="checkbox" \${todo.completed ? 'checked' : ''}>
      <span>\${todo.title}</span>
    \`;
    list.appendChild(li);
  });
}

// Search functionality
async function searchUsers(query) {
  const response = await fetch('https://api.example.com/users?q=' + query);
  const users = await response.json();

  displaySearchResults(users);
}

// Loading states
async function fetchWithLoading() {
  const loader = document.querySelector('#loader');
  const content = document.querySelector('#content');

  loader.style.display = 'block';
  content.style.display = 'none';

  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    content.innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    content.innerHTML = 'Error loading data';
  } finally {
    loader.style.display = 'none';
    content.style.display = 'block';
  }
}`,
        },
      ],
    },
    es6: {
      title: "ES6+ Modern Features",
      description: "Master modern JavaScript features introduced in ES6 and beyond.",
      sections: [
        {
          heading: "let, const, arrow functions",
          code: `// Already covered in variables and functions sections
// Quick recap:

// let - block-scoped, can reassign
let count = 0;
count = 1;

// const - block-scoped, cannot reassign
const name = 'Alice';
// name = 'Bob'; // Error

// Arrow functions - concise syntax
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => console.log('Hello!');`,
        },
        {
          heading: "Destructuring (arrays & objects)",
          code: `// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Skip elements
const [r, , b] = colors;
console.log(r, b); // "red" "blue"

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// Default values
const [a, b, c = 'default'] = ['first', 'second'];
console.log(c); // "default"

// Object destructuring
const person = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = person;
console.log(name, age); // "Alice" 25

// Rename variables
const { name: userName, age: userAge } = person;
console.log(userName); // "Alice"

// Default values
const { country = 'USA' } = person;
console.log(country); // "USA"

// Nested destructuring
const user = {
  id: 1,
  profile: {
    name: 'Bob',
    address: {
      city: 'Boston'
    }
  }
};

const { profile: { name: profileName, address: { city } } } = user;
console.log(profileName, city); // "Bob" "Boston"

// Function parameter destructuring
function greet({ name, age }) {
  console.log(\`\${name} is \${age} years old\`);
}

greet({ name: 'Charlie', age: 30 });`,
        },
        {
          heading: "Spread (...) & Rest parameters",
          code: `// Spread operator - expand arrays/objects

// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const original = [1, 2, 3];
const copy = [...original];

// Array to function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Copy object
const person = { name: 'Alice', age: 25 };
const clone = { ...person };

// Override properties
const updated = { ...person, age: 26 };
console.log(updated); // { name: 'Alice', age: 26 }

// Rest parameters - collect arguments into array
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Mix regular and rest parameters
function greet(greeting, ...names) {
  names.forEach(name => {
    console.log(\`\${greeting}, \${name}!\`);
  });
}

greet('Hello', 'Alice', 'Bob', 'Charlie');`,
        },
        {
          heading: "Template Literals & Modules",
          code: `// Template literals - string interpolation
const name = 'Alice';
const age = 25;
const message = \`My name is \${name} and I am \${age} years old\`;

// Multi-line strings
const html = \`
  <div class="user">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;

// Expression interpolation
const price = 19.99;
const total = \`Total: $\${(price * 1.1).toFixed(2)}\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}

const user = 'Alice';
const highlighted = highlight\`Welcome, \${user}!\`;

// ES6 Modules (import/export)

// Exporting (math.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export default function multiply(a, b) {
  return a * b;
}

// Importing (app.js)
import multiply from './math.js';
import { add, subtract } from './math.js';
import * as math from './math.js';

// Use imports
console.log(add(5, 3));
console.log(multiply(4, 2));
console.log(math.subtract(10, 4));`,
        },
      ],
    },
    errors: {
      title: "Error Handling",
      description: "Learn how to handle errors gracefully with try-catch and throw custom errors.",
      sections: [
        {
          heading: "try, catch, finally",
          code: `// Basic try-catch
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}

// try-catch-finally
try {
  const data = JSON.parse(userInput);
  processData(data);
} catch (error) {
  console.error('Failed to parse:', error);
} finally {
  console.log('This always runs');
}

// Practical example: Safe JSON parsing
function safeJsonParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Invalid JSON:', error.message);
    return null;
  }
}

const data = safeJsonParse('{"name": "Alice"}');
console.log(data);

// Async error handling
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  } finally {
    console.log('Request completed');
  }
}

// Nested try-catch
try {
  try {
    throw new Error('Inner error');
  } catch (innerError) {
    console.log('Caught inner:', innerError.message);
    throw new Error('Outer error');
  }
} catch (outerError) {
  console.log('Caught outer:', outerError.message);
}`,
        },
        {
          heading: "Throwing Custom Errors",
          code: `// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message);
}

// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(statusCode) {
    super(\`Network error: \${statusCode}\`);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

// Using custom errors
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError('Name is required');
  }
  if (!user.email) {
    throw new ValidationError('Email is required');
  }
}

try {
  validateUser({ name: '' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation failed:', error.message);
  } else {
    console.log('Unexpected error:', error);
  }
}

// Error with data
class AppError extends Error {
  constructor(message, code, data) {
    super(message);
    this.code = code;
    this.data = data;
  }
}

function processPayment(amount) {
  if (amount < 0) {
    throw new AppError(
      'Invalid amount',
      'INVALID_AMOUNT',
      { amount, min: 0 }
    );
  }
}`,
        },
      ],
    },
    oop: {
      title: "OOP (Object Oriented Programming)",
      description: "Learn classes, constructors, inheritance, and encapsulation in JavaScript.",
      sections: [
        {
          heading: "Classes (class syntax)",
          code: `// ES6 Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  getInfo() {
    return \`\${this.name} is \${this.age} years old\`;
  }
}

// Create instance
const person = new Person('Alice', 25);
console.log(person.greet());    // "Hello, I'm Alice"
console.log(person.getInfo());  // "Alice is 25 years old"

// Getters and Setters
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
}

const user = new User('John', 'Doe');
console.log(user.fullName);   // "John Doe"
user.fullName = 'Jane Smith';
console.log(user.firstName);  // "Jane"

// Static methods
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159;
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.PI);        // 3.14159`,
        },
        {
          heading: "Constructor Functions (Old Way)",
          code: `// Constructor function (pre-ES6)
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    return 'Hello, I am ' + this.name;
  };
}

const person1 = new Person('Bob', 30);
console.log(person1.greet());

// Adding methods to prototype (more efficient)
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + ' makes a sound';
};

const dog = new Animal('Dog');
console.log(dog.speak()); // "Dog makes a sound"

// Check instance
console.log(person1 instanceof Person); // true
console.log(dog instanceof Animal);     // true`,
        },
        {
          heading: "Inheritance (extends)",
          code: `// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

// Child class - extends parent
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  // Override parent method
  speak() {
    return \`\${this.name} barks\`;
  }

  // New method
  fetch() {
    return \`\${this.name} is fetching\`;
  }
}

const dog = new Dog('Max', 'Golden Retriever');
console.log(dog.speak());  // "Max barks"
console.log(dog.fetch());  // "Max is fetching"
console.log(dog.breed);    // "Golden Retriever"

// Multiple levels of inheritance
class Puppy extends Dog {
  constructor(name, breed, age) {
    super(name, breed);
    this.age = age;
  }

  speak() {
    return \`\${this.name} yips\`;
  }
}

const puppy = new Puppy('Buddy', 'Labrador', 1);
console.log(puppy.speak()); // "Buddy yips"`,
        },
        {
          heading: "Encapsulation Basics (Private Fields)",
          code: `// Private fields with # (ES2022)
class BankAccount {
  #balance = 0;  // Private field

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }

  // Private method
  #calculateInterest() {
    return this.#balance * 0.05;
  }

  addInterest() {
    const interest = this.#calculateInterest();
    this.#balance += interest;
  }
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance);  // Error: Private field

// Old way: using closures for privacy
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount());  // 1
// console.log(counter.count);    // undefined (private)`,
        },
      ],
    },
    apis: {
      title: "Important Browser APIs",
      description: "Explore useful browser APIs like Geolocation and Clipboard for enhanced functionality.",
      sections: [
        {
          heading: "DOM & Events APIs (Already Covered)",
          text: "DOM API and Events API were covered in previous sections. They allow you to manipulate HTML elements and respond to user interactions.",
        },
        {
          heading: "Geolocation API",
          code: `// Check if geolocation is supported
if ('geolocation' in navigator) {
  console.log('Geolocation is available');
} else {
  console.log('Geolocation is not supported');
}

// Get current position (one-time)
navigator.geolocation.getCurrentPosition(
  // Success callback
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    console.log(\`Latitude: \${lat}\`);
    console.log(\`Longitude: \${lon}\`);
    console.log(\`Accuracy: \${accuracy} meters\`);
  },
  // Error callback
  (error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log('User denied geolocation');
        break;
      case error.POSITION_UNAVAILABLE:
        console.log('Position unavailable');
        break;
      case error.TIMEOUT:
        console.log('Request timeout');
        break;
    }
  },
  // Options
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
);

// Watch position (continuous updates)
const watchId = navigator.geolocation.watchPosition(
  (position) => {
    console.log('Position updated:', position.coords);
  },
  (error) => {
    console.error('Error:', error);
  }
);

// Stop watching
navigator.geolocation.clearWatch(watchId);

// Practical example: Show location on map
function showLocation() {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    const mapUrl = \`https://maps.google.com/?q=\${latitude},\${longitude}\`;
    window.open(mapUrl, '_blank');
  });
}`,
        },
        {
          heading: "Clipboard API (copy/paste)",
          code: `// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied!');
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}

// Usage
copyToClipboard('Hello, World!');

// Copy button example
const button = document.querySelector('#copy-btn');
const textInput = document.querySelector('#text-input');

button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textInput.value);
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 2000);
  } catch (error) {
    console.error('Copy failed:', error);
  }
});

// Read from clipboard
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted text:', text);
    return text;
  } catch (error) {
    console.error('Failed to read clipboard:', error);
  }
}

// Paste button example
const pasteBtn = document.querySelector('#paste-btn');
const output = document.querySelector('#output');

pasteBtn.addEventListener('click', async () => {
  const text = await pasteFromClipboard();
  if (text) {
    output.textContent = text;
  }
});

// Fallback for older browsers
function copyTextFallback(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    console.log('Text copied (fallback)');
  } catch (error) {
    console.error('Copy failed:', error);
  }

  document.body.removeChild(textarea);
}`,
        },
        {
          heading: "Other Useful APIs",
          code: `// Web Storage API (covered in Storage section)
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

// Console API (covered in Basics section)
console.log(), console.error(), console.warn(), console.table()

// History API - navigate browser history
history.back();     // Go back
history.forward();  // Go forward
history.go(-2);     // Go back 2 pages

// Notification API
if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Hello!', {
        body: 'This is a notification',
        icon: '/icon.png'
      });
    }
  });
}

// IntersectionObserver - detect element visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible');
    }
  });
});

observer.observe(document.querySelector('.element'));

// Page Visibility API
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});`,
        },
      ],
    },
    tools: {
      title: "Useful Tools & Package Managers",
      description: "Learn about developer tools, npm, and modern JavaScript build tools.",
      sections: [
        {
          heading: "Console & Debugging in Browser DevTools",
          text: "Browser DevTools are essential for debugging JavaScript code.",
          points: [
            "Console: View logs, errors, warnings and execute JavaScript",
            "Debugger: Set breakpoints, step through code, inspect variables",
            "Network: Monitor HTTP requests, responses, and timing",
            "Elements: Inspect and modify DOM and CSS in real-time",
            "Sources: View and debug source files",
            "Performance: Analyze runtime performance",
            "Application: View localStorage, sessionStorage, cookies, etc.",
          ],
          code: `// Console methods
console.log('Info message');
console.error('Error message');
console.warn('Warning message');
console.table([{a: 1, b: 2}, {a: 3, b: 4}]);
console.group('Group');
console.log('Item 1');
console.log('Item 2');
console.groupEnd();
console.time('timer');
// ... some code
console.timeEnd('timer');

// Debugger statement
function buggyFunction() {
  const x = 10;
  debugger; // Execution pauses here when DevTools is open
  const y = x * 2;
  return y;
}

// Breakpoints: Click line number in Sources tab

// Console commands:
// $0 - Currently selected element in Elements tab
// $_ - Result of last expression
// $$('selector') - querySelectorAll shorthand
// copy(object) - Copy to clipboard`,
        },
        {
          heading: "npm (Node Package Manager)",
          text: "npm is the package manager for JavaScript, allowing you to install and manage dependencies.",
          code: `// Initialize new project
npm init
npm init -y  // Skip questions

// Install packages
npm install package-name        // Save to dependencies
npm install package-name --save-dev  // Save to devDependencies
npm install -g package-name     // Install globally

// Install from package.json
npm install

// Uninstall packages
npm uninstall package-name

// Update packages
npm update package-name
npm update  // Update all

// Run scripts from package.json
npm run script-name
npm start   // Runs "start" script
npm test    // Runs "test" script

// Check outdated packages
npm outdated

// List installed packages
npm list
npm list --depth=0  // Top-level only

// package.json example
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^29.0.0"
  }
}`,
        },
        {
          heading: "Bundlers (Webpack, Vite, Parcel)",
          text: "Modern build tools bundle and optimize JavaScript, CSS, and assets for production.",
          code: `// Vite (fastest, recommended for new projects)
// Create new project
npm create vite@latest my-app
cd my-app
npm install
npm run dev      // Development server
npm run build    // Production build

// vite.config.js
export default {
  root: './src',
  build: {
    outDir: '../dist'
  }
};

// Webpack (most popular, highly configurable)
// Install
npm install webpack webpack-cli --save-dev

// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};

// Parcel (zero config)
npm install parcel --save-dev
npx parcel index.html  // Dev server
npx parcel build index.html  // Build

// Why use bundlers?
// - Module bundling (combine multiple files)
// - Code splitting (load code on demand)
// - Transpilation (ES6+ to ES5)
// - Minification (reduce file size)
// - Hot Module Replacement (update without refresh)
// - Asset optimization (images, fonts, etc.)`,
        },
      ],
    },
  };

  const currentContent = content[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">⚡ JavaScript Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master JavaScript from fundamentals to advanced concepts. Learn the language that powers the modern web.
            </p>
          </div>
        </div>
      </div>

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
                    ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-xl">{topic.icon}</span>
                <span className="text-sm">{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {section.heading}
                </h3>
                {section.text && (
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {section.text}
                  </p>
                )}
                {section.points && (
                  <ul className="space-y-2 mb-4">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-yellow-600 mt-1">▸</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.code && (
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Master JavaScript? 🚀
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Practice these concepts, build projects, and become proficient in the language that powers the web!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Javascript;
