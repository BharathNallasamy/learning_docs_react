import { useState } from "react";

const SQLBasics = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "📚" },
    { id: "ddl", label: "DDL Commands", icon: "🏗️" },
    { id: "dml", label: "DML Commands", icon: "✏️" },
    { id: "queries", label: "Queries", icon: "🔍" },
    { id: "constraints", label: "Constraints", icon: "🔒" },
    { id: "joins", label: "Joins", icon: "🔗" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to SQL</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. It's used across all major database systems.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is SQL?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Standard language for relational databases</li>
                <li>Used to create, read, update, and delete data</li>
                <li>Declarative language (you specify what you want, not how)</li>
                <li>Works with MySQL, PostgreSQL, SQL Server, Oracle, etc.</li>
                <li>Essential skill for backend developers and data analysts</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SQL Categories</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`SQL is divided into several categories:

1. DDL (Data Definition Language)
   - CREATE, ALTER, DROP, TRUNCATE
   - Define database structure

2. DML (Data Manipulation Language)
   - INSERT, UPDATE, DELETE, SELECT
   - Manipulate data within tables

3. DCL (Data Control Language)
   - GRANT, REVOKE
   - Control access permissions

4. TCL (Transaction Control Language)
   - COMMIT, ROLLBACK, SAVEPOINT
   - Manage transactions

5. DQL (Data Query Language)
   - SELECT
   - Query and retrieve data`}
              </pre>
            </div>
          </div>
        );

      case "ddl":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">DDL - Data Definition Language</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              DDL commands are used to define and modify database structure and schema.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CREATE - Creating Database Objects</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Create a database
CREATE DATABASE school;

-- Use the database
USE school;

-- Create a table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    grade CHAR(1),
    enrollment_date DATE DEFAULT CURRENT_DATE
);

-- Create table with foreign key
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    credits INT NOT NULL,
    instructor VARCHAR(100)
);

CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ALTER, DROP, TRUNCATE</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- ALTER - Modify table structure
-- Add column
ALTER TABLE students ADD COLUMN phone VARCHAR(15);

-- Modify column
ALTER TABLE students MODIFY COLUMN age INT NOT NULL;

-- Drop column
ALTER TABLE students DROP COLUMN phone;

-- Add constraint
ALTER TABLE students ADD CONSTRAINT check_age CHECK (age >= 5);

-- Rename table
ALTER TABLE students RENAME TO pupils;

-- DROP - Delete database objects
-- Drop table
DROP TABLE enrollments;

-- Drop database
DROP DATABASE school;

-- Drop with safety check
DROP TABLE IF EXISTS students;

-- TRUNCATE - Remove all rows (faster than DELETE)
TRUNCATE TABLE students;  -- Keeps structure, removes data`}
              </pre>
            </div>
          </div>
        );

      case "dml":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">DML - Data Manipulation Language</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              DML commands are used to manipulate data within database tables.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">INSERT - Adding Data</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Insert single row
INSERT INTO students (first_name, last_name, email, age, grade)
VALUES ('John', 'Doe', 'john.doe@email.com', 20, 'A');

-- Insert multiple rows
INSERT INTO students (first_name, last_name, email, age, grade) VALUES
    ('Alice', 'Smith', 'alice@email.com', 19, 'B'),
    ('Bob', 'Johnson', 'bob@email.com', 21, 'A'),
    ('Charlie', 'Brown', 'charlie@email.com', 20, 'C');

-- Insert with specific columns
INSERT INTO students (first_name, last_name, age)
VALUES ('David', 'Wilson', 22);

-- Insert from another table
INSERT INTO archive_students
SELECT * FROM students WHERE enrollment_date < '2020-01-01';`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UPDATE & DELETE</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- UPDATE - Modify existing data
-- Update single record
UPDATE students
SET email = 'john.newemail@email.com'
WHERE id = 1;

-- Update multiple columns
UPDATE students
SET grade = 'A', age = 21
WHERE last_name = 'Doe';

-- Update with calculation
UPDATE students
SET age = age + 1
WHERE enrollment_date < '2024-01-01';

-- Update all rows (use with caution!)
UPDATE students SET grade = 'B';

-- DELETE - Remove data
-- Delete specific records
DELETE FROM students WHERE id = 5;

-- Delete with condition
DELETE FROM students WHERE age < 18;

-- Delete all rows (use with caution!)
DELETE FROM students;

-- Delete with JOIN (some databases)
DELETE students
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
WHERE enrollments.course_id = 101;`}
              </pre>
            </div>
          </div>
        );

      case "queries":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">SELECT Queries</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The SELECT statement is used to query and retrieve data from database tables.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic SELECT</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- Select all columns
SELECT * FROM students;

-- Select specific columns
SELECT first_name, last_name, email FROM students;

-- Select with alias
SELECT
    first_name AS 'First Name',
    last_name AS 'Last Name',
    age AS 'Student Age'
FROM students;

-- Select distinct values
SELECT DISTINCT grade FROM students;

-- Select with calculations
SELECT
    first_name,
    last_name,
    age,
    age + 5 AS 'Age in 5 years'
FROM students;

-- Concatenate columns
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM students;`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Filtering & Sorting</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- WHERE clause
SELECT * FROM students WHERE age >= 20;
SELECT * FROM students WHERE grade = 'A' AND age < 25;
SELECT * FROM students WHERE grade = 'A' OR grade = 'B';

-- Comparison operators
SELECT * FROM students WHERE age BETWEEN 18 AND 22;
SELECT * FROM students WHERE grade IN ('A', 'B');
SELECT * FROM students WHERE email IS NOT NULL;
SELECT * FROM students WHERE email IS NULL;

-- Pattern matching with LIKE
SELECT * FROM students WHERE first_name LIKE 'J%';  -- Starts with J
SELECT * FROM students WHERE email LIKE '%@gmail.com';  -- Ends with
SELECT * FROM students WHERE last_name LIKE '%son%';  -- Contains

-- ORDER BY - Sorting
SELECT * FROM students ORDER BY age;  -- Ascending (default)
SELECT * FROM students ORDER BY age DESC;  -- Descending
SELECT * FROM students ORDER BY grade ASC, age DESC;  -- Multiple columns

-- LIMIT - Restrict results
SELECT * FROM students LIMIT 10;  -- First 10 rows
SELECT * FROM students ORDER BY age DESC LIMIT 5;  -- Top 5 oldest`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aggregate Functions</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- COUNT, SUM, AVG, MIN, MAX
SELECT COUNT(*) FROM students;
SELECT COUNT(DISTINCT grade) FROM students;
SELECT AVG(age) AS average_age FROM students;
SELECT MIN(age) AS youngest, MAX(age) AS oldest FROM students;

-- GROUP BY
SELECT grade, COUNT(*) AS student_count
FROM students
GROUP BY grade;

SELECT grade, AVG(age) AS avg_age
FROM students
GROUP BY grade
ORDER BY avg_age DESC;

-- HAVING - Filter grouped results
SELECT grade, COUNT(*) AS count
FROM students
GROUP BY grade
HAVING count > 10;

SELECT course_id, COUNT(*) AS enrollments
FROM enrollments
GROUP BY course_id
HAVING enrollments >= 20
ORDER BY enrollments DESC;`}
              </pre>
            </div>
          </div>
        );

      case "constraints":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">SQL Constraints</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Constraints are rules enforced on data columns to ensure data integrity and accuracy.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Constraints</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- PRIMARY KEY - Unique identifier
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Composite primary key
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- UNIQUE - Ensure unique values
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE
);

-- NOT NULL - Prevent null values
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT  -- Can be NULL
);

-- DEFAULT - Set default value
CREATE TABLE posts (
    id INT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    status VARCHAR(20) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
              </pre>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CHECK & FOREIGN KEY</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- CHECK - Validate data
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65),
    salary DECIMAL(10, 2) CHECK (salary > 0),
    email VARCHAR(100) CHECK (email LIKE '%@%.%')
);

-- FOREIGN KEY - Maintain referential integrity
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Foreign key with actions
CREATE TABLE orders (
    id INT PRIMARY KEY,
    customer_id INT,
    total DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
        ON DELETE CASCADE  -- Delete orders when customer is deleted
        ON UPDATE CASCADE  -- Update orders when customer id changes
);

-- Add constraint to existing table
ALTER TABLE employees
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) REFERENCES departments(id);

-- Drop constraint
ALTER TABLE employees
DROP CONSTRAINT fk_department;`}
              </pre>
            </div>
          </div>
        );

      case "joins":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">SQL Joins</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Joins are used to combine rows from two or more tables based on related columns.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">INNER JOIN</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- INNER JOIN - Returns matching records from both tables
SELECT
    students.first_name,
    students.last_name,
    courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- Using table aliases
SELECT
    s.first_name,
    s.last_name,
    c.course_name,
    e.enrollment_date
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id
WHERE s.grade = 'A';

-- Join with aggregation
SELECT
    c.course_name,
    COUNT(e.student_id) AS student_count
FROM courses c
INNER JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.course_name
HAVING student_count > 10;`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">LEFT, RIGHT, FULL JOINS</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`-- LEFT JOIN - All records from left table + matching from right
SELECT
    s.first_name,
    s.last_name,
    c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;

-- Find students with no enrollments
SELECT s.*
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE e.student_id IS NULL;

-- RIGHT JOIN - All records from right table + matching from left
SELECT
    c.course_name,
    COUNT(e.student_id) AS enrolled_count
FROM enrollments e
RIGHT JOIN courses c ON e.course_id = c.id
GROUP BY c.id, c.course_name;

-- FULL OUTER JOIN (not supported in MySQL, use UNION)
SELECT s.first_name, c.course_name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id
UNION
SELECT s.first_name, c.course_name
FROM students s
RIGHT JOIN enrollments e ON s.id = e.student_id
RIGHT JOIN courses c ON e.course_id = c.id;

-- CROSS JOIN - Cartesian product
SELECT s.first_name, c.course_name
FROM students s
CROSS JOIN courses c;`}
              </pre>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">SQL Basics Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Learn the fundamentals of SQL - the language of databases
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
                    ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg transform scale-105"
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

export default SQLBasics;