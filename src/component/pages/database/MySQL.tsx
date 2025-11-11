import { useState } from "react";

const MySQL = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🐬" },
    { id: "basics", label: "SQL Basics", icon: "📝" },
    { id: "queries", label: "Advanced Queries", icon: "🔍" },
    { id: "joins", label: "Joins", icon: "🔗" },
    { id: "indexes", label: "Indexes & Performance", icon: "⚡" },
    { id: "transactions", label: "Transactions", icon: "🔄" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to MySQL</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              MySQL is the world's most popular open-source relational database management system. It's widely used for web applications and is a central component of the LAMP stack.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why MySQL?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Open-source and free to use</li>
                <li>High performance and reliability</li>
                <li>Easy to use and learn</li>
                <li>Excellent community support</li>
                <li>Works on multiple platforms</li>
                <li>Scalable for large applications</li>
                <li>ACID compliant for data integrity</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Connect to MySQL
mysql -u root -p

-- Create a database
CREATE DATABASE myapp;

-- Use the database
USE myapp;

-- Show all databases
SHOW DATABASES;

-- Show all tables
SHOW TABLES;

-- Describe table structure
DESC users;`}
              </pre>
            </div>
          </div>
        );

      case "basics":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">SQL Basics - CRUD Operations</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn the fundamental SQL operations: CREATE, READ, UPDATE, and DELETE.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creating Tables</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Create a table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create table with foreign key
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">INSERT, SELECT, UPDATE, DELETE</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- INSERT - Add new records
INSERT INTO users (username, email, age)
VALUES ('john_doe', 'john@example.com', 25);

-- Multiple inserts
INSERT INTO users (username, email, age) VALUES
    ('alice', 'alice@example.com', 28),
    ('bob', 'bob@example.com', 32),
    ('charlie', 'charlie@example.com', 24);

-- SELECT - Read data
SELECT * FROM users;
SELECT username, email FROM users WHERE age > 25;
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

-- UPDATE - Modify existing records
UPDATE users SET age = 26 WHERE username = 'john_doe';
UPDATE users SET email = 'newemail@example.com' WHERE id = 1;

-- DELETE - Remove records
DELETE FROM users WHERE id = 5;
DELETE FROM users WHERE age < 18;`}
              </pre>
            </div>
          </div>
        );

      case "queries":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Advanced Queries</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Master complex SQL queries with filtering, grouping, and aggregation.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">WHERE, LIKE, IN, BETWEEN</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- WHERE clause
SELECT * FROM users WHERE age >= 18 AND age <= 30;
SELECT * FROM users WHERE username = 'john_doe' OR email LIKE '%@gmail.com';

-- LIKE pattern matching
SELECT * FROM users WHERE email LIKE '%@gmail.com';
SELECT * FROM users WHERE username LIKE 'j%';  -- Starts with 'j'
SELECT * FROM users WHERE username LIKE '%_doe';  -- Ends with '_doe'

-- IN operator
SELECT * FROM users WHERE age IN (25, 30, 35);
SELECT * FROM users WHERE username IN ('alice', 'bob', 'charlie');

-- BETWEEN operator
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM orders WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';

-- IS NULL / IS NOT NULL
SELECT * FROM users WHERE age IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GROUP BY & Aggregate Functions</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Aggregate functions
SELECT COUNT(*) FROM users;
SELECT AVG(age) as average_age FROM users;
SELECT MIN(age), MAX(age) FROM users;
SELECT SUM(total) FROM orders;

-- GROUP BY
SELECT age, COUNT(*) as count
FROM users
GROUP BY age
ORDER BY count DESC;

-- GROUP BY with HAVING
SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
FROM orders
GROUP BY user_id
HAVING order_count > 5 AND total_spent > 1000;

-- Multiple grouping
SELECT status, DATE(created_at) as order_date, COUNT(*) as count
FROM orders
GROUP BY status, DATE(created_at);`}
              </pre>
            </div>
          </div>
        );

      case "joins":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">SQL Joins</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Combine data from multiple tables using different types of joins.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">INNER JOIN & LEFT JOIN</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- INNER JOIN - Returns matching records from both tables
SELECT users.username, orders.total, orders.status
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN - Returns all records from left table
SELECT users.username, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Multiple joins
SELECT
    users.username,
    orders.id as order_id,
    products.name as product_name,
    order_items.quantity
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN order_items ON orders.id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.id
WHERE users.id = 1;`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RIGHT JOIN & Complex Joins</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- RIGHT JOIN - Returns all records from right table
SELECT users.username, orders.total
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

-- Self join
SELECT
    e1.name as employee,
    e2.name as manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;

-- Join with aggregation
SELECT
    users.username,
    COUNT(orders.id) as order_count,
    SUM(orders.total) as total_spent
FROM users
LEFT JOIN orders ON users.id = orders.user_id
GROUP BY users.id, users.username
HAVING order_count > 0
ORDER BY total_spent DESC;`}
              </pre>
            </div>
          </div>
        );

      case "indexes":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Indexes & Performance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Optimize database performance with proper indexing strategies.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creating Indexes</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Create index on single column
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);

-- Create unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Create composite index (multiple columns)
CREATE INDEX idx_user_age ON users(username, age);

-- Create full-text index for text search
CREATE FULLTEXT INDEX idx_description ON products(description);

-- Show indexes on a table
SHOW INDEXES FROM users;

-- Drop an index
DROP INDEX idx_username ON users;`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Query Optimization</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Use EXPLAIN to analyze query performance
EXPLAIN SELECT * FROM users WHERE username = 'john_doe';

-- Optimize with covering index
CREATE INDEX idx_user_details ON users(username, email, age);

-- Avoid SELECT *
SELECT id, username, email FROM users WHERE age > 25;

-- Use LIMIT for pagination
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 20;

-- Use EXISTS instead of IN for subqueries
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- Optimize JOIN queries
SELECT u.username, COUNT(o.id) as order_count
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.age > 25
GROUP BY u.id, u.username;`}
              </pre>
            </div>
          </div>
        );

      case "transactions":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Transactions & ACID</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ensure data integrity with transactions and understand ACID properties.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transaction Basics</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Start a transaction
START TRANSACTION;

-- Perform operations
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit the transaction
COMMIT;

-- Or rollback if there's an error
ROLLBACK;

-- Transaction with error handling
START TRANSACTION;

UPDATE inventory SET quantity = quantity - 5 WHERE product_id = 101;

-- Check if enough inventory
SELECT quantity FROM inventory WHERE product_id = 101;

-- If quantity >= 0, commit; otherwise rollback
COMMIT;
-- or
ROLLBACK;`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ACID Properties & Isolation Levels</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- ACID Properties:
-- A - Atomicity: All or nothing
-- C - Consistency: Data remains valid
-- I - Isolation: Transactions don't interfere
-- D - Durability: Committed data persists

-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Savepoints for partial rollback
START TRANSACTION;

INSERT INTO users (username, email) VALUES ('user1', 'user1@example.com');
SAVEPOINT sp1;

INSERT INTO orders (user_id, total) VALUES (1, 100.00);
SAVEPOINT sp2;

-- Rollback to savepoint
ROLLBACK TO sp1;

COMMIT;

-- Locking for concurrent access
SELECT * FROM products WHERE id = 1 FOR UPDATE;  -- Exclusive lock
SELECT * FROM products WHERE id = 1 LOCK IN SHARE MODE;  -- Shared lock`}
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
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">MySQL Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master the world's most popular open-source relational database
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

        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MySQL;