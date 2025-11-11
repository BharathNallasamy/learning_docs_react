import { useState } from "react";

const ReactCourse = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🚀" },
    { id: "setup", label: "Project Setup", icon: "📦" },
    { id: "jsx", label: "JSX", icon: "✨" },
    { id: "components", label: "Components", icon: "🧩" },
    { id: "useState", label: "useState", icon: "🎛️" },
    { id: "lifecycle", label: "Lifecycle & useEffect", icon: "🔄" },
    { id: "events", label: "Event Handling", icon: "🖱️" },
    { id: "conditional", label: "Conditional Rendering", icon: "🔀" },
    { id: "lists", label: "Lists & Keys", icon: "📝" },
    { id: "forms", label: "Forms", icon: "📋" },
    { id: "hooks", label: "All Hooks", icon: "🪝" },
    { id: "context", label: "Context API", icon: "🌍" },
    { id: "routing", label: "React Router", icon: "🛣️" },
    { id: "api", label: "API Calls", icon: "🌐" },
    { id: "state", label: "State Libraries", icon: "📚" },
    { id: "styling", label: "Styling", icon: "🎨" },
    { id: "performance", label: "Performance", icon: "⚡" },
    { id: "testing", label: "Testing", icon: "🧪" },
    { id: "deployment", label: "Deployment", icon: "🚀" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Introduction to React
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              React is a JavaScript library for building user interfaces. It was
              developed by Facebook and is now maintained by Meta and a community
              of developers. React makes it painless to create interactive UIs.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Why Choose React?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Component-Based Architecture</li>
                <li>Virtual DOM for better performance</li>
                <li>Declarative views make your code predictable</li>
                <li>Large ecosystem and community support</li>
                <li>Learn once, write anywhere (Web, Mobile, Desktop)</li>
                <li>Backed by Meta (Facebook)</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Your First React Component
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                JSX - JavaScript XML
              </h3>
              <p className="text-gray-700 mb-3">
                JSX is a syntax extension for JavaScript that looks similar to HTML.
                It describes what the UI should look like.
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const element = <h1>Hello, world!</h1>;

// JSX with expressions
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

// JSX with attributes
const element = <img src={user.avatarUrl} alt={user.name} />;`}
              </pre>
            </div>
          </div>
        );

      case "setup":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Project Setup & Structure
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to set up a React project using modern tools and understand
              the project structure.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Creating React App with Vite (Recommended)
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Create a new React project with Vite
npm create vite@latest my-react-app -- --template react

# Navigate to project directory
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`}
              </pre>
              <p className="text-gray-700 mt-3">
                <strong>Why Vite?</strong> Lightning-fast HMR (Hot Module Replacement),
                faster build times, and modern development experience.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Create React App (CRA) - Legacy Method
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Create a new React project with CRA
npx create-react-app my-app

# Navigate to project directory
cd my-app

# Start development server
npm start

# Build for production
npm run build`}
              </pre>
              <p className="text-gray-700 mt-3">
                Note: CRA is no longer recommended by the React team. Use Vite or Next.js instead.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Typical React Project Structure
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`my-react-app/
├── node_modules/          # Dependencies
├── public/                # Static assets
│   ├── index.html
│   └── favicon.ico
├── src/                   # Source code
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   └── Card.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/            # Custom hooks
│   │   └── useAuth.js
│   ├── context/          # Context providers
│   │   └── AuthContext.jsx
│   ├── utils/            # Utility functions
│   │   └── helpers.js
│   ├── services/         # API calls
│   │   └── api.js
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json          # Project configuration
└── vite.config.js        # Vite configuration`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Understanding package.json
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`{
  "name": "my-react-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",              // Start dev server
    "build": "vite build",       // Build for production
    "preview": "vite preview"    // Preview production build
  },
  "dependencies": {
    "react": "^18.3.1",          // React library
    "react-dom": "^18.3.1"       // React DOM renderer
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}`}
              </pre>
            </div>
          </div>
        );

      case "jsx":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              JSX - JavaScript XML
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              JSX is a syntax extension for JavaScript that looks similar to HTML.
              It allows you to write HTML-like code in your JavaScript files.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                JSX Rules
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Must return a single parent element</li>
                <li>Use className instead of class</li>
                <li>Use camelCase for attributes (onClick, onChange)</li>
                <li>Close all tags (self-closing for empty elements)</li>
                <li>Use curly braces for JavaScript expressions</li>
              </ul>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// ❌ Wrong - Multiple parent elements
function Wrong() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

// ✅ Correct - Single parent element
function Correct() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

// ✅ Using Fragment (no extra DOM node)
function WithFragment() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Embedding JavaScript Expressions
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function App() {
  const name = "Alice";
  const age = 25;
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* Variables */}
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>

      {/* Expressions */}
      <p>Next year you'll be {age + 1}</p>

      {/* Function calls */}
      <p>{name.toUpperCase()}</p>

      {/* Ternary operator */}
      <p>{isLoggedIn ? 'Welcome back!' : 'Please login'}</p>

      {/* Logical AND */}
      {isLoggedIn && <button>Logout</button>}

      {/* Arrays */}
      <ul>
        {numbers.map(num => <li key={num}>{num * 2}</li>)}
      </ul>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                JSX Attributes & Styling
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function StyledComponent() {
  const imageUrl = "https://example.com/image.jpg";
  const altText = "Description";

  // Inline styles as JavaScript objects
  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '16px'
  };

  return (
    <div>
      {/* className instead of class */}
      <div className="container">

        {/* Inline styles */}
        <div style={boxStyle}>
          Styled box
        </div>

        {/* Dynamic attributes */}
        <img src={imageUrl} alt={altText} />

        {/* Boolean attributes */}
        <input type="checkbox" checked disabled />

        {/* Self-closing tags */}
        <br />
        <hr />
        <input />
      </div>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                JSX Comments
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function ComponentWithComments() {
  return (
    <div>
      {/* This is a JSX comment */}

      {/*
        Multi-line
        JSX comment
      */}

      <h1>Hello World</h1>

      {
        // Single line JavaScript comment
        // (inside expression braces)
      }
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "components":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Components & Props
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Components let you split the UI into independent, reusable pieces.
              Think of them as JavaScript functions that accept inputs (props)
              and return React elements.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Function Components
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Simple function component
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Arrow function component
const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

// Using components
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Button onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Props - Component Communication
              </h3>
              <p className="text-gray-700 mb-3">
                Props are read-only and flow down from parent to child components.
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Parent component
function UserProfile() {
  const user = {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: '/avatar.jpg'
  };

  return <UserCard user={user} isOnline={true} />;
}

// Child component
function UserCard({ user, isOnline }) {
  return (
    <div className="card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {isOnline && <span className="status-online">Online</span>}
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Component Composition
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Container component
function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

// Usage
function Dashboard() {
  return (
    <div>
      <Card title="Welcome">
        <p>Welcome to your dashboard!</p>
      </Card>
      <Card title="Stats">
        <ul>
          <li>Users: 1,234</li>
          <li>Revenue: $45,678</li>
        </ul>
      </Card>
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "useState":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              useState Hook - State Management
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              useState is the most fundamental React Hook that lets you add state
              to functional components.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Basic useState Usage
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useState } from 'react';

function Counter() {
  // Syntax: const [state, setState] = useState(initialValue);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Different data types
function StateExamples() {
  const [name, setName] = useState('');           // String
  const [age, setAge] = useState(0);              // Number
  const [isActive, setIsActive] = useState(false); // Boolean
  const [items, setItems] = useState([]);         // Array
  const [user, setUser] = useState({});           // Object

  return <div>State with different types</div>;
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                State vs Props
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="p-3 font-semibold">Feature</th>
                      <th className="p-3 font-semibold">State</th>
                      <th className="p-3 font-semibold">Props</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Definition</td>
                      <td className="p-3">Internal component data</td>
                      <td className="p-3">Data passed from parent</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Mutable</td>
                      <td className="p-3">Yes (via setState)</td>
                      <td className="p-3">No (read-only)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Ownership</td>
                      <td className="p-3">Owned by component</td>
                      <td className="p-3">Owned by parent</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-medium">Changes</td>
                      <td className="p-3">Can be changed inside component</td>
                      <td className="p-3">Cannot be changed by component</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Updating State Correctly
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function UpdateStateExamples() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Alice', age: 25 });
  const [items, setItems] = useState([1, 2, 3]);

  // ✅ Updating primitive values
  const increment = () => {
    setCount(count + 1);
  };

  // ✅ Functional update (safer for async operations)
  const incrementSafe = () => {
    setCount(prevCount => prevCount + 1);
  };

  // ✅ Updating objects (must create new object)
  const updateUser = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  // ❌ Wrong - mutating state directly
  const wrongUpdate = () => {
    user.age = 26; // Don't do this!
    setUser(user);
  };

  // ✅ Updating arrays
  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return <div>State updates</div>;
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multiple State Variables
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function UserForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // OR use a single state object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 0
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <form>
      <input
        value={formData.firstName}
        onChange={(e) => handleChange('firstName', e.target.value)}
      />
      {/* More inputs... */}
    </form>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "lifecycle":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Component Lifecycle & useEffect
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Understanding component lifecycle and using useEffect to handle side effects
              in your React components.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Component Lifecycle Phases
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="p-3 bg-white rounded">
                  <strong className="text-blue-600">1. Mounting:</strong> Component is created and inserted into DOM
                </div>
                <div className="p-3 bg-white rounded">
                  <strong className="text-green-600">2. Updating:</strong> Component re-renders due to state/props changes
                </div>
                <div className="p-3 bg-white rounded">
                  <strong className="text-red-600">3. Unmounting:</strong> Component is removed from DOM
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                useEffect - Run on Mount
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  // Runs once when component mounts (empty dependency array)
  useEffect(() => {
    console.log('Component mounted!');

    // Fetch user data
    fetch('https://api.example.com/user/1')
      .then(res => res.json())
      .then(data => setUser(data));

    // Optional cleanup function
    return () => {
      console.log('Component will unmount!');
    };
  }, []); // Empty array = run once on mount

  if (!user) return <div>Loading...</div>;

  return <div>Welcome, {user.name}!</div>;
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                useEffect - Run on State Change
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Runs when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      console.log('Searching for:', searchTerm);

      fetch(\`https://api.example.com/search?q=\${searchTerm}\`)
        .then(res => res.json())
        .then(data => setResults(data));
    }
  }, [searchTerm]); // Runs when searchTerm changes

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                useEffect - Cleanup Function
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setup: Start interval
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup: Clear interval when component unmounts
    return () => {
      clearInterval(interval);
      console.log('Timer cleaned up!');
    };
  }, []);

  return <div>Seconds: {seconds}</div>;
}

// Common cleanup scenarios:
// - Clear intervals/timeouts
// - Cancel API requests
// - Remove event listeners
// - Close WebSocket connections`}
              </pre>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Common useEffect Patterns
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// 1. Run once on mount
useEffect(() => {
  // Initialize data, fetch, setup listeners
}, []);

// 2. Run on every render (usually avoid this)
useEffect(() => {
  // Runs after every render
});

// 3. Run when specific values change
useEffect(() => {
  // Runs when value1 or value2 changes
}, [value1, value2]);

// 4. Conditional effect
useEffect(() => {
  if (condition) {
    // Do something
  }
}, [condition]);

// 5. Async operations
useEffect(() => {
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, [url]);`}
              </pre>
            </div>
          </div>
        );

      case "events":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Event Handling in React
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to handle user interactions like clicks, form submissions,
              keyboard inputs, and more in React.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Common Event Handlers
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function EventExamples() {
  // onClick - Button clicks
  const handleClick = () => {
    console.log('Button clicked!');
  };

  // onChange - Input changes
  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
  };

  // onSubmit - Form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted!');
  };

  // onKeyDown - Keyboard events
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed!');
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <input onChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      <input onKeyDown={handleKeyDown} />
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Passing Arguments to Event Handlers
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' }
  ]);

  // Method 1: Arrow function in JSX
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}

          {/* Pass argument using arrow function */}
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>

          {/* Alternative: bind method */}
          <button onClick={deleteTodo.bind(null, todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Preventing Default Behavior
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function PreventDefaultExamples() {
  // Prevent form submission reload
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted without page reload');
  };

  // Prevent link navigation
  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log('Link clicked but navigation prevented');
  };

  // Stop event propagation
  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (e) => {
    e.stopPropagation(); // Prevent parent from receiving event
    console.log('Child clicked');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>

      <a href="https://example.com" onClick={handleLinkClick}>
        Click me (won't navigate)
      </a>

      <div onClick={handleParentClick} style={{ padding: '20px', background: 'lightblue' }}>
        Parent
        <button onClick={handleChildClick}>
          Child (click won't trigger parent)
        </button>
      </div>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                All React Event Types
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Mouse Events:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>onClick</li>
                    <li>onDoubleClick</li>
                    <li>onMouseEnter</li>
                    <li>onMouseLeave</li>
                    <li>onMouseMove</li>
                    <li>onMouseDown</li>
                    <li>onMouseUp</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Keyboard Events:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>onKeyDown</li>
                    <li>onKeyUp</li>
                    <li>onKeyPress</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Form Events:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>onChange</li>
                    <li>onSubmit</li>
                    <li>onFocus</li>
                    <li>onBlur</li>
                    <li>onInput</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Other Events:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>onScroll</li>
                    <li>onCopy</li>
                    <li>onPaste</li>
                    <li>onDrag</li>
                    <li>onDrop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "conditional":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Conditional Rendering
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn different ways to conditionally render components and elements
              based on state or props.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                If/Else Statements
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function Greeting({ isLoggedIn, username }) {
  // Method 1: If/Else with early return
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  }
  return <h1>Please log in.</h1>;

  // Method 2: Variable assignment
  let greeting;
  if (isLoggedIn) {
    greeting = <h1>Welcome back, {username}!</h1>;
  } else {
    greeting = <h1>Please log in.</h1>;
  }
  return greeting;
}

// Multiple conditions
function UserStatus({ role }) {
  if (role === 'admin') {
    return <div>Admin Dashboard</div>;
  } else if (role === 'user') {
    return <div>User Dashboard</div>;
  } else {
    return <div>Guest View</div>;
  }
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ternary Operator (Most Common)
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <div>
      {/* Simple ternary */}
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}

      {/* Inline text */}
      <p>Status: {isLoggedIn ? 'Online' : 'Offline'}</p>

      {/* Nested ternary (use sparingly) */}
      {isLoggedIn ? (
        hasNotifications ? (
          <div>You have new notifications</div>
        ) : (
          <div>No new notifications</div>
        )
      ) : (
        <div>Please log in to see notifications</div>
      )}

      {/* With expressions */}
      <span className={isLoggedIn ? 'active' : 'inactive'}>
        User Status
      </span>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Logical AND (&&) Operator
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function Notifications({ count, messages }) {
  return (
    <div>
      {/* Show element only if condition is true */}
      {count > 0 && <div>You have {count} notifications</div>}

      {/* Multiple conditions */}
      {count > 0 && messages.length > 0 && (
        <ul>
          {messages.map(msg => <li key={msg.id}>{msg.text}</li>)}
        </ul>
      )}

      {/* ⚠️ Be careful with falsy values */}
      {count && <div>Count: {count}</div>}
      {/* If count is 0, it will render "0" */}

      {/* ✅ Better: explicit comparison */}
      {count > 0 && <div>Count: {count}</div>}
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Rendering Fallback UIs
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function DataDisplay() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="error-message">
        <h2>Error!</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  // Empty data state
  if (!data || data.length === 0) {
    return (
      <div className="empty-state">
        <p>No data available</p>
      </div>
    );
  }

  // Success state - render data
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Switch Case Pattern
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function StatusDisplay({ status }) {
  const renderStatus = () => {
    switch (status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div className="success">Success!</div>;
      case 'error':
        return <div className="error">Error occurred</div>;
      case 'idle':
        return <div>Ready to start</div>;
      default:
        return <div>Unknown status</div>;
    }
  };

  return <div>{renderStatus()}</div>;
}

// Alternative: Object mapping
function StatusDisplay({ status }) {
  const statusComponents = {
    loading: <div>Loading...</div>,
    success: <div className="success">Success!</div>,
    error: <div className="error">Error occurred</div>,
    idle: <div>Ready to start</div>
  };

  return statusComponents[status] || <div>Unknown status</div>;
}`}
              </pre>
            </div>
          </div>
        );

      case "lists":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Lists & Keys
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to render lists of data in React and why keys are essential
              for performance and correctness.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Rendering Lists with map()
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function TodoList() {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy app', completed: true }
  ];

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Simple array
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map(number => (
        <li key={number}>{number * 2}</li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Why Keys are Needed
              </h3>
              <div className="space-y-3 text-gray-700 mb-4">
                <p><strong>Keys help React identify which items have changed, been added, or removed.</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Improves performance by minimizing DOM operations</li>
                  <li>Maintains component state correctly</li>
                  <li>Prevents rendering bugs in dynamic lists</li>
                  <li>Essential for animations and transitions</li>
                </ul>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// ❌ Without keys (React will warn you)
{users.map(user => (
  <UserCard user={user} />
))}

// ✅ With keys
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}

// ❌ Bad: Using array index as key (only if list never changes)
{users.map((user, index) => (
  <UserCard key={index} user={user} />
))}

// When to use index as key:
// 1. List is static (never reordered/filtered)
// 2. Items don't have stable IDs
// 3. List is never modified`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Unique Key Rules
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function UserList() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  return (
    <div>
      {/* ✅ Good: Unique, stable ID */}
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}

      {/* ✅ Good: Composite key when no single unique field */}
      {users.map(user => (
        <div key={\`\${user.name}-\${user.email}\`}>
          {user.name}
        </div>
      ))}

      {/* ✅ Good: Generated unique ID */}
      {users.map(user => (
        <div key={crypto.randomUUID()}>
          {user.name}
        </div>
      ))}

      {/* ❌ Bad: Random key changes every render */}
      {users.map(user => (
        <div key={Math.random()}>
          {user.name}
        </div>
      ))}
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced List Patterns
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function AdvancedLists() {
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Book', category: 'Books', price: 19 },
    { id: 3, name: 'Phone', category: 'Electronics', price: 699 }
  ];

  // Filtering lists
  const electronics = products.filter(p => p.category === 'Electronics');

  // Nested lists
  const categories = {
    'Electronics': [{ id: 1, name: 'Laptop' }],
    'Books': [{ id: 2, name: 'Book' }]
  };

  return (
    <div>
      {/* Filtered list */}
      <h2>Electronics</h2>
      {electronics.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}

      {/* Nested lists */}
      {Object.entries(categories).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Sorted list */}
      {[...products]
        .sort((a, b) => a.price - b.price)
        .map(product => (
          <div key={product.id}>
            {product.name} - \${product.price}
          </div>
        ))}

      {/* Empty list handling */}
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map(product => (
          <div key={product.id}>{product.name}</div>
        ))
      )}
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "forms":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Forms & Controlled Inputs
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to handle forms in React, including controlled components,
              form validation, and multi-input forms.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Controlled vs Uncontrolled Components
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// ✅ Controlled Component (Recommended)
// React state controls the input value
function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Uncontrolled Component
// DOM controls the input value
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} defaultValue="initial" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Handling Different Input Types
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function FormInputs() {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    textarea: '',
    select: '',
    checkbox: false,
    radio: '',
    number: 0,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <form>
      {/* Text input */}
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Enter text"
      />

      {/* Email input */}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      {/* Password input */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Textarea */}
      <textarea
        name="textarea"
        value={formData.textarea}
        onChange={handleChange}
      />

      {/* Select dropdown */}
      <select
        name="select"
        value={formData.select}
        onChange={handleChange}
      >
        <option value="">Choose...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>

      {/* Checkbox */}
      <label>
        <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
        />
        Accept terms
      </label>

      {/* Radio buttons */}
      <label>
        <input
          type="radio"
          name="radio"
          value="option1"
          checked={formData.radio === 'option1'}
          onChange={handleChange}
        />
        Option 1
      </label>

      {/* Number input */}
      <input
        type="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
      />

      {/* Date input */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
    </form>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Complete Form Example with Validation
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit form data
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
        // Reset form
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Register'}
      </button>
    </form>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "hooks":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">All React Hooks</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Comprehensive guide to all React Hooks - both built-in and custom hooks.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                useState Hook
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

// Multiple state variables
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                useEffect Hook
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}

// Effect with cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Other Common Hooks
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useContext, useRef, useMemo, useCallback } from 'react';

// useContext - Access context values
const theme = useContext(ThemeContext);

// useRef - Access DOM elements or store mutable values
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

// useMemo - Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback - Memoize callback functions
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`}
              </pre>
            </div>
          </div>
        );

      case "context":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Context API - Avoiding Prop Drilling
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Context API allows you to pass data through the component tree without
              having to pass props down manually at every level.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Creating and Using Context
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext();

// 2. Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom Hook to use Context
function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// 4. Usage in App
function App() {
  return (
    <UserProvider>
      <Header />
      <Dashboard />
    </UserProvider>
  );
}

// 5. Consuming Context
function Header() {
  const { user, logout } = useUser();

  return (
    <header>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please login</span>
      )}
    </header>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Problem: Prop Drilling
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// ❌ Without Context (Prop Drilling)
function App() {
  const [user, setUser] = useState(null);

  return <ParentComponent user={user} setUser={setUser} />;
}

function ParentComponent({ user, setUser }) {
  return <ChildComponent user={user} setUser={setUser} />;
}

function ChildComponent({ user, setUser }) {
  return <GrandchildComponent user={user} setUser={setUser} />;
}

function GrandchildComponent({ user, setUser }) {
  // Finally use the props here
  return <div>{user?.name}</div>;
}

// ✅ With Context (Clean)
function App() {
  return (
    <UserProvider>
      <ParentComponent />
    </UserProvider>
  );
}

function ParentComponent() {
  return <ChildComponent />;
}

function ChildComponent() {
  return <GrandchildComponent />;
}

function GrandchildComponent() {
  const { user } = useUser(); // Direct access!
  return <div>{user?.name}</div>;
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multiple Contexts
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Language Context
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Using Multiple Contexts
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <MainApp />
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

// Consuming Multiple Contexts
function Component() {
  const { user } = useUser();
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return <div className={theme}>Hello in {language}</div>;
}`}
              </pre>
            </div>
          </div>
        );

      case "api":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              API Calls & Data Fetching
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to fetch data from APIs using fetch, axios, and handle
              loading, error, and success states.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Using Fetch API
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GET request
    fetch('https://api.example.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

// POST request with Fetch
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${token}\`
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) throw new Error('Failed to create user');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Using Axios
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import axios from 'axios';

// Create axios instance with defaults
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (userData) => {
    try {
      const response = await api.post('/users', userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const response = await api.put(\`/users/\${id}\`, userData);
      setUsers(users.map(u => u.id === id ? response.data : u));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(\`/users/\${id}\`);
      setUsers(users.filter(u => u.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Custom useFetch Hook
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Custom Hook for data fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, {
          signal: abortController.signal
        });

        if (!response.ok) throw new Error('Network response was not ok');

        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Cleanup: cancel request if component unmounts
    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(
    \`https://api.example.com/users/\${userId}\`
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "state":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              State Management Libraries
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For large applications, you might need dedicated state management libraries.
              Learn about the most popular options.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Context API
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { createContext, useContext, useState } from 'react';

// Create context
const UserContext = createContext();

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to use context
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

// Usage in component
function Profile() {
  const { user, logout } = useUser();

  return (
    <div>
      <h2>{user?.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                useReducer Hook
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(
    counterReducer,
    { count: 0 }
  );

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Popular State Management Libraries
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Redux:</strong> Predictable state container with time-travel debugging</li>
                <li><strong>Zustand:</strong> Lightweight and fast state management</li>
                <li><strong>Jotai:</strong> Primitive and flexible state management</li>
                <li><strong>Recoil:</strong> Facebook's experimental state management</li>
                <li><strong>MobX:</strong> Simple, scalable state management with observables</li>
                <li><strong>React Query:</strong> Powerful async state management for server data</li>
              </ul>
            </div>
          </div>
        );

      case "routing":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">React Router</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              React Router is the standard routing library for React. It enables
              navigation between views in a React application.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Basic Setup
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dynamic Routes & Parameters
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { useParams, useNavigate } from 'react-router-dom';

// Route definition
<Route path="/users/:userId" element={<UserProfile />} />
<Route path="/posts/:postId/comments/:commentId"
       element={<Comment />} />

// Using params in component
function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Profile: {userId}</h1>
      <button onClick={() => navigate('/')}>
        Go Home
      </button>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Nested Routes & Protected Routes
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { Navigate, Outlet } from 'react-router-dom';

// Protected route component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Nested routes
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// Layout component with Outlet
function DashboardLayout() {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "performance":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Performance Optimization
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn techniques to make your React applications faster and more
              efficient.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                React.memo
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { memo } from 'react';

// Without memo - re-renders on every parent update
function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
}

// With memo - only re-renders when props change
const MemoizedComponent = memo(function ExpensiveComponent({ data }) {
  console.log('Rendering MemoizedComponent');
  return <div>{data}</div>;
});

// Custom comparison function
const MemoizedWithComparison = memo(
  ExpensiveComponent,
  (prevProps, nextProps) => {
    // Return true if props are equal (skip render)
    return prevProps.data.id === nextProps.data.id;
  }
);`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Code Splitting & Lazy Loading
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Profile = lazy(() => import('./Profile'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}

// Custom loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="spinner">Loading...</div>
  </div>
);

<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Performance Best Practices
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use React.memo for expensive pure components</li>
                <li>Implement useMemo and useCallback for expensive calculations</li>
                <li>Use lazy loading and code splitting for large components</li>
                <li>Avoid inline functions and objects in render</li>
                <li>Use virtualization for long lists (react-window, react-virtualized)</li>
                <li>Optimize images and assets</li>
                <li>Use React DevTools Profiler to identify bottlenecks</li>
                <li>Implement proper key props in lists</li>
              </ul>
            </div>
          </div>
        );

      case "ecosystem":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              React Ecosystem
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore the rich ecosystem of libraries and tools that complement React.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Popular React Frameworks
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-blue-600">Next.js:</strong> Full-stack React framework with SSR, SSG, and API routes
                </li>
                <li>
                  <strong className="text-blue-600">Remix:</strong> Full-stack web framework focused on web standards
                </li>
                <li>
                  <strong className="text-blue-600">Gatsby:</strong> React-based static site generator
                </li>
                <li>
                  <strong className="text-blue-600">Vite:</strong> Next-generation frontend tooling
                </li>
                <li>
                  <strong className="text-blue-600">Create React App:</strong> Official React starter template
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                UI Component Libraries
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-green-600">Material-UI (MUI):</strong> React components implementing Material Design
                </li>
                <li>
                  <strong className="text-green-600">Ant Design:</strong> Enterprise-level UI design system
                </li>
                <li>
                  <strong className="text-green-600">Chakra UI:</strong> Simple, modular component library
                </li>
                <li>
                  <strong className="text-green-600">shadcn/ui:</strong> Beautifully designed components built with Radix UI
                </li>
                <li>
                  <strong className="text-green-600">Tailwind CSS:</strong> Utility-first CSS framework
                </li>
                <li>
                  <strong className="text-green-600">React Bootstrap:</strong> Bootstrap components for React
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Essential Tools & Libraries
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">State Management:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Redux / Redux Toolkit</li>
                    <li>Zustand</li>
                    <li>Jotai</li>
                    <li>Recoil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Fetching:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>React Query (TanStack Query)</li>
                    <li>SWR</li>
                    <li>Apollo Client (GraphQL)</li>
                    <li>Axios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Forms:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>React Hook Form</li>
                    <li>Formik</li>
                    <li>React Final Form</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Testing:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Jest</li>
                    <li>React Testing Library</li>
                    <li>Vitest</li>
                    <li>Cypress / Playwright</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "styling":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Styling in React
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn different approaches to styling React components, from CSS modules
              to CSS-in-JS solutions.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                CSS Modules
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`/* Button.module.css */
.button {
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children }) {
  return (
    <button className={\`\${styles.button} \${styles[variant]}\`}>
      {children}
    </button>
  );
}

// Usage
<Button variant="primary">Click Me</Button>
<Button variant="secondary">Cancel</Button>`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Styled Components
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import styled from 'styled-components';

// Create styled components
const Button = styled.button\`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: \${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

const Card = styled.div\`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: white;
\`;

const Title = styled.h2\`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
\`;

// Usage
function App() {
  return (
    <Card>
      <Title>Hello World</Title>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </Card>
  );
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tailwind CSS
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Installation
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Component with Tailwind
function Card({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Read More
      </button>
    </div>
  );
}

// Conditional classes with clsx
import clsx from 'clsx';

function Button({ variant, size, children }) {
  return (
    <button
      className={clsx(
        'font-semibold rounded transition-colors',
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-500 text-white': variant === 'secondary',
          'px-2 py-1 text-sm': size === 'small',
          'px-4 py-2': size === 'medium',
          'px-6 py-3 text-lg': size === 'large'
        }
      )}
    >
      {children}
    </button>
  );
}`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inline Styles & CSS-in-JS
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Inline styles
function InlineStyleExample() {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle}>Click Me</button>

      {/* Inline style object */}
      <div style={{
        background: 'linear-gradient(to right, #667eea, #764ba2)',
        padding: '40px',
        borderRadius: '8px'
      }}>
        Gradient Background
      </div>
    </div>
  );
}

// Emotion (CSS-in-JS)
import { css } from '@emotion/react';

function EmotionExample() {
  return (
    <div
      css={css\`
        padding: 20px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: white;
        }
      \`}
    >
      Hover to change color.
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "testing":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Testing React Applications
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to write tests for your React components using Jest and
              React Testing Library.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Jest Setup & Basic Tests
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Installation
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

// Component to test
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Greeting.test.jsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders greeting with name', () => {
    render(<Greeting name="Alice" />);

    // Find element by text
    const heading = screen.getByText('Hello, Alice!');

    // Assert it's in the document
    expect(heading).toBeInTheDocument();
  });

  test('renders greeting with different name', () => {
    render(<Greeting name="Bob" />);
    expect(screen.getByText('Hello, Bob!')).toBeInTheDocument();
  });
});

// Run tests
npm test`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Testing User Interactions
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Counter component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Counter.test.jsx
describe('Counter Component', () => {
  test('increments count when button is clicked', () => {
    render(<Counter />);

    // Initial state
    expect(screen.getByText('Count: 0')).toBeInTheDocument();

    // Click increment button
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);

    // Check updated state
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('resets count when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    // Increment a few times
    const incrementBtn = screen.getByText('Increment');
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);

    expect(screen.getByText('Count: 3')).toBeInTheDocument();

    // Reset
    const resetBtn = screen.getByText('Reset');
    await user.click(resetBtn);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Testing Async Operations
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { render, screen, waitFor } from '@testing-library/react';

// Component that fetches data
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}

// UserProfile.test.jsx
describe('UserProfile Component', () => {
  beforeEach(() => {
    // Mock fetch
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('displays loading state initially', () => {
    global.fetch.mockResolvedValue({
      json: async () => ({ name: 'Alice' })
    });

    render(<UserProfile userId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays user name after loading', async () => {
    const mockUser = { name: 'Alice', id: 1 };

    global.fetch.mockResolvedValue({
      json: async () => mockUser
    });

    render(<UserProfile userId={1} />);

    // Wait for async operation
    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    global.fetch.mockRejectedValue(new Error('Failed to fetch'));

    render(<UserProfile userId={1} />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });
  });
});`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Common Testing Patterns
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Query Methods
screen.getByText('Hello')          // Throws error if not found
screen.queryByText('Hello')        // Returns null if not found
screen.findByText('Hello')         // Async, waits for element

// Multiple elements
screen.getAllByRole('button')
screen.queryAllByRole('button')
screen.findAllByRole('button')

// Query by different attributes
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText('Email')
screen.getByPlaceholderText('Enter email')
screen.getByTestId('custom-element')
screen.getByAltText('Profile picture')

// User interactions
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
await user.click(button);
await user.type(input, 'hello');
await user.selectOptions(select, 'option1');
await user.upload(fileInput, file);

// Assertions
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toHaveTextContent('Hello');
expect(element).toHaveAttribute('disabled');
expect(element).toHaveClass('active');
expect(element).toHaveStyle({ color: 'red' });`}
              </pre>
            </div>
          </div>
        );

      case "deployment":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Build & Deployment
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn how to build your React application for production and deploy
              it to various platforms.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Production Build
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Build with Vite
npm run build

# Build with Create React App
npm run build

# Preview production build locally
npm run preview  # Vite
npx serve -s build  # CRA

# Build optimizations:
# - Minification of code
# - Tree shaking (removing unused code)
# - Code splitting
# - Asset optimization
# - Environment variables

# Build output (Vite)
dist/
├── assets/
│   ├── index-abc123.js
│   ├── index-xyz456.css
│   └── logo-def789.svg
└── index.html

# Build output (CRA)
build/
├── static/
│   ├── js/
│   ├── css/
│   └── media/
└── index.html`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Deploy to Vercel
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod

# Or use GitHub integration:
# 1. Push code to GitHub
# 2. Connect repo to Vercel
# 3. Auto-deploy on every push

# vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Deploy to Netlify
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod

# Or use Git integration:
# 1. Connect GitHub repo to Netlify
# 2. Configure build settings
# 3. Auto-deploy on git push

# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"`}
              </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Deploy to GitHub Pages
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json
{
  "homepage": "https://username.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy

# For Vite, update vite.config.js
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()]
})

# Steps:
# 1. Build the project
# 2. Push dist folder to gh-pages branch
# 3. Enable GitHub Pages in repository settings
# 4. Select gh-pages branch as source`}
              </pre>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Environment Variables
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Vite - .env file
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-api-key-here

# Access in code
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

# CRA - .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key-here

# Access in code
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

# Different environments
.env                 # Loaded in all cases
.env.local          # Loaded in all cases, ignored by git
.env.development    # Loaded in development
.env.production     # Loaded in production

# Important:
# - Never commit .env.local to git
# - Add to .gitignore
# - Use platform-specific env vars for secrets
# - Prefix variables (VITE_ or REACT_APP_)`}
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">React.js Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master React and build modern, interactive web applications with
              the most popular JavaScript library.
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
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105"
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

export default ReactCourse;