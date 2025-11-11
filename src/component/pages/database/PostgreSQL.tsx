import { useState } from "react";

const PostgreSQL = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🐘" },
    { id: "basics", label: "SQL Basics", icon: "📝" },
    { id: "advanced", label: "Advanced Features", icon: "⚡" },
    { id: "json", label: "JSON Support", icon: "📦" },
    { id: "performance", label: "Performance", icon: "🚀" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to PostgreSQL</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why PostgreSQL?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>ACID compliant and highly reliable</li>
                <li>Advanced data types (JSON, Array, hstore)</li>
                <li>Full-text search capabilities</li>
                <li>Extensible with custom functions and types</li>
                <li>Superior handling of concurrent users</li>
                <li>Advanced indexing techniques</li>
                <li>Support for complex queries and joins</li>
                <li>Active development and community</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Connect to PostgreSQL
psql -U postgres

-- Create a database
CREATE DATABASE myapp;

-- Connect to database
\\c myapp

-- List all databases
\\l

-- List all tables
\\dt

-- Describe table
\\d users

-- Show table structure with details
\\d+ users`}
              </pre>
            </div>
          </div>
        );

      case "basics":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">PostgreSQL SQL Basics</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn fundamental PostgreSQL operations with data types and constraints.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creating Tables with Data Types</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Create table with various data types
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INTEGER CHECK (age >= 18),
    bio TEXT,
    is_active BOOLEAN DEFAULT true,
    metadata JSONB,
    tags TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create table with UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Create ENUM type
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'completed', 'cancelled');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    status order_status DEFAULT 'pending',
    total NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CRUD Operations</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- INSERT with RETURNING
INSERT INTO users (username, email, age, tags)
VALUES ('john_doe', 'john@example.com', 25, ARRAY['developer', 'blogger'])
RETURNING id, username, created_at;

-- INSERT multiple rows
INSERT INTO users (username, email, age) VALUES
    ('alice', 'alice@example.com', 28),
    ('bob', 'bob@example.com', 32),
    ('charlie', 'charlie@example.com', 24)
RETURNING *;

-- SELECT with advanced filtering
SELECT * FROM users WHERE age BETWEEN 25 AND 35;
SELECT * FROM users WHERE tags @> ARRAY['developer'];
SELECT * FROM users WHERE metadata->>'city' = 'New York';

-- UPDATE with RETURNING
UPDATE users
SET age = 26, updated_at = CURRENT_TIMESTAMP
WHERE username = 'john_doe'
RETURNING *;

-- UPSERT (INSERT ... ON CONFLICT)
INSERT INTO users (username, email, age)
VALUES ('john_doe', 'john@example.com', 26)
ON CONFLICT (username)
DO UPDATE SET age = EXCLUDED.age, email = EXCLUDED.email
RETURNING *;

-- DELETE with condition
DELETE FROM users WHERE age < 18 RETURNING *;`}
              </pre>
            </div>
          </div>
        );

      case "advanced":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Advanced PostgreSQL Features</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore powerful PostgreSQL features like window functions, CTEs, and advanced queries.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Table Expressions (CTEs)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Simple CTE
WITH active_users AS (
    SELECT * FROM users WHERE is_active = true
)
SELECT username, email FROM active_users WHERE age > 25;

-- Recursive CTE (hierarchical data)
WITH RECURSIVE employee_hierarchy AS (
    -- Base case
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive case
    SELECT e.id, e.name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.id
)
SELECT * FROM employee_hierarchy ORDER BY level, name;

-- Multiple CTEs
WITH
    user_stats AS (
        SELECT user_id, COUNT(*) as order_count, SUM(total) as total_spent
        FROM orders
        GROUP BY user_id
    ),
    high_value_users AS (
        SELECT * FROM user_stats WHERE total_spent > 1000
    )
SELECT u.username, us.order_count, us.total_spent
FROM users u
JOIN high_value_users us ON u.id = us.user_id;`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Window Functions</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- ROW_NUMBER, RANK, DENSE_RANK
SELECT
    username,
    total,
    ROW_NUMBER() OVER (ORDER BY total DESC) as row_num,
    RANK() OVER (ORDER BY total DESC) as rank,
    DENSE_RANK() OVER (ORDER BY total DESC) as dense_rank
FROM orders o
JOIN users u ON o.user_id = u.id;

-- Partition by category
SELECT
    product_name,
    category,
    price,
    AVG(price) OVER (PARTITION BY category) as avg_category_price,
    price - AVG(price) OVER (PARTITION BY category) as price_difference
FROM products;

-- Running totals
SELECT
    order_date,
    total,
    SUM(total) OVER (ORDER BY order_date) as running_total,
    AVG(total) OVER (ORDER BY order_date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_avg
FROM orders;

-- LAG and LEAD functions
SELECT
    order_date,
    total,
    LAG(total, 1) OVER (ORDER BY order_date) as previous_total,
    LEAD(total, 1) OVER (ORDER BY order_date) as next_total
FROM orders;`}
              </pre>
            </div>
          </div>
        );

      case "json":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">JSON & JSONB Support</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              PostgreSQL provides excellent support for JSON data with powerful querying capabilities.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Working with JSONB</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Create table with JSONB
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    attributes JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert JSON data
INSERT INTO products (name, attributes) VALUES
    ('Laptop', '{"brand": "Dell", "specs": {"ram": "16GB", "storage": "512GB SSD"}, "price": 999.99}'),
    ('Phone', '{"brand": "Apple", "specs": {"storage": "128GB", "color": "black"}, "price": 799.99}');

-- Query JSON fields
SELECT name, attributes->>'brand' as brand
FROM products;

-- Query nested JSON
SELECT name, attributes->'specs'->>'ram' as ram
FROM products;

-- Query with JSON operators
SELECT * FROM products WHERE attributes @> '{"brand": "Dell"}';
SELECT * FROM products WHERE attributes->'specs' @> '{"ram": "16GB"}';
SELECT * FROM products WHERE attributes->>'price' > '500';

-- Update JSON fields
UPDATE products
SET attributes = jsonb_set(attributes, '{price}', '899.99')
WHERE name = 'Laptop';

-- Add new JSON field
UPDATE products
SET attributes = attributes || '{"warranty": "2 years"}'
WHERE name = 'Laptop';

-- Remove JSON field
UPDATE products
SET attributes = attributes - 'warranty'
WHERE name = 'Laptop';`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">JSON Functions & Indexing</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Extract JSON array elements
SELECT
    name,
    jsonb_array_elements(attributes->'tags') as tag
FROM products
WHERE attributes ? 'tags';

-- JSON aggregation
SELECT
    jsonb_object_agg(name, attributes->>'price') as product_prices
FROM products;

-- Create GIN index on JSONB for faster queries
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);

-- Index specific JSON path
CREATE INDEX idx_products_brand ON products ((attributes->>'brand'));

-- Full-text search on JSON
SELECT * FROM products
WHERE attributes->>'description' @@ to_tsquery('laptop & fast');

-- JSON array operations
SELECT * FROM products
WHERE attributes->'tags' ? 'electronics';  -- Contains key

SELECT * FROM products
WHERE attributes->'tags' @> '["new", "sale"]';  -- Contains array elements`}
              </pre>
            </div>
          </div>
        );

      case "performance":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Performance Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Optimize PostgreSQL performance with proper indexing, query planning, and configuration.
            </p>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Indexes & Query Plans</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- B-tree index (default)
CREATE INDEX idx_users_username ON users(username);

-- Partial index (conditional)
CREATE INDEX idx_active_users ON users(username) WHERE is_active = true;

-- Multi-column index
CREATE INDEX idx_users_name_age ON users(username, age);

-- GIN index for full-text search
CREATE INDEX idx_users_bio_search ON users USING GIN (to_tsvector('english', bio));

-- GiST index for geometric data
CREATE INDEX idx_locations_point ON locations USING GIST (coordinates);

-- BRIN index for large tables with natural ordering
CREATE INDEX idx_orders_created_at ON orders USING BRIN (created_at);

-- Analyze query performance
EXPLAIN ANALYZE SELECT * FROM users WHERE username = 'john_doe';

-- Show index usage
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read
FROM pg_stat_user_indexes
ORDER BY idx_scan DESC;

-- Vacuum and analyze
VACUUM ANALYZE users;
ANALYZE users;`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Query Optimization Techniques</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Use LIMIT and OFFSET efficiently
SELECT * FROM users
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;

-- Materialized views for complex queries
CREATE MATERIALIZED VIEW user_order_stats AS
SELECT
    u.id,
    u.username,
    COUNT(o.id) as order_count,
    SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.username;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW user_order_stats;

-- Concurrent refresh (non-blocking)
REFRESH MATERIALIZED VIEW CONCURRENTLY user_order_stats;

-- Prepared statements
PREPARE get_user (INTEGER) AS
    SELECT * FROM users WHERE id = $1;

EXECUTE get_user(1);

-- Connection pooling settings
-- Set in postgresql.conf
-- max_connections = 100
-- shared_buffers = 256MB
-- effective_cache_size = 1GB
-- maintenance_work_mem = 64MB
-- work_mem = 4MB

-- Monitor query performance
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY total_time DESC
LIMIT 10;`}
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">PostgreSQL Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master the world's most advanced open-source relational database
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
                    ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg transform scale-105"
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

export default PostgreSQL;