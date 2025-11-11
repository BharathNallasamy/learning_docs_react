import { useState } from "react";

const Java = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "☕" },
    { id: "spring", label: "Spring Framework", icon: "🌱" },
    { id: "boot", label: "Spring Boot", icon: "🚀" },
    { id: "rest", label: "REST APIs", icon: "🔌" },
    { id: "database", label: "Database", icon: "🗄️" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Java for Backend Development</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Java is one of the most popular programming languages for building enterprise-grade backend applications.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Java for Backend?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Platform independent (Write Once, Run Anywhere)</li>
                <li>Strong typing and OOP principles</li>
                <li>Robust ecosystem and libraries</li>
                <li>Excellent performance and scalability</li>
                <li>Enterprise-ready frameworks</li>
                <li>Large community and job market</li>
              </ul>
            </div>
          </div>
        );
      case "spring":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Spring Framework</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spring is a comprehensive framework for enterprise Java development.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Spring Component
@Component
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(id));
    }
}`}
              </pre>
            </div>
          </div>
        );
      case "boot":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Spring Boot</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spring Boot makes it easy to create stand-alone, production-grade Spring applications.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
}`}
              </pre>
            </div>
          </div>
        );
      case "rest":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Building REST APIs</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learn to create RESTful web services with Spring Boot.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productService.save(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        return productService.update(id, product);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.ok().build();
    }
}`}
              </pre>
            </div>
          </div>
        );
      case "database":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Database Integration</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Connect to databases using Spring Data JPA.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;

    // Getters and setters
}

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    List<User> findByEmailContaining(String email);
}`}
              </pre>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Java Spring Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Build enterprise-grade backend applications with Java and Spring Boot
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
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg transform scale-105"
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

export default Java;