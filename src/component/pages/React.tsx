import { useState } from "react";

const ReactCourse = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🚀" },
    { id: "components", label: "Components & Props", icon: "🧩" },
    { id: "hooks", label: "React Hooks", icon: "🪝" },
    { id: "state", label: "State Management", icon: "🔄" },
    { id: "routing", label: "React Router", icon: "🛣️" },
    { id: "performance", label: "Performance", icon: "⚡" },
    { id: "ecosystem", label: "Ecosystem", icon: "🌐" },
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

      case "hooks":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">React Hooks</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hooks let you use state and other React features in function
              components. They were introduced in React 16.8.
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

      case "state":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              State Management
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As your React application grows, managing state becomes more complex.
              Learn different approaches to handle state in React applications.
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