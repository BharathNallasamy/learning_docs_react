export interface Topic {
  id: number;
  name: string;
  href: string;
}

export interface DropdownItem {
  id: number;
  label: string;
  href: string;
  icon?: string;
  topics?: Topic[];
  hasNestedDropdown?: boolean;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface HeaderData {
  logo: {
    text: string;
    href: string;
  };
  navigation: NavLink[];
  searchPlaceholder: string;
  userActions: {
    login: string;
    signup: string;
  };
}

export const headerData: HeaderData = {
  logo: {
    text: "LearnHub",
    href: "/",
  },
  navigation: [
    {
      id: 1,
      label: "Basics of Web",
      href: "/learn",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 1,
          label: "How Computers & Web Work",
          href: "/courses/computers-web",
          icon: "🖥️",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "What is a Computer Program", href: "/courses/computers-web/program" },
            { id: 2, name: "What is the Internet", href: "/courses/computers-web/internet" },
            { id: 3, name: "Client vs Server", href: "/courses/computers-web/client-server" },
            { id: 4, name: "Opening a Website", href: "/courses/computers-web/website" },
          ],
        },
        {
          id: 2,
          label: "HTML",
          href: "/courses/html",
          icon: "🌐",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "HTML Basics", href: "/courses/html/basics" },
            { id: 2, name: "HTML Forms", href: "/courses/html/forms" },
            { id: 3, name: "HTML5 Features", href: "/courses/html/html5" },
            { id: 4, name: "Semantic HTML", href: "/courses/html/semantic" },
            { id: 5, name: "Accessibility", href: "/courses/html/accessibility" },
          ],
        },
        {
          id: 3,
          label: "CSS",
          href: "/courses/css",
          icon: "🎨",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "CSS Basics", href: "/courses/css/basics" },
            { id: 2, name: "Flexbox", href: "/courses/css/flexbox" },
            { id: 3, name: "Grid Layout", href: "/courses/css/grid" },
            { id: 4, name: "Animations", href: "/courses/css/animations" },
            { id: 5, name: "Responsive Design", href: "/courses/css/responsive" },
            { id: 6, name: "CSS Variables", href: "/courses/css/variables" },
            { id: 7, name: "Sass/SCSS", href: "/courses/css/sass" },
          ],
        },
        {
          id: 4,
          label: "JavaScript",
          href: "/courses/javascript",
          icon: "⚡",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "JS Fundamentals", href: "/courses/js/fundamentals" },
            { id: 2, name: "ES6+ Features", href: "/courses/js/es6" },
            { id: 3, name: "DOM Manipulation", href: "/courses/js/dom" },
            { id: 4, name: "Async JavaScript", href: "/courses/js/async" },
            { id: 5, name: "Promises & Async/Await", href: "/courses/js/promises" },
            { id: 6, name: "OOP in JavaScript", href: "/courses/js/oop" },
            { id: 7, name: "Modules", href: "/courses/js/modules" },
            { id: 8, name: "Testing", href: "/courses/js/testing" },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Technology",
      href: "/technology",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 1,
          label: "Frontend",
          href: "/technology/frontend",
          icon: "💻",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "React.js", href: "/courses/react" },
            { id: 2, name: "Angular", href: "/courses/angular" },
            { id: 5, name: "Next.js", href: "/technology/frontend/nextjs" },
            { id: 6, name: "TypeScript", href: "/technology/frontend/typescript" },
          ],
        },
        {
          id: 2,
          label: "Backend",
          href: "/technology/backend",
          icon: "⚙️",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "Node.js", href: "/courses/nodejs" },
            { id: 2, name: "Express.js", href: "/courses/expressjs" },
            { id: 3, name: "Java Spring", href: "/courses/java" },
            { id: 4, name: "Python Django", href: "/technology/backend/django" },
            { id: 5, name: "PHP Laravel", href: "/technology/backend/laravel" },
            { id: 6, name: "Ruby on Rails", href: "/technology/backend/rails" },
          ],
        },
        {
          id: 3,
          label: "Database",
          href: "/technology/database",
          icon: "🗄️",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "MySQL", href: "/technology/database/mysql" },
            { id: 2, name: "PostgreSQL", href: "/technology/database/postgresql" },
            { id: 3, name: "MongoDB", href: "/courses/mongodb" },
            { id: 4, name: "Redis", href: "/technology/database/redis" },
            { id: 5, name: "Firebase", href: "/technology/database/firebase" },
            { id: 6, name: "SQL Basics", href: "/technology/database/sql" },
          ],
        },
        {
          id: 4,
          label: "DevOps",
          href: "/technology/devops",
          icon: "🚀",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "Docker", href: "/technology/devops/docker" },
            { id: 2, name: "Kubernetes", href: "/technology/devops/kubernetes" },
            { id: 3, name: "Jenkins", href: "/technology/devops/jenkins" },
            { id: 4, name: "GitHub Actions", href: "/technology/devops/github-actions" },
            { id: 5, name: "AWS", href: "/technology/devops/aws" },
            { id: 6, name: "Azure", href: "/technology/devops/azure" },
          ],
        },
        {
          id: 5,
          label: "Mobile",
          href: "/technology/mobile",
          icon: "📱",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "React Native", href: "/technology/mobile/react-native" },
            { id: 2, name: "Flutter", href: "/technology/mobile/flutter" },
            { id: 3, name: "iOS Swift", href: "/technology/mobile/ios-swift" },
            { id: 4, name: "Android Kotlin", href: "/technology/mobile/android-kotlin" },
            { id: 5, name: "Ionic", href: "/technology/mobile/ionic" },
            { id: 6, name: "Xamarin", href: "/technology/mobile/xamarin" },
          ],
        },
        {
          id: 6,
          label: "AI/ML",
          href: "/technology/ai-ml",
          icon: "🤖",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "Python ML", href: "/technology/ai-ml/python-ml" },
            { id: 2, name: "TensorFlow", href: "/technology/ai-ml/tensorflow" },
            { id: 3, name: "PyTorch", href: "/technology/ai-ml/pytorch" },
            { id: 4, name: "Natural Language Processing", href: "/technology/ai-ml/nlp" },
            { id: 5, name: "Computer Vision", href: "/technology/ai-ml/computer-vision" },
            { id: 6, name: "Deep Learning", href: "/technology/ai-ml/deep-learning" },
          ],
        },
      ],
    },
    {
      id: 3,
      label: "Roadmaps",
      href: "/roadmaps",
      hasDropdown: true,
      dropdownItems: [
        {
          id: 1,
          label: "Frontend Roadmap",
          href: "/roadmap/frontend",
          icon: "🎨",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "HTML & CSS", href: "/roadmap/frontend/html-css" },
            { id: 2, name: "JavaScript", href: "/roadmap/frontend/javascript" },
            { id: 3, name: "React.js", href: "/roadmap/frontend/react" },
            { id: 4, name: "Vue.js", href: "/roadmap/frontend/vue" },
            { id: 5, name: "Angular", href: "/roadmap/frontend/angular" },
            { id: 6, name: "TypeScript", href: "/roadmap/frontend/typescript" },
            { id: 7, name: "Testing", href: "/roadmap/frontend/testing" },
          ],
        },
        {
          id: 2,
          label: "Backend Roadmap",
          href: "/roadmap/backend",
          icon: "⚙️",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "Node.js", href: "/roadmap/backend/nodejs" },
            { id: 2, name: "Python", href: "/roadmap/backend/python" },
            { id: 3, name: "Java Spring", href: "/roadmap/backend/java-spring" },
            { id: 4, name: "Databases", href: "/roadmap/backend/databases" },
            { id: 5, name: "APIs & REST", href: "/roadmap/backend/apis" },
            { id: 6, name: "Authentication", href: "/roadmap/backend/auth" },
            { id: 7, name: "Microservices", href: "/roadmap/backend/microservices" },
          ],
        },
        {
          id: 3,
          label: "DevOps Roadmap",
          href: "/roadmap/devops",
          icon: "🚀",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "Linux Basics", href: "/roadmap/devops/linux" },
            { id: 2, name: "Git & GitHub", href: "/roadmap/devops/git" },
            { id: 3, name: "Docker", href: "/roadmap/devops/docker" },
            { id: 4, name: "Kubernetes", href: "/roadmap/devops/kubernetes" },
            { id: 5, name: "CI/CD", href: "/roadmap/devops/cicd" },
            { id: 6, name: "AWS/Azure/GCP", href: "/roadmap/devops/cloud" },
            { id: 7, name: "Monitoring", href: "/roadmap/devops/monitoring" },
          ],
        },
        {
          id: 4,
          label: "Full Stack Roadmap",
          href: "/roadmap/fullstack",
          icon: "💼",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "MERN Stack", href: "/roadmap/fullstack/mern" },
            { id: 2, name: "MEAN Stack", href: "/roadmap/fullstack/mean" },
            { id: 3, name: "Django Stack", href: "/roadmap/fullstack/django" },
            { id: 4, name: "Java Full Stack", href: "/roadmap/fullstack/java" },
            { id: 5, name: "Deployment", href: "/roadmap/fullstack/deployment" },
            { id: 6, name: "Security", href: "/roadmap/fullstack/security" },
          ],
        },
        {
          id: 5,
          label: "Mobile Dev Roadmap",
          href: "/roadmap/mobile",
          icon: "📱",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "React Native", href: "/roadmap/mobile/react-native" },
            { id: 2, name: "Flutter", href: "/roadmap/mobile/flutter" },
            { id: 3, name: "iOS Development", href: "/roadmap/mobile/ios" },
            { id: 4, name: "Android Development", href: "/roadmap/mobile/android" },
            { id: 5, name: "Mobile UI/UX", href: "/roadmap/mobile/ui-ux" },
            { id: 6, name: "App Deployment", href: "/roadmap/mobile/deployment" },
          ],
        },
        {
          id: 6,
          label: "Data Science Roadmap",
          href: "/roadmap/data-science",
          icon: "📊",
          hasNestedDropdown: true,
          topics: [
            { id: 1, name: "Python for Data", href: "/roadmap/data-science/python" },
            { id: 2, name: "Statistics", href: "/roadmap/data-science/statistics" },
            { id: 3, name: "Machine Learning", href: "/roadmap/data-science/ml" },
            { id: 4, name: "Deep Learning", href: "/roadmap/data-science/dl" },
            { id: 5, name: "Data Visualization", href: "/roadmap/data-science/visualization" },
            { id: 6, name: "Big Data", href: "/roadmap/data-science/big-data" },
          ],
        },
      ],
    },
  ],
  searchPlaceholder: "Search courses, tutorials...",
  userActions: {
    login: "Login",
    signup: "Sign Up",
  },
};

export const roadMaps = [
  {
    id: 1,
    title: "JavaScript",
    href: "/roadmap/javascript",
  },
  {
    id: 2,
    title: "Angular",
    href: "/roadmap/angular",
  },
  {
    id: 3,
    title: "React",
    href: "/roadmap/react",
  },
  {
    id: 4,
    title: "Node.js",
    href: "/roadmap/nodejs",
  },
];

export const loginSignup = [
  {
    id: 1,
    label: "Login",
    href: "/login",
    variant: "outline" as const,
  },
  {
    id: 2,
    label: "Sign Up",
    href: "/signup",
    variant: "primary" as const,
  },
];