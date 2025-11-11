import { useState } from "react";

interface Section {
  heading: string;
  text?: string;
  code?: string;
}

interface ContentSection {
  title: string;
  description: string;
  sections: Section[];
}

const Html = () => {
  const [activeTab, setActiveTab] = useState("foundations");

  const topics = [
    { id: "foundations", label: "Foundations", icon: "🏛️" },
    { id: "text-content", label: "Text & Content", icon: "📝" },
    { id: "links-media", label: "Links & Media", icon: "🔗" },
    { id: "structure", label: "Page Structure", icon: "📦" },
    { id: "tables", label: "Tables", icon: "🔹" },
    { id: "forms", label: "Forms & Input", icon: "🧾" },
    { id: "css-integration", label: "CSS Integration", icon: "🎨" },
    { id: "metadata-seo", label: "Metadata & SEO", icon: "⚙️" },
    { id: "advanced", label: "Advanced Features", icon: "🧰" },
  ];

  const content: Record<string, ContentSection> = {
    foundations: {
      title: "HTML Foundations",
      description: "Learn the foundational concepts of HTML and the structure of web pages.",
      sections: [
        {
          heading: "What is HTML?",
          text: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web pages using elements and tags.",
        },
        {
          heading: "HTML Document Structure",
          text: "Every HTML document follows a basic structure with DOCTYPE, html, head, and body elements.",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first paragraph.</p>
</body>
</html>`,
        },
        {
          heading: "Basic Tags",
          text: "Essential HTML tags for structuring content:",
          code: `<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Line breaks and horizontal rules -->
<p>First line<br>Second line</p>
<hr>`,
        },
      ],
    },
    "text-content": {
      title: "Text & Content Formatting",
      description: "Master text formatting, inline and block elements, and content organization.",
      sections: [
        {
          heading: "Inline & Block Elements",
          text: "Block elements start on a new line (div, p, h1-h6), while inline elements flow within text (span, a, strong).",
        },
        {
          heading: "Text Formatting Tags",
          code: `<!-- Bold and Strong -->
<b>Bold text</b>
<strong>Strong importance (semantic)</strong>

<!-- Italic and Emphasis -->
<i>Italic text</i>
<em>Emphasized text (semantic)</em>

<!-- Other formatting -->
<mark>Highlighted text</mark>
<small>Smaller text</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
<del>Deleted text</del>
<ins>Inserted text</ins>`,
        },
        {
          heading: "Lists",
          code: `<!-- Ordered List -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<!-- Unordered List -->
<ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
</ul>

<!-- Description List -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`,
        },
      ],
    },
    "links-media": {
      title: "Links & Media",
      description: "Learn to add hyperlinks, images, audio, video, and embedded content.",
      sections: [
        {
          heading: "Hyperlinks & Attributes",
          code: `<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Link attributes -->
<a href="https://example.com" target="_blank">Open in new tab</a>
<a href="#section-id">Internal link to section</a>
<a href="page.html">Relative link</a>
<a href="mailto:email@example.com">Email link</a>
<a href="tel:+1234567890">Phone link</a>`,
        },
        {
          heading: "Images",
          code: `<!-- Basic image -->
<img src="image.jpg" alt="Description of image">

<!-- Responsive images with srcset -->
<img src="small.jpg"
     srcset="small.jpg 300w, medium.jpg 600w, large.jpg 1200w"
     sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
     alt="Responsive image">

<!-- Image with dimensions -->
<img src="logo.png" alt="Logo" width="200" height="100">`,
        },
        {
          heading: "Audio & Video",
          code: `<!-- Audio -->
<audio controls autoplay loop>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser doesn't support audio.
</audio>

<!-- Video -->
<video controls width="640" height="360" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser doesn't support video.
</video>`,
        },
        {
          heading: "Embedding Content",
          code: `<!-- YouTube embed -->
<iframe width="560" height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope"
    allowfullscreen>
</iframe>

<!-- Google Maps embed -->
<iframe src="https://www.google.com/maps/embed?pb=..."
    width="600" height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
</iframe>`,
        },
      ],
    },
    structure: {
      title: "Page Structure & Layout",
      description: "Build well-structured, semantic HTML pages with proper layout elements.",
      sections: [
        {
          heading: "HTML5 Semantic Tags",
          text: "Semantic elements clearly describe their meaning to both browser and developer.",
          code: `<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <section>
        <h2>Main Section</h2>
        <article>
            <h3>Article Title</h3>
            <p>Article content...</p>
        </article>
    </section>

    <aside>
        <h3>Sidebar</h3>
        <p>Related content...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025 LearnHub</p>
</footer>`,
        },
        {
          heading: "Div & Span",
          code: `<!-- Div: Block-level container -->
<div class="container">
    <div class="row">
        <div class="column">Content</div>
    </div>
</div>

<!-- Span: Inline container -->
<p>This is <span style="color: red;">highlighted</span> text.</p>`,
        },
        {
          heading: "Responsive Layout Basics",
          code: `<!-- Meta viewport tag for responsive design -->
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
        },
      ],
    },
    tables: {
      title: "HTML Tables",
      description: "Create and structure data tables with proper markup and attributes.",
      sections: [
        {
          heading: "Basic Table Structure",
          code: `<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
    </tr>
    <tr>
        <td>Alice</td>
        <td>25</td>
        <td>New York</td>
    </tr>
    <tr>
        <td>Bob</td>
        <td>30</td>
        <td>London</td>
    </tr>
</table>`,
        },
        {
          heading: "Table Spanning & Styling",
          code: `<table border="1">
    <tr>
        <th colspan="2">Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td rowspan="2">25</td>
    </tr>
    <tr>
        <td>Alice</td>
        <td>Smith</td>
    </tr>
</table>`,
        },
        {
          heading: "Table Sections",
          code: `<table>
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laptop</td>
            <td>$999</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>$699</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$1698</td>
        </tr>
    </tfoot>
</table>`,
        },
      ],
    },
    forms: {
      title: "Forms & User Input",
      description: "Master HTML forms to collect and validate user input effectively.",
      sections: [
        {
          heading: "Form Structure",
          code: `<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Submit</button>
</form>`,
        },
        {
          heading: "Input Types",
          code: `<!-- Text inputs -->
<input type="text" placeholder="Enter text">
<input type="email" placeholder="email@example.com">
<input type="password" placeholder="Password">
<input type="number" min="1" max="100">
<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
<input type="url" placeholder="https://example.com">

<!-- Date and time -->
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">

<!-- Selection inputs -->
<input type="checkbox" id="agree">
<input type="radio" name="option" value="1">
<input type="range" min="0" max="100">
<input type="color">

<!-- File and actions -->
<input type="file" accept="image/*">
<input type="submit" value="Submit">
<input type="reset" value="Reset">
<input type="button" value="Click Me">`,
        },
        {
          heading: "Form Controls",
          code: `<!-- Textarea -->
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>

<!-- Select dropdown -->
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="">Select...</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
</select>

<!-- Multiple select -->
<select multiple>
    <option>Option 1</option>
    <option>Option 2</option>
</select>

<!-- Button -->
<button type="button">Click Me</button>
<button type="submit">Submit Form</button>
<button type="reset">Reset Form</button>`,
        },
        {
          heading: "HTML5 Input Features & Validation",
          code: `<form>
    <!-- Placeholder -->
    <input type="text" placeholder="Enter your name">

    <!-- Required field -->
    <input type="email" required>

    <!-- Pattern validation -->
    <input type="text" pattern="[A-Za-z]{3,}"
           title="At least 3 letters">

    <!-- Min/Max -->
    <input type="number" min="1" max="100">
    <input type="date" min="2024-01-01" max="2024-12-31">

    <!-- Autocomplete -->
    <input type="email" autocomplete="email">

    <!-- Autofocus -->
    <input type="text" autofocus>

    <!-- Readonly and disabled -->
    <input type="text" value="readonly" readonly>
    <input type="text" disabled>
</form>`,
        },
      ],
    },
    "css-integration": {
      title: "HTML + CSS Integration",
      description: "Learn how to integrate CSS styling with HTML documents.",
      sections: [
        {
          heading: "Linking CSS",
          code: `<!-- External CSS (recommended) -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>

<!-- Internal CSS -->
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
    </style>
</head>

<!-- Inline CSS -->
<p style="color: red; font-size: 16px;">Inline styled text</p>`,
        },
        {
          heading: "Class vs ID Attributes",
          code: `<!-- Classes (reusable, multiple per element) -->
<div class="container main-content">
    <p class="text-large text-blue">Paragraph</p>
</div>

<!-- IDs (unique, one per page) -->
<div id="header">
    <h1 id="site-title">My Website</h1>
</div>

<!-- CSS for above -->
<style>
    .container { width: 1200px; }
    .text-large { font-size: 18px; }
    .text-blue { color: blue; }
    #header { background: #333; }
    #site-title { color: white; }
</style>`,
        },
        {
          heading: "Style Attribute & Basic Styling",
          code: `<!-- Direct styling -->
<div style="
    background-color: #f5f5f5;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
">
    <h2 style="color: #333; margin-bottom: 10px;">Styled Box</h2>
    <p style="line-height: 1.6;">Content with inline styles</p>
</div>`,
        },
      ],
    },
    "metadata-seo": {
      title: "Metadata & SEO Basics",
      description: "Optimize your HTML for search engines and social media sharing.",
      sections: [
        {
          heading: "Meta Tags",
          code: `<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">

    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Description for search engines -->
    <meta name="description" content="Learn HTML, CSS, and JavaScript">

    <!-- Keywords (less important now) -->
    <meta name="keywords" content="HTML, CSS, JavaScript, Web Development">

    <!-- Author -->
    <meta name="author" content="LearnHub">

    <!-- Refresh/Redirect -->
    <meta http-equiv="refresh" content="30">
</head>`,
        },
        {
          heading: "Title Tag",
          code: `<head>
    <title>HTML Course - LearnHub | Learn Web Development</title>
</head>`,
        },
        {
          heading: "Open Graph Tags (Social Sharing)",
          code: `<head>
    <!-- Facebook & LinkedIn -->
    <meta property="og:title" content="HTML Course - LearnHub">
    <meta property="og:description" content="Master HTML from basics to advanced">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/html-course">
    <meta property="og:type" content="website">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="HTML Course - LearnHub">
    <meta name="twitter:description" content="Master HTML from basics to advanced">
    <meta name="twitter:image" content="https://example.com/image.jpg">
</head>`,
        },
        {
          heading: "Accessibility Basics",
          code: `<!-- ARIA roles and attributes -->
<nav role="navigation" aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</nav>

<button aria-label="Close menu" aria-expanded="false">×</button>

<!-- Alt text for images -->
<img src="logo.png" alt="LearnHub company logo">

<!-- Proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>

<!-- Labels for form inputs -->
<label for="email">Email:</label>
<input type="email" id="email" aria-required="true">`,
        },
      ],
    },
    advanced: {
      title: "Advanced HTML5 Features",
      description: "Explore advanced HTML5 capabilities for modern web applications.",
      sections: [
        {
          heading: "Canvas Basics",
          code: `<canvas id="myCanvas" width="400" height="200"></canvas>

<script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Draw rectangle
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 150, 100);

    // Draw circle
    ctx.beginPath();
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
</script>`,
        },
        {
          heading: "SVG Graphics",
          code: `<!-- Inline SVG -->
<svg width="200" height="200">
    <circle cx="100" cy="100" r="80"
            fill="blue" stroke="black" stroke-width="2" />
    <rect x="50" y="150" width="100" height="30"
          fill="green" />
</svg>

<!-- SVG as image -->
<img src="graphic.svg" alt="SVG graphic">`,
        },
        {
          heading: "Data Attributes",
          code: `<!-- Custom data attributes -->
<div class="product"
     data-product-id="12345"
     data-category="electronics"
     data-price="999.99">
    Laptop
</div>

<script>
    const product = document.querySelector('.product');
    console.log(product.dataset.productId);  // "12345"
    console.log(product.dataset.category);   // "electronics"
    console.log(product.dataset.price);      // "999.99"
</script>`,
        },
        {
          heading: "Local Storage & Session Storage",
          code: `<script>
    // Local Storage (persists after browser close)
    localStorage.setItem('username', 'Alice');
    const user = localStorage.getItem('username');
    localStorage.removeItem('username');
    localStorage.clear();

    // Session Storage (cleared when tab closes)
    sessionStorage.setItem('token', 'abc123');
    const token = sessionStorage.getItem('token');
    sessionStorage.removeItem('token');
    sessionStorage.clear();

    // Store objects
    const userData = { name: 'Alice', age: 25 };
    localStorage.setItem('user', JSON.stringify(userData));
    const stored = JSON.parse(localStorage.getItem('user'));
</script>`,
        },
        {
          heading: "File Paths & Organization",
          text: "Best practices for organizing HTML projects:",
          code: `<!-- Project Structure -->
project/
├── index.html
├── about.html
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── utils.js
├── images/
│   ├── logo.png
│   └── banner.jpg
└── assets/
    ├── fonts/
    └── icons/

<!-- Relative paths -->
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js"></script>
<img src="images/logo.png" alt="Logo">
<a href="about.html">About</a>

<!-- Absolute paths -->
<img src="/images/logo.png" alt="Logo">
<a href="https://example.com/page">External</a>`,
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
            <span className="text-6xl mb-4 block">🌐</span>
            <h1 className="text-5xl font-bold mb-4">HTML Course</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Master HTML - the foundation of web development. Learn to structure web pages and create amazing user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${activeTab === topic.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <span className="text-xl">{topic.icon}</span>
                <span>{topic.label}</span>
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
              Ready to Start Learning?
            </h3>
            <p className="text-gray-700 mb-6">
              Practice these concepts with hands-on exercises and build real projects.
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

        {/* Additional Resources */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Documentation</h4>
            <p className="text-gray-600">
              Comprehensive HTML reference and guides for all skill levels.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">💻</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Code Editor</h4>
            <p className="text-gray-600">
              Practice HTML with our interactive code editor and see results instantly.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">🎓</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Certification</h4>
            <p className="text-gray-600">
              Complete the course and earn a certificate to showcase your skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html;