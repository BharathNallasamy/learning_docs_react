import { useState } from "react";

const TypeScript = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "📘" },
    { id: "types", label: "Types", icon: "🔤" },
    { id: "interfaces", label: "Interfaces", icon: "📋" },
    { id: "generics", label: "Generics", icon: "🔧" },
    { id: "advanced", label: "Advanced Types", icon: "⚡" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to TypeScript</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why TypeScript?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Catch errors at compile time, not runtime</li>
                <li>Better IDE support with autocomplete and IntelliSense</li>
                <li>Improved code maintainability and refactoring</li>
                <li>Self-documenting code with type annotations</li>
                <li>Great for large-scale applications</li>
                <li>Popular in modern frameworks (Angular, React, Vue)</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Install TypeScript
npm install -g typescript

// Create tsconfig.json
tsc --init

// Compile TypeScript
tsc index.ts

// Your first TypeScript code
let message: string = "Hello TypeScript!";
let count: number = 42;
let isActive: boolean = true;

console.log(message);`}
              </pre>
            </div>
          </div>
        );

      case "types":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">TypeScript Types</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TypeScript provides a rich type system including primitive types, arrays, tuples, enums, and more.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Types</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Primitive types
let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple
let person: [string, number] = ["Alice", 25];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Red;

// Any (avoid when possible)
let dynamic: any = "can be anything";

// Unknown (safer than any)
let uncertain: unknown = 4;`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Union and Literal Types</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Union types
let id: string | number;
id = "abc123";  // OK
id = 12345;     // OK

function printId(id: string | number) {
  console.log(\`ID: \${id}\`);
}

// Literal types
let direction: "up" | "down" | "left" | "right";
direction = "up";  // OK
// direction = "forward";  // Error

type Status = "pending" | "success" | "error";
let status: Status = "pending";`}
              </pre>
            </div>
          </div>
        );

      case "interfaces":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Interfaces</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Interfaces define the structure of objects and can be used to ensure type safety.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Defining Interfaces</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
  readonly createdAt: Date;  // Readonly
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date()
};

// Function types in interface
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extending Interfaces</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: "Bob",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

// Multiple inheritance
interface Printable {
  print(): void;
}

interface Document extends Person, Printable {
  content: string;
}`}
              </pre>
            </div>
          </div>
        );

      case "generics":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Generics</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Generics allow you to write reusable, type-safe code that works with multiple types.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Generic Functions</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Generic function
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity<number>(42);

// Generic with arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]);  // number
const firstName = getFirstElement(["a", "b"]);    // string

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("hello", 42);  // [string, number]`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Generic Interfaces & Classes</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "hello" };
const numberBox: Box<number> = { value: 42 };

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);`}
              </pre>
            </div>
          </div>
        );

      case "advanced":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Advanced Types</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              TypeScript offers powerful advanced type features for complex scenarios.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Utility Types</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`interface User {
  id: number;
  name: string;
  email: string;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit - exclude specific properties
type UserWithoutId = Omit<User, "id">;

// Record - construct object type
type UserRoles = Record<string, string[]>;`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Type Guards & Narrowing</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Type guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());  // string
  } else {
    console.log(value.toFixed(2));     // number
  }
}

// Discriminated unions
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}`}
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">TypeScript Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              JavaScript that scales - Add type safety to your JavaScript applications
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === topic.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{topic.icon}</span>
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TypeScript;