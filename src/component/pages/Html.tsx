import { useState } from "react";

const Html = () => {
  const [activeTab, setActiveTab] = useState("basics");

  const topics = [
    { id: "basics", label: "HTML Basics", icon: "📝" },
    { id: "forms", label: "HTML Forms", icon: "📋" },
    { id: "html5", label: "HTML5 Features", icon: "🎯" },
    { id: "semantic", label: "Semantic HTML", icon: "🏗️" },
    { id: "accessibility", label: "Accessibility", icon: "♿" },
  ];

  const content = {
    basics: {
      title: "HTML Basics",
      description: "Learn the foundational concepts of HTML - the building blocks of web development.",
      sections: [
        {
          heading: "What is HTML?",
          text: "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using elements and tags.",
        },
        {
          heading: "Basic Structure",
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
          heading: "Common HTML Tags",
          text: "Headings (h1-h6), Paragraphs (p), Links (a), Images (img), Lists (ul, ol, li), Divisions (div), Spans (span)",
        },
      ],
    },
    forms: {
      title: "HTML Forms",
      description: "Master HTML forms to collect user input and create interactive web experiences.",
      sections: [
        {
          heading: "Form Elements",
          text: "Forms allow users to enter data that is sent to a server for processing. The main form elements include input, textarea, select, button, and label.",
        },
        {
          heading: "Basic Form Example",
          code: `<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>

    <button type="submit">Submit</button>
</form>`,
        },
        {
          heading: "Input Types",
          text: "text, email, password, number, date, checkbox, radio, file, submit, button, and more.",
        },
      ],
    },
    html5: {
      title: "HTML5 Features",
      description: "Explore modern HTML5 features that enhance web functionality and user experience.",
      sections: [
        {
          heading: "Semantic Elements",
          text: "HTML5 introduced semantic elements like header, nav, main, article, section, aside, and footer for better structure.",
        },
        {
          heading: "Multimedia Support",
          text: "Native support for audio and video elements without plugins.",
          code: `<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    Your browser doesn't support video.
</video>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser doesn't support audio.
</audio>`,
        },
        {
          heading: "Canvas and SVG",
          text: "Draw graphics on the fly with Canvas API and create scalable vector graphics with SVG.",
        },
      ],
    },
    semantic: {
      title: "Semantic HTML",
      description: "Write meaningful HTML that improves accessibility, SEO, and code maintainability.",
      sections: [
        {
          heading: "Why Semantic HTML?",
          text: "Semantic HTML uses elements that clearly describe their meaning to both the browser and developer, improving accessibility and SEO.",
        },
        {
          heading: "Semantic Structure",
          code: `<header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h1>Article Title</h1>
        <section>
            <h2>Section Heading</h2>
            <p>Content goes here...</p>
        </section>
    </article>

    <aside>
        <h3>Related Links</h3>
    </aside>
</main>

<footer>
    <p>&copy; 2025 LearnHub</p>
</footer>`,
        },
      ],
    },
    accessibility: {
      title: "Accessibility",
      description: "Create inclusive web experiences that work for everyone, including people with disabilities.",
      sections: [
        {
          heading: "ARIA Attributes",
          text: "Accessible Rich Internet Applications (ARIA) attributes help make web content more accessible to people with disabilities.",
        },
        {
          heading: "Best Practices",
          text: "Use semantic HTML, provide alt text for images, ensure proper heading hierarchy, use descriptive link text, and make forms accessible with labels.",
          code: `<!-- Good accessibility -->
<img src="logo.png" alt="Company Logo">

<label for="username">Username:</label>
<input type="text" id="username" name="username" aria-required="true">

<button aria-label="Close menu">×</button>

<nav aria-label="Main navigation">
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</nav>`,
        },
        {
          heading: "Keyboard Navigation",
          text: "Ensure all interactive elements are keyboard accessible using proper focus management and tabindex.",
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
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === topic.id
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
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {section.text}
                </p>
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