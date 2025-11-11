import { useState } from "react";

const Css = () => {
  const [activeTab, setActiveTab] = useState("basics");

  const topics = [
    { id: "basics", label: "CSS Basics", icon: "📝" },
    { id: "flexbox", label: "Flexbox", icon: "📦" },
    { id: "grid", label: "Grid Layout", icon: "⚡" },
    { id: "animations", label: "Animations", icon: "🎬" },
    { id: "responsive", label: "Responsive Design", icon: "📱" },
    { id: "variables", label: "CSS Variables", icon: "🎨" },
    { id: "sass", label: "Sass/SCSS", icon: "💎" },
  ];

  const content = {
    basics: {
      title: "CSS Basics",
      description: "Learn the fundamentals of Cascading Style Sheets to style and design beautiful web pages.",
      sections: [
        {
          heading: "What is CSS?",
          text: "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML documents. It controls colors, fonts, layouts, spacing, and the overall visual appearance of web pages.",
        },
        {
          heading: "CSS Syntax",
          text: "CSS consists of selectors and declaration blocks. Selectors target HTML elements, and declarations define the styling properties.",
          code: `/* Basic CSS Syntax */
selector {
    property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}

p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 16px;
}`,
        },
        {
          heading: "Ways to Add CSS",
          points: [
            "Inline CSS: Using the style attribute directly in HTML elements",
            "Internal CSS: Using <style> tag in the HTML <head> section",
            "External CSS: Linking separate .css files using <link> tag (recommended)",
          ],
          code: `<!-- External CSS (Recommended) -->
<link rel="stylesheet" href="styles.css">

<!-- Internal CSS -->
<style>
    body { background-color: #f0f0f0; }
</style>

<!-- Inline CSS -->
<p style="color: red;">This is red text</p>`,
        },
        {
          heading: "CSS Selectors",
          points: [
            "Element Selector: Targets HTML elements (p, div, h1)",
            "Class Selector: Targets elements with specific class (.classname)",
            "ID Selector: Targets element with specific ID (#idname)",
            "Attribute Selector: Targets elements with specific attributes",
            "Pseudo-classes: Targets specific states (:hover, :focus, :active)",
          ],
        },
        {
          heading: "Box Model",
          text: "Every HTML element is treated as a box with content, padding, border, and margin.",
          code: `/* Box Model Example */
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 2px solid #333;
    margin: 10px;
    background-color: #f0f0f0;
}`,
        },
      ],
    },
    flexbox: {
      title: "Flexbox",
      description: "Master Flexbox layout to create flexible, responsive layouts with ease.",
      sections: [
        {
          heading: "What is Flexbox?",
          text: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. It provides an efficient way to align, distribute space, and order elements.",
        },
        {
          heading: "Flex Container Properties",
          code: `.container {
    display: flex;
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    justify-content: center; /* flex-start, flex-end, center, space-between, space-around */
    align-items: center; /* flex-start, flex-end, center, stretch, baseline */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    gap: 16px;
}`,
        },
        {
          heading: "Flex Item Properties",
          code: `.item {
    flex-grow: 1; /* How much item will grow */
    flex-shrink: 1; /* How much item will shrink */
    flex-basis: 200px; /* Initial size */
    align-self: center; /* Override container's align-items */
    order: 2; /* Change visual order */
}

/* Shorthand */
.item {
    flex: 1 1 200px; /* grow shrink basis */
}`,
        },
        {
          heading: "Common Flexbox Patterns",
          code: `/* Center Everything */
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Card Layout */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}`,
        },
      ],
    },
    grid: {
      title: "Grid Layout",
      description: "Create complex, two-dimensional layouts with CSS Grid - the most powerful layout system.",
      sections: [
        {
          heading: "What is CSS Grid?",
          text: "CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns simultaneously.",
        },
        {
          heading: "Grid Container Properties",
          code: `.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
    grid-template-rows: 100px 200px auto;
    gap: 20px;
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
}`,
        },
        {
          heading: "Grid Item Properties",
          code: `.grid-item {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-row: 1 / 2;
    grid-area: header; /* Use named area */
}

/* Shorthand */
.item {
    grid-area: 2 / 1 / 3 / 4; /* row-start / col-start / row-end / col-end */
}`,
        },
        {
          heading: "Responsive Grid",
          code: `/* Auto-fit and minmax for responsive grids */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Media queries for different layouts */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}`,
        },
      ],
    },
    animations: {
      title: "Animations",
      description: "Bring your designs to life with CSS transitions and keyframe animations.",
      sections: [
        {
          heading: "CSS Transitions",
          text: "Transitions allow property changes to occur smoothly over a specified duration.",
          code: `.button {
    background-color: blue;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.1);
}

/* All properties */
.box {
    transition: all 0.5s ease-in-out;
}`,
        },
        {
          heading: "CSS Keyframe Animations",
          code: `/* Define animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Apply animation */
.element {
    animation: fadeIn 1s ease-out;
}`,
        },
        {
          heading: "Animation Properties",
          code: `.animated {
    animation-name: slideIn;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
}

/* Shorthand */
.animated {
    animation: slideIn 2s ease-in-out 0.5s infinite alternate forwards;
}`,
        },
        {
          heading: "Common Animations",
          code: `/* Fade In */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide In */
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

/* Bounce */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/* Rotate */
@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`,
        },
      ],
    },
    responsive: {
      title: "Responsive Design",
      description: "Create websites that look great on all devices using responsive design techniques.",
      sections: [
        {
          heading: "What is Responsive Design?",
          text: "Responsive design ensures websites adapt and look good on all devices and screen sizes - from mobile phones to large desktop monitors.",
        },
        {
          heading: "Media Queries",
          code: `/* Mobile First Approach */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .container {
        width: 1200px;
    }
}`,
        },
        {
          heading: "Viewport and Units",
          code: `/* Viewport Meta Tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Relative Units */
.responsive {
    width: 80vw; /* 80% of viewport width */
    height: 50vh; /* 50% of viewport height */
    font-size: 2rem; /* Relative to root font-size */
    padding: 5%; /* Percentage of parent width */
}`,
        },
        {
          heading: "Responsive Images",
          code: `/* Responsive Image */
img {
    max-width: 100%;
    height: auto;
}

/* Picture Element */
<picture>
    <source media="(min-width: 1024px)" srcset="large.jpg">
    <source media="(min-width: 768px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>`,
        },
        {
          heading: "Container Queries",
          code: `/* Modern approach - Container Queries */
.card-container {
    container-type: inline-size;
}

@container (min-width: 500px) {
    .card {
        display: flex;
        gap: 20px;
    }
}`,
        },
      ],
    },
    variables: {
      title: "CSS Variables",
      description: "Use CSS custom properties (variables) to create maintainable and dynamic stylesheets.",
      sections: [
        {
          heading: "What are CSS Variables?",
          text: "CSS Variables (Custom Properties) allow you to store values that can be reused throughout your stylesheet, making it easier to maintain consistent designs.",
        },
        {
          heading: "Defining CSS Variables",
          code: `:root {
    /* Colors */
    --primary-color: #3b82f6;
    --secondary-color: #8b5cf6;
    --text-color: #1f2937;
    --bg-color: #ffffff;

    /* Spacing */
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;

    /* Typography */
    --font-family: 'Arial', sans-serif;
    --font-size-base: 16px;
    --font-size-lg: 24px;
}`,
        },
        {
          heading: "Using CSS Variables",
          code: `.button {
    background-color: var(--primary-color);
    color: var(--bg-color);
    padding: var(--spacing-md);
    font-family: var(--font-family);
}

/* With fallback value */
.element {
    color: var(--text-color, #000000);
}`,
        },
        {
          heading: "Dynamic Variables with JavaScript",
          code: `// Change CSS variable value
document.documentElement.style.setProperty('--primary-color', '#ff0000');

// Get CSS variable value
const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color');

// Dark mode toggle
function toggleDarkMode() {
    document.documentElement.style.setProperty('--bg-color', '#1f2937');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
}`,
        },
        {
          heading: "Scoped Variables",
          code: `:root {
    --button-color: blue;
}

.card {
    --button-color: green; /* Override for this scope */
}

.card button {
    background-color: var(--button-color); /* Will be green */
}`,
        },
      ],
    },
    sass: {
      title: "Sass/SCSS",
      description: "Supercharge your CSS with Sass - a powerful CSS preprocessor with variables, nesting, and more.",
      sections: [
        {
          heading: "What is Sass?",
          text: "Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds features like variables, nesting, mixins, and functions to make CSS more maintainable and powerful.",
        },
        {
          heading: "Variables",
          code: `// Sass Variables
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;
$font-stack: 'Helvetica', sans-serif;
$spacing: 16px;

.button {
    background-color: $primary-color;
    font-family: $font-stack;
    padding: $spacing;
}`,
        },
        {
          heading: "Nesting",
          code: `// Sass Nesting
.nav {
    background-color: #333;

    ul {
        list-style: none;
        padding: 0;

        li {
            display: inline-block;
            margin: 0 10px;

            a {
                color: white;
                text-decoration: none;

                &:hover {
                    color: $primary-color;
                }
            }
        }
    }
}`,
        },
        {
          heading: "Mixins",
          code: `// Define Mixin
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin button-style($bg-color, $text-color) {
    background-color: $bg-color;
    color: $text-color;
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

// Use Mixin
.container {
    @include flex-center;
}

.primary-btn {
    @include button-style($primary-color, white);
}`,
        },
        {
          heading: "Functions and Operations",
          code: `// Operations
$base-size: 16px;
.title {
    font-size: $base-size * 2; // 32px
}

// Built-in Functions
.box {
    background-color: lighten($primary-color, 20%);
    border-color: darken($primary-color, 10%);
    color: mix($primary-color, $secondary-color, 50%);
}

// Custom Function
@function calculate-rem($px) {
    @return $px / 16px * 1rem;
}

.element {
    font-size: calculate-rem(24px); // 1.5rem
}`,
        },
        {
          heading: "Partials and Import",
          code: `// _variables.scss
$primary-color: #3b82f6;
$secondary-color: #8b5cf6;

// _mixins.scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

// main.scss
@import 'variables';
@import 'mixins';

.container {
    background-color: $primary-color;
    @include flex-center;
}`,
        },
      ],
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-6xl mb-4 block">🎨</span>
            <h1 className="text-5xl font-bold mb-4">CSS Course</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Master CSS to design beautiful, responsive, and modern websites. From basics to advanced animations and layouts.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-4 py-3 rounded-lg font-semibold transition-all flex flex-col items-center justify-center gap-2 ${
                  activeTab === topic.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{topic.icon}</span>
                <span className="text-xs text-center">{topic.label}</span>
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
            <p className="text-xl text-gray-600">
              {currentContent.description}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
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
                        <span className="text-blue-600 mt-1">▸</span>
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
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Style the Web?
            </h3>
            <p className="text-gray-700 mb-6">
              Practice these CSS concepts and create beautiful, responsive designs!
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all">
                Start Exercises
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Css;