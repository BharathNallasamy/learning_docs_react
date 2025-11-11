import { useState } from "react";

const ExpressJs = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🚂" },
    { id: "routing", label: "Routing", icon: "🛣️" },
    { id: "middleware", label: "Middleware", icon: "⚙️" },
    { id: "rest", label: "REST APIs", icon: "🔌" },
    { id: "validation", label: "Validation", icon: "✅" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to Express.js</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Express.js is a fast, minimalist web framework for Node.js that simplifies building web applications and APIs.
            </p>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Express Server</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
              </pre>
            </div>
          </div>
        );
      case "routing":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Express Routing</h2>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// HTTP methods
app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, updated: true });
});

app.delete('/users/:id', (req, res) => {
  res.status(204).send();
});

// Route parameters
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

// Query parameters
app.get('/search', (req, res) => {
  const { q, limit } = req.query;
  res.json({ query: q, limit });
});`}
              </pre>
            </div>
          </div>
        );
      case "middleware":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Middleware</h2>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Application-level middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router middleware');
  next();
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Third-party middleware
const cors = require('cors');
const morgan = require('morgan');
app.use(cors());
app.use(morgan('dev'));`}
              </pre>
            </div>
          </div>
        );
      case "rest":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Building REST APIs</h2>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const express = require('express');
const router = express.Router();

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single user
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;`}
              </pre>
            </div>
          </div>
        );
      case "validation":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Input Validation</h2>
            <div className="bg-gray-50 border-l-4 border-gray-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`const { body, validationResult } = require('express-validator');

app.post('/users',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('name').trim().notEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process valid data
    res.json({ message: 'User created' });
  }
);`}
              </pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="bg-gradient-to-r from-gray-700 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Express.js Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Fast, unopinionated, minimalist web framework for Node.js
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
                    ? "bg-gradient-to-r from-gray-700 to-slate-700 text-white shadow-lg transform scale-105"
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

export default ExpressJs;