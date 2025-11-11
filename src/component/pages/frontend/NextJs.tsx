import { useState } from "react";

const NextJs = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "⚡" },
    { id: "routing", label: "Routing", icon: "🛣️" },
    { id: "ssr", label: "SSR & SSG", icon: "🔄" },
    { id: "api", label: "API Routes", icon: "🔌" },
    { id: "optimization", label: "Optimization", icon: "⚙️" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to Next.js</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Next.js is a React framework that enables server-side rendering, static site generation, and more for building production-ready applications.
            </p>

            <div className="bg-black border-l-4 border-white p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Why Next.js?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Server-Side Rendering (SSR) for better SEO</li>
                <li>Static Site Generation (SSG) for performance</li>
                <li>Built-in routing and code splitting</li>
                <li>API routes for backend functionality</li>
                <li>Image optimization out of the box</li>
                <li>Fast Refresh for instant feedback</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Create Next.js app
npx create-next-app@latest my-app

// Start development server
cd my-app
npm run dev

// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "routing":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Next.js Routing</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Next.js has a file-system based router. Any file in the pages directory automatically becomes a route.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">File-Based Routing</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// File structure
pages/
  index.js       → /
  about.js       → /about
  blog/
    index.js     → /blog
    [slug].js    → /blog/:slug
  user/
    [id].js      → /user/:id

// pages/blog/[slug].js
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Post: {slug}</h1>;
}`}
              </pre>
            </div>

            <div className="bg-black border-l-4 border-white p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Navigation</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/hello-world">Blog Post</Link>

      <button onClick={() => router.push('/dashboard')}>
        Go to Dashboard
      </button>
    </nav>
  );
}`}
              </pre>
            </div>
          </div>
        );

      case "ssr":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">SSR & SSG</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Next.js supports multiple rendering methods: Static Generation, Server-Side Rendering, and Incremental Static Regeneration.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Static Generation (SSG)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Pre-render at build time
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
    revalidate: 60 // ISR - regenerate every 60 seconds
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-black border-l-4 border-white p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Server-Side Rendering (SSR)</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Render on each request
export async function getServerSideProps(context) {
  const { req, res, query } = context;

  const response = await fetch(\`https://api.example.com/user/\${query.id}\`);
  const user = await response.json();

  return {
    props: { user }
  };
}

export default function UserProfile({ user }) {
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

      case "api":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">API Routes</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Next.js allows you to create API endpoints as serverless functions inside the pages/api directory.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creating API Routes</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World' });
}

// pages/api/users/[id].js
export default async function handler(req, res) {
  const { id } = req.query;
  const { method } = req;

  switch (method) {
    case 'GET':
      // Fetch user
      res.status(200).json({ id, name: 'John' });
      break;
    case 'PUT':
      // Update user
      res.status(200).json({ id, updated: true });
      break;
    case 'DELETE':
      // Delete user
      res.status(204).end();
      break;
    default:
      res.status(405).end();
  }
}`}
              </pre>
            </div>

            <div className="bg-black border-l-4 border-white p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Using API Routes</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Client-side fetch
export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data?.message}</div>;
}`}
              </pre>
            </div>
          </div>
        );

      case "optimization":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Performance Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Next.js provides built-in optimizations for images, fonts, and more.
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Image Optimization</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import Image from 'next/image';

export default function Hero() {
  return (
    <div>
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={1200}
        height={600}
        priority
        placeholder="blur"
      />
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-black border-l-4 border-white p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Performance Best Practices</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Use Image component for automatic optimization</li>
                <li>Implement code splitting with dynamic imports</li>
                <li>Use SSG whenever possible for best performance</li>
                <li>Optimize fonts with next/font</li>
                <li>Enable compression and caching</li>
                <li>Monitor performance with Next.js Analytics</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-16 border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Next.js Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The React Framework for Production - Build fast, scalable web applications
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-700">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === topic.id
                    ? "bg-white text-black shadow-lg transform scale-105"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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

export default NextJs;