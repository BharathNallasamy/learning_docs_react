import { useState } from "react";

const NodeJs = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🚀" },
    { id: "modules", label: "Modules & NPM", icon: "📦" },
    { id: "async", label: "Async Programming", icon: "⚡" },
    { id: "fs", label: "File System", icon: "📁" },
    { id: "http", label: "HTTP Server", icon: "🌐" },
    { id: "streams", label: "Streams & Buffers", icon: "🌊" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Introduction to Node.js
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server side.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Why Node.js?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Non-blocking I/O for high performance</li>
                <li>Single programming language (JavaScript) for full stack</li>
                <li>Large ecosystem with NPM packages</li>
                <li>Event-driven architecture</li>
                <li>Scalable for microservices</li>
                <li>Active community and support</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Your First Node.js Program
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// hello.js
console.log('Hello from Node.js!');

// Run with: node hello.js

// Using process object
console.log('Node version:', process.version);
console.log('Platform:', process.platform);

// Command line arguments
console.log('Arguments:', process.argv);`}
              </pre>
            </div>
          </div>
        );

      case "modules":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Modules & NPM
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Node.js uses CommonJS module system for organizing code. NPM (Node Package Manager) helps manage dependencies.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Creating and Using Modules
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// math.js - Creating a module
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

// app.js - Using the module
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(10, 4)); // 6

// ES6 modules (with "type": "module" in package.json)
export const multiply = (a, b) => a * b;
import { multiply } from './math.js';`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                NPM Package Management
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Initialize a new project
npm init -y

// Install packages
npm install express
npm install --save-dev nodemon

// Install globally
npm install -g typescript

// package.json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}`}
              </pre>
            </div>
          </div>
        );

      case "async":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Async Programming in Node.js
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Node.js is built on asynchronous, non-blocking I/O operations for better performance.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Callbacks
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const fs = require('fs');

// Callback pattern
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Error-first callback convention
function fetchUser(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('Invalid ID'), null);
    } else {
      callback(null, { id, name: 'John' });
    }
  }, 1000);
}

fetchUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log('User:', user);
});`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Promises & Async/Await
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const fs = require('fs').promises;

// Using Promises
fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function readFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log(data1, data2);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Promise.all for parallel operations
async function readMultipleFiles() {
  const [data1, data2, data3] = await Promise.all([
    fs.readFile('file1.txt', 'utf8'),
    fs.readFile('file2.txt', 'utf8'),
    fs.readFile('file3.txt', 'utf8')
  ]);
  return { data1, data2, data3 };
}`}
              </pre>
            </div>
          </div>
        );

      case "fs":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              File System Operations
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Node.js provides comprehensive file system APIs for reading, writing, and managing files.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reading and Writing Files
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const fs = require('fs').promises;

// Read file
async function readFile() {
  const data = await fs.readFile('input.txt', 'utf8');
  return data;
}

// Write file
async function writeFile() {
  await fs.writeFile('output.txt', 'Hello World!');
}

// Append to file
async function appendFile() {
  await fs.appendFile('log.txt', 'New log entry\\n');
}

// Copy file
async function copyFile() {
  await fs.copyFile('source.txt', 'destination.txt');
}

// Delete file
async function deleteFile() {
  await fs.unlink('temp.txt');
}

// Check if file exists
async function fileExists() {
  try {
    await fs.access('file.txt');
    return true;
  } catch {
    return false;
  }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Directory Operations
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const fs = require('fs').promises;
const path = require('path');

// Create directory
await fs.mkdir('new-folder', { recursive: true });

// Read directory
const files = await fs.readdir('folder');
console.log('Files:', files);

// Get file stats
const stats = await fs.stat('file.txt');
console.log('Size:', stats.size);
console.log('Is file:', stats.isFile());
console.log('Is directory:', stats.isDirectory());

// Watch for file changes
fs.watch('folder', (eventType, filename) => {
  console.log(\`\${filename} changed: \${eventType}\`);
});`}
              </pre>
            </div>
          </div>
        );

      case "http":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Creating HTTP Server
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Node.js has built-in HTTP module for creating web servers and handling requests.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Basic HTTP Server
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  // Send response
  res.end('<h1>Hello from Node.js Server!</h1>');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Handling Different Routes
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');

  if (path === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Home page' }));
  } else if (path === '/api/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
  } else if (path === '/api/users' && method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      const data = JSON.parse(body);
      res.statusCode = 201;
      res.end(JSON.stringify({ created: data }));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000);`}
              </pre>
            </div>
          </div>
        );

      case "streams":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Streams & Buffers
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Streams allow processing data piece by piece without loading everything into memory.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Working with Streams
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const fs = require('fs');

// Read stream
const readStream = fs.createReadStream('large-file.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk.length);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

// Write stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Line 1\\n');
writeStream.write('Line 2\\n');
writeStream.end('Final line');

// Pipe streams
const source = fs.createReadStream('input.txt');
const destination = fs.createWriteStream('output.txt');
source.pipe(destination);`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Buffers
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Create buffer
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(10); // 10 bytes

// Buffer operations
console.log(buf1.toString());        // 'Hello'
console.log(buf1.length);            // 5
console.log(buf1[0]);                // 72 (H in ASCII)

// Concatenate buffers
const buf3 = Buffer.concat([buf1, Buffer.from(' World')]);
console.log(buf3.toString());        // 'Hello World'

// Compare buffers
const isEqual = Buffer.compare(buf1, buf2);

// Convert to JSON
const json = buf1.toJSON();`}
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Node.js Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Build powerful backend applications with JavaScript using Node.js
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
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg transform scale-105"
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

export default NodeJs;