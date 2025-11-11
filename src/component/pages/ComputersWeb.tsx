import { useState } from "react";

const ComputersWeb = () => {
  const [activeTab, setActiveTab] = useState("program");

  const topics = [
    { id: "program", label: "Computer Program", icon: "💻" },
    { id: "internet", label: "The Internet", icon: "🌐" },
    { id: "client-server", label: "Client vs Server", icon: "🔄" },
    { id: "website", label: "Opening a Website", icon: "🚀" },
  ];

  const content = {
    program: {
      title: "What is a Computer Program?",
      description: "Understanding the foundation of how software works and communicates with hardware.",
      sections: [
        {
          heading: "Definition",
          text: "A computer program is a set of instructions written in a programming language that tells a computer what to do. It's like a recipe that the computer follows step by step to perform specific tasks.",
        },
        {
          heading: "How Programs Work",
          text: "Programs are written by developers in high-level programming languages (like JavaScript, Python, Java) and then converted into machine code (binary: 0s and 1s) that the computer's processor can understand and execute.",
          points: [
            "Source Code: Human-readable instructions written by programmers",
            "Compiler/Interpreter: Translates source code into machine code",
            "Execution: CPU processes the machine code instructions",
            "Output: Program produces results or performs actions",
          ],
        },
        {
          heading: "Types of Programs",
          text: "Programs can be categorized into different types based on their purpose:",
          points: [
            "System Software: Operating systems (Windows, macOS, Linux)",
            "Application Software: Web browsers, word processors, games",
            "Web Applications: Gmail, Facebook, online banking",
            "Mobile Apps: Instagram, WhatsApp, mobile games",
          ],
        },
        {
          heading: "Simple Program Example",
          code: `// JavaScript program that greets a user
function greetUser(name) {
    console.log("Hello, " + name + "!");
    console.log("Welcome to programming!");
}

// Execute the program
greetUser("Alice");

// Output:
// Hello, Alice!
// Welcome to programming!`,
        },
        {
          heading: "Key Concepts",
          points: [
            "Variables: Store data (like name, age, price)",
            "Functions: Reusable blocks of code that perform specific tasks",
            "Logic: Decision making (if/else statements)",
            "Loops: Repeat actions multiple times",
            "Input/Output: Getting data from users and showing results",
          ],
        },
      ],
    },
    internet: {
      title: "What is the Internet?",
      description: "Explore the global network that connects billions of devices worldwide.",
      sections: [
        {
          heading: "Definition",
          text: "The Internet is a global network of interconnected computers and devices that communicate using standardized protocols. It's essentially a massive network of networks spanning the entire world.",
        },
        {
          heading: "How the Internet Works",
          text: "The Internet works by breaking data into small packets and sending them across networks using a system of protocols:",
          points: [
            "Data Packets: Information is broken into small chunks",
            "Routing: Packets travel through multiple routers and networks",
            "Protocols: TCP/IP ensures packets arrive correctly",
            "Reassembly: Packets are put back together at destination",
          ],
        },
        {
          heading: "Key Components",
          text: "The Internet consists of several important components:",
          points: [
            "ISP (Internet Service Provider): Companies that provide internet access (Comcast, AT&T, Verizon)",
            "DNS (Domain Name System): Translates website names (google.com) into IP addresses (142.250.80.46)",
            "Servers: Computers that store and serve websites and data",
            "Routers: Direct data packets to their destination",
            "Cables: Fiber optic and copper cables that physically connect networks",
          ],
        },
        {
          heading: "IP Addresses",
          text: "Every device on the Internet has a unique IP address, like a postal address for data:",
          code: `// IPv4 Address Example
192.168.1.1

// IPv6 Address Example
2001:0db8:85a3:0000:0000:8a2e:0370:7334

// Domain to IP Translation
google.com → 142.250.80.46
facebook.com → 157.240.241.35`,
        },
        {
          heading: "Protocols",
          points: [
            "HTTP/HTTPS: Web page transfer (HTTPS is secure)",
            "TCP/IP: Core protocols for data transmission",
            "FTP: File transfer between computers",
            "SMTP: Sending emails",
            "DNS: Domain name resolution",
          ],
        },
        {
          heading: "Internet vs World Wide Web",
          text: "Important distinction: The Internet is the infrastructure (cables, routers, servers), while the World Wide Web (WWW) is a service that runs on top of the Internet, consisting of websites and web pages accessed through browsers.",
        },
      ],
    },
    "client-server": {
      title: "Client vs Server",
      description: "Understanding the relationship between clients and servers in web communication.",
      sections: [
        {
          heading: "What is a Client?",
          text: "A client is a device or program that requests services or resources from a server. In web development, the client is typically your web browser (Chrome, Firefox, Safari) running on your computer or phone.",
          points: [
            "Web Browsers: Chrome, Firefox, Safari, Edge",
            "Mobile Apps: Instagram, Twitter, Gmail apps",
            "Desktop Applications: Email clients, chat apps",
            "IoT Devices: Smart home devices, wearables",
          ],
        },
        {
          heading: "What is a Server?",
          text: "A server is a powerful computer that stores data and provides services to clients. When you visit a website, you're connecting to a web server that sends you the website's files.",
          points: [
            "Web Servers: Apache, Nginx, IIS",
            "Database Servers: MySQL, PostgreSQL, MongoDB",
            "Application Servers: Node.js, Java servers",
            "Cloud Servers: AWS, Google Cloud, Azure",
          ],
        },
        {
          heading: "Client-Server Communication",
          text: "The client-server model follows a request-response pattern:",
          code: `// How Client-Server Communication Works

1. CLIENT REQUEST
   User types: www.example.com
   Browser sends: GET /index.html HTTP/1.1

2. SERVER PROCESSING
   Server receives request
   Processes the request
   Retrieves requested data

3. SERVER RESPONSE
   Server sends: HTTP/1.1 200 OK
   Content-Type: text/html
   <html>...</html>

4. CLIENT RENDERING
   Browser receives HTML
   Renders the webpage
   User sees the content`,
        },
        {
          heading: "Request-Response Cycle",
          points: [
            "1. Client sends HTTP request to server",
            "2. Server processes the request",
            "3. Server queries database if needed",
            "4. Server sends HTTP response back to client",
            "5. Client renders the response",
          ],
        },
        {
          heading: "Types of Servers",
          text: "Different servers handle different types of requests:",
          points: [
            "Web Server: Serves HTML, CSS, JavaScript files",
            "API Server: Provides data in JSON/XML format",
            "Database Server: Stores and retrieves data",
            "File Server: Stores and shares files",
            "Mail Server: Handles email communication",
          ],
        },
        {
          heading: "Real-World Example",
          code: `// Ordering from a Restaurant (Client-Server Analogy)

CLIENT (You):
- Look at menu
- Place order: "I want a pizza"

SERVER (Kitchen):
- Receive order
- Prepare pizza
- Send pizza to customer

CLIENT (You):
- Receive pizza
- Enjoy the meal

// Same concept in web:
- Browser requests webpage
- Server processes request
- Server sends HTML/CSS/JS
- Browser displays webpage`,
        },
      ],
    },
    website: {
      title: "What Happens When You Open a Website?",
      description: "A detailed journey of what occurs behind the scenes when you visit a website.",
      sections: [
        {
          heading: "The Complete Journey",
          text: "When you type a URL and hit Enter, a complex series of events happens in milliseconds. Let's break down each step:",
        },
        {
          heading: "Step 1: URL Parsing",
          text: "Your browser breaks down the URL into components:",
          code: `https://www.example.com/page?query=value

Protocol: https://
Subdomain: www
Domain: example.com
Path: /page
Query: ?query=value

Browser identifies what needs to be fetched`,
        },
        {
          heading: "Step 2: DNS Lookup",
          text: "The browser needs to convert the domain name into an IP address:",
          points: [
            "1. Browser checks its cache for the IP address",
            "2. If not found, asks the operating system",
            "3. OS checks its cache",
            "4. If not found, queries DNS server",
            "5. DNS server returns IP address (e.g., 93.184.216.34)",
          ],
          code: `// DNS Resolution Process
www.example.com
    ↓
Check Browser Cache
    ↓
Check OS Cache
    ↓
Query DNS Server
    ↓
IP Address: 93.184.216.34`,
        },
        {
          heading: "Step 3: TCP Connection",
          text: "Browser establishes a connection with the server using TCP three-way handshake:",
          points: [
            "1. SYN: Client sends synchronization request",
            "2. SYN-ACK: Server acknowledges and sends its own SYN",
            "3. ACK: Client acknowledges server's SYN",
            "Connection established!",
          ],
        },
        {
          heading: "Step 4: TLS/SSL Handshake (for HTTPS)",
          text: "If the website uses HTTPS, a secure connection is established:",
          points: [
            "1. Client Hello: Browser sends supported encryption methods",
            "2. Server Hello: Server chooses encryption method",
            "3. Certificate: Server sends SSL certificate",
            "4. Browser verifies certificate",
            "5. Keys exchanged for secure communication",
          ],
        },
        {
          heading: "Step 5: HTTP Request",
          text: "Browser sends an HTTP request to the server:",
          code: `GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml
Accept-Language: en-US,en;q=0.9
Accept-Encoding: gzip, deflate, br
Connection: keep-alive`,
        },
        {
          heading: "Step 6: Server Processing",
          text: "The server receives and processes the request:",
          points: [
            "1. Web server (Nginx/Apache) receives request",
            "2. Routes request to appropriate handler",
            "3. Application server processes business logic",
            "4. Queries database if needed",
            "5. Generates response (HTML/JSON)",
          ],
        },
        {
          heading: "Step 7: HTTP Response",
          text: "Server sends response back to the browser:",
          code: `HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1234
Cache-Control: max-age=3600
Server: nginx/1.18.0

<!DOCTYPE html>
<html>
<head>
    <title>Example Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome!</h1>
    <script src="app.js"></script>
</body>
</html>`,
        },
        {
          heading: "Step 8: Browser Rendering",
          text: "Browser processes and displays the content:",
          points: [
            "1. Parse HTML and create DOM tree",
            "2. Parse CSS and create CSSOM tree",
            "3. Combine DOM + CSSOM = Render tree",
            "4. Calculate layout (size and position)",
            "5. Paint pixels on screen",
            "6. Download and execute JavaScript",
            "7. Load additional resources (images, fonts)",
          ],
        },
        {
          heading: "Step 9: Additional Resources",
          text: "Browser makes additional requests for resources mentioned in HTML:",
          points: [
            "CSS files (styles.css)",
            "JavaScript files (app.js)",
            "Images (logo.png, banner.jpg)",
            "Fonts (custom-font.woff2)",
            "API calls for dynamic data",
          ],
        },
        {
          heading: "Timeline Visualization",
          code: `[User types URL and hits Enter]
    ↓ ~10ms
[DNS Lookup: domain → IP address]
    ↓ ~20-100ms
[TCP Connection: Three-way handshake]
    ↓ ~10-50ms
[TLS Handshake: Secure connection]
    ↓ ~20-100ms
[HTTP Request: GET /index.html]
    ↓ ~50-200ms
[Server Processing: Generate response]
    ↓ ~50-200ms
[HTTP Response: HTML content]
    ↓ ~10-50ms
[Browser Rendering: Display page]
    ↓ ~100-500ms
[Load Additional Resources]
    ↓ ~200-1000ms
[Page Fully Loaded & Interactive]

Total: ~500ms - 3000ms (typically)`,
        },
        {
          heading: "Performance Optimization",
          text: "Ways to make websites load faster:",
          points: [
            "Caching: Store frequently accessed data",
            "CDN: Serve content from servers closer to users",
            "Compression: Reduce file sizes (gzip, Brotli)",
            "Minification: Remove unnecessary code",
            "Lazy Loading: Load resources only when needed",
            "HTTP/2 or HTTP/3: Faster protocols",
          ],
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
            <h1 className="text-5xl font-bold mb-4">How Computers & the Web Work</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Understand the fundamental concepts of computing and web technology. Learn what happens behind the scenes when you browse the internet.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Topic Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${activeTab === topic.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                <span className="text-2xl">{topic.icon}</span>
                <span className="text-center">{topic.label}</span>
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
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                    {section.text}
                  </p>
                )}
                {section.points && (
                  <ul className="space-y-2 mb-4">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 mt-1">▸</span>
                        <span className="text-gray-700 text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.code && (
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto mt-4">
                    <pre className="text-sm leading-relaxed">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Visual Diagram Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Reference
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  💡 Key Takeaways
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Programs are instructions for computers</li>
                  <li>• Internet is a global network of networks</li>
                  <li>• Clients request, servers respond</li>
                  <li>• Multiple steps happen when loading a website</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  ⚡ Remember
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• DNS translates domains to IP addresses</li>
                  <li>• HTTPS provides secure communication</li>
                  <li>• Browsers render HTML/CSS/JavaScript</li>
                  <li>• Speed depends on many factors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build for the Web?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Now that you understand how computers and the web work, start learning HTML, CSS, and JavaScript!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all">
                Start HTML Course
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-gray-300">
                Explore More Topics
              </button>
            </div>
          </div>
        </div>

        {/* Additional Learning Resources */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">📖</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Deep Dive Articles</h4>
            <p className="text-gray-600">
              Read in-depth articles about networking, protocols, and web architecture.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🎥</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Video Tutorials</h4>
            <p className="text-gray-600">
              Watch animated explanations of how the internet and web browsers work.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-3">🔬</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Labs</h4>
            <p className="text-gray-600">
              Experiment with network requests and see data flow in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputersWeb;
