import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './component/common/ProtectedRoute'
import Header from './component/common/header/Header'
import Login from './loginCredentials/Login'
import Home from './component/pages/Home'
import Html from './component/pages/Html'
import ComputersWeb from './component/pages/ComputersWeb'
import Css from './component/pages/Css'
import Javascript from './component/pages/Javascript'
import ReactCourse from './component/pages/React'
import Angular from './component/pages/Angular'
import Java from './component/pages/Java'
// Frontend courses
import NextJs from './component/pages/frontend/NextJs'
import TypeScript from './component/pages/frontend/TypeScript'
// Backend courses
import NodeJs from './component/pages/backend/NodeJs'
import ExpressJs from './component/pages/backend/ExpressJs'
import MongoDB from './component/pages/backend/MongoDB'
import JavaSpring from './component/pages/backend/JavaSpring'
// Database courses
import MySQL from './component/pages/database/MySQL'
import PostgreSQL from './component/pages/database/PostgreSQL'
import SQLBasics from './component/pages/database/SQLBasics'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route - Login */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="min-h-screen">
                  {/* Header */}
                  <Header />

                  {/* Routes */}
                  <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<Home />} />

                    {/* Basics of Web Routes */}
                    <Route path="courses/computers-web" element={<ComputersWeb />} />
                    <Route path="courses/html" element={<Html />} />

                    {/* Individual topic routes */}
                    <Route path="courses/computers-web/program" element={<ComputersWeb />} />
                    <Route path="courses/computers-web/internet" element={<ComputersWeb />} />
                    <Route path="courses/computers-web/client-server" element={<ComputersWeb />} />
                    <Route path="courses/computers-web/website" element={<ComputersWeb />} />

                    <Route path="courses/html/basics" element={<Html />} />
                    <Route path="courses/html/forms" element={<Html />} />
                    <Route path="courses/html/html5" element={<Html />} />
                    <Route path="courses/html/semantic" element={<Html />} />
                    <Route path="courses/html/accessibility" element={<Html />} />

                    {/* CSS and JavaScript Routes */}
                    <Route path="courses/css" element={<Css />} />
                    <Route path="courses/javascript" element={<Javascript />} />

                    {/* CSS topic routes */}
                    <Route path="courses/css/basics" element={<Css />} />
                    <Route path="courses/css/flexbox" element={<Css />} />
                    <Route path="courses/css/grid" element={<Css />} />
                    <Route path="courses/css/animations" element={<Css />} />
                    <Route path="courses/css/responsive" element={<Css />} />
                    <Route path="courses/css/variables" element={<Css />} />
                    <Route path="courses/css/sass" element={<Css />} />

                    {/* JavaScript topic routes */}
                    <Route path="courses/js/fundamentals" element={<Javascript />} />
                    <Route path="courses/js/es6" element={<Javascript />} />
                    <Route path="courses/js/dom" element={<Javascript />} />
                    <Route path="courses/js/async" element={<Javascript />} />
                    <Route path="courses/js/promises" element={<Javascript />} />
                    <Route path="courses/js/oop" element={<Javascript />} />
                    <Route path="courses/js/modules" element={<Javascript />} />
                    <Route path="courses/js/testing" element={<Javascript />} />

                    {/* Frontend Technology Routes */}
                    <Route path="courses/react" element={<ReactCourse />} />
                    <Route path="courses/angular" element={<Angular />} />
                    <Route path="courses/nextjs" element={<NextJs />} />
                    <Route path="courses/typescript" element={<TypeScript />} />
                    <Route path="courses/java" element={<Java />} />

                    {/* Backend Technology Routes */}
                    <Route path="courses/nodejs" element={<NodeJs />} />
                    <Route path="courses/expressjs" element={<ExpressJs />} />
                    <Route path="courses/mongodb" element={<MongoDB />} />
                    <Route path="courses/java-spring" element={<JavaSpring />} />

                    {/* Database Technology Routes */}
                    <Route path="courses/mysql" element={<MySQL />} />
                    <Route path="courses/postgresql" element={<PostgreSQL />} />
                    <Route path="courses/sql-basics" element={<SQLBasics />} />

                    {/* Fallback route */}
                    <Route path="*" element={<Home />} />
                  </Routes>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
