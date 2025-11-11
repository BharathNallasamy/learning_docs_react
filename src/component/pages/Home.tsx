import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">Welcome to LearnHub</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              Your comprehensive learning platform for mastering web development and programming technologies
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/courses/computers-web"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Start Learning
              </Link>
              <Link
                to="/courses/html"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Courses */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600">
            Start your learning journey with our most popular courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link
            to="/courses/computers-web"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
          >
            <div className="text-5xl mb-4">🖥️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              How Computers & Web Work
            </h3>
            <p className="text-gray-600 mb-4">
              Understand the fundamentals of computing and how the internet works.
            </p>
            <span className="text-blue-600 font-semibold">Start Course →</span>
          </Link>

          <Link
            to="/courses/html"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
          >
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">HTML</h3>
            <p className="text-gray-600 mb-4">
              Learn the structure and building blocks of web pages.
            </p>
            <span className="text-blue-600 font-semibold">Start Course →</span>
          </Link>

          <Link
            to="/courses/css"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
          >
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">CSS</h3>
            <p className="text-gray-600 mb-4">
              Style and design beautiful, responsive web pages.
            </p>
            <span className="text-blue-600 font-semibold">Start Course →</span>
          </Link>

          <Link
            to="/courses/javascript"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
          >
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              JavaScript
            </h3>
            <p className="text-gray-600 mb-4">
              Add interactivity and dynamic features to your websites.
            </p>
            <span className="text-blue-600 font-semibold">Start Course →</span>
          </Link>
        </div>

        {/* Features Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnHub?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Comprehensive Courses
            </h3>
            <p className="text-gray-600">
              From basics to advanced topics, we cover everything you need to become a proficient developer.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Hands-on Practice
            </h3>
            <p className="text-gray-600">
              Learn by doing with interactive exercises and real-world projects.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Career Ready
            </h3>
            <p className="text-gray-600">
              Build a portfolio and gain the skills employers are looking for.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students learning to code and build amazing projects.
          </p>
          <Link
            to="/courses/computers-web"
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-block"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;