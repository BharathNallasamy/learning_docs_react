import { useState } from "react";

const JavaSpring = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const topics = [
    { id: "intro", label: "Introduction", icon: "🌱" },
    { id: "core", label: "Spring Core", icon: "⚙️" },
    { id: "boot", label: "Spring Boot", icon: "🚀" },
    { id: "rest", label: "REST APIs", icon: "🔌" },
    { id: "jpa", label: "Spring Data JPA", icon: "🗄️" },
    { id: "security", label: "Spring Security", icon: "🔒" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Introduction to Spring Framework</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spring is the most popular Java framework for building enterprise applications. It provides comprehensive infrastructure support for developing Java applications.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Spring Framework?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dependency Injection for loose coupling</li>
                <li>Comprehensive infrastructure support</li>
                <li>Enterprise-ready features</li>
                <li>Simplified database access with Spring Data</li>
                <li>Built-in security with Spring Security</li>
                <li>Microservices support with Spring Cloud</li>
                <li>Large ecosystem and community</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Ecosystem</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`Spring Framework Components:

• Spring Core - Dependency Injection & IoC Container
• Spring Boot - Rapid application development
• Spring MVC - Web applications and REST APIs
• Spring Data - Database access and repositories
• Spring Security - Authentication and authorization
• Spring Cloud - Microservices and distributed systems
• Spring Batch - Batch processing
• Spring Integration - Enterprise integration patterns`}
              </pre>
            </div>
          </div>
        );

      case "core":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Spring Core - IoC & Dependency Injection</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The core of Spring Framework is the Inversion of Control (IoC) container that manages object lifecycle and dependencies.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dependency Injection</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Component annotation
@Component
public class UserService {
    private final UserRepository userRepository;

    // Constructor injection (recommended)
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
    }
}

// Repository
@Repository
public class UserRepository {
    // Database operations
}

// Configuration
@Configuration
public class AppConfig {
    @Bean
    public EmailService emailService() {
        return new EmailServiceImpl();
    }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bean Scopes</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Singleton (default) - one instance per container
@Component
@Scope("singleton")
public class SingletonBean { }

// Prototype - new instance each time
@Component
@Scope("prototype")
public class PrototypeBean { }

// Request - one instance per HTTP request
@Component
@Scope("request")
public class RequestBean { }

// Session - one instance per HTTP session
@Component
@Scope("session")
public class SessionBean { }`}
              </pre>
            </div>
          </div>
        );

      case "boot":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Spring Boot</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Spring Boot makes it easy to create stand-alone, production-grade Spring applications with minimal configuration.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started with Spring Boot</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Main Application Class
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// application.properties
server.port=8080
spring.application.name=my-app
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Configuration</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Spring Boot automatically configures:
// - Embedded server (Tomcat, Jetty)
// - Database connections
// - Template engines
// - Security defaults
// - Logging

// Custom configuration
@Configuration
public class CustomConfig {
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
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
              Create RESTful web services with Spring Boot and Spring MVC.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">REST Controller</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // GET all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    // GET user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

    // POST create user
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

    // PUT update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody User user) {
        User updatedUser = userService.update(id, user);
        return ResponseEntity.ok(updatedUser);
    }

    // DELETE user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Request Validation & Exception Handling</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Entity with validation
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50)
    private String name;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @Min(value = 18, message = "Age must be at least 18")
    private Integer age;
}

// Global exception handler
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(
            ResourceNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(
            HttpStatus.NOT_FOUND.value(),
            ex.getMessage(),
            LocalDateTime.now()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String field = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            errors.put(field, message);
        });
        return ResponseEntity.badRequest().body(errors);
    }
}`}
              </pre>
            </div>
          </div>
        );

      case "jpa":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Spring Data JPA</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simplify database access with Spring Data JPA repositories and query methods.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">JPA Entity & Repository</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// Entity
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Getters, setters, constructors
}

// Repository
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query methods
    Optional<User> findByUsername(String username);
    List<User> findByEmailContaining(String email);
    List<User> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);

    // Custom query
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain")
    List<User> findByEmailDomain(@Param("domain") String domain);

    // Native query
    @Query(value = "SELECT * FROM users WHERE active = true",
           nativeQuery = true)
    List<User> findActiveUsers();
}`}
              </pre>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationships & Pagination</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// One-to-Many relationship
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private BigDecimal total;
}

// Pagination and sorting
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Page<User> getUsers(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(
            page,
            size,
            Sort.by(sortBy).descending()
        );
        return userRepository.findAll(pageable);
    }

    // Specification for dynamic queries
    public List<User> searchUsers(String name, String email) {
        Specification<User> spec = Specification
            .where(name != null ? hasName(name) : null)
            .and(email != null ? hasEmail(email) : null);
        return userRepository.findAll(spec);
    }
}`}
              </pre>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Spring Security</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Implement authentication and authorization in your Spring applications.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Configuration</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .httpBasic();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">JWT Authentication</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`// JWT Filter
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        String token = getJwtFromRequest(request);

        if (StringUtils.hasText(token) && tokenProvider.validateToken(token)) {
            String username = tokenProvider.getUsernameFromToken(token);
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities()
                );

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }
}

// Auth Controller
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getUsername(),
                request.getPassword()
            )
        );

        String token = jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtResponse(token));
    }
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Java Spring Framework Course</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Build enterprise-grade backend applications with Spring Boot
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
                    ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg transform scale-105"
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

export default JavaSpring;