const SpringBootData = [
    {
      id: 1,
      question: "What is Spring Boot?",
      answer: "Spring Boot is a Java-based framework that simplifies the development of stand-alone, production-grade Spring-based applications. It provides easy configurations and conventions over configuration, enabling developers to focus on business logic rather than infrastructure.",
    },
    {
      id: 2,
      question: "What are the advantages of using Spring Boot?",
      answer: "Spring Boot simplifies application development by eliminating the need for extensive configuration. It includes embedded servers like Tomcat, Jetty, and Undertow, supports microservices architecture, and has built-in support for Spring's various components, such as Spring Data, Spring Security, and Spring MVC.",
    },
    {
      id: 3,
      question: "What is the difference between Spring and Spring Boot?",
      answer: "Spring is a comprehensive framework for building enterprise-grade applications, whereas Spring Boot is an extension of the Spring framework that simplifies the setup and configuration of Spring applications. Spring Boot reduces boilerplate code and speeds up development.",
    },
    {
      id: 4,
      question: "What are Spring Boot starters?",
      answer: "Spring Boot starters are pre-configured sets of dependencies that you can include in your project. They simplify dependency management and eliminate the need for complex configurations for common tasks like web development, security, and messaging.",
    },
    {
      id: 5,
      question: "What is Spring Boot auto-configuration?",
      answer: "Spring Boot auto-configuration automatically configures beans based on the classpath and other properties, which helps eliminate the need for manual configuration. It can automatically set up components like a data source or a web server.",
    },
    {
      id: 6,
      question: "How do you run a Spring Boot application?",
      answer: "You can run a Spring Boot application by executing the `main` method in the application class (annotated with `@SpringBootApplication`). Alternatively, you can run it as a standalone JAR file using the `java -jar` command.",
    },
    {
      id: 7,
      question: "What is the purpose of the `@SpringBootApplication` annotation?",
      answer: "The `@SpringBootApplication` annotation is a convenience annotation that combines three commonly used annotations: `@Configuration`, `@EnableAutoConfiguration`, and `@ComponentScan`. It marks the main class of a Spring Boot application.",
    },
    {
      id: 8,
      question: "What is Spring Boot Actuator?",
      answer: "Spring Boot Actuator provides production-ready features like health checks, metrics, application environment information, and monitoring. It helps developers keep track of application health and provides useful endpoints for management.",
    },
    {
      id: 9,
      question: "What are Spring Boot profiles?",
      answer: "Spring Boot profiles are a way to define different configurations for different environments (e.g., development, testing, production). Profiles allow you to specify environment-specific settings for things like databases, logging, and other application parameters.",
    },
    {
      id: 10,
      question: "How do you define properties in Spring Boot?",
      answer: "In Spring Boot, properties can be defined in `application.properties` or `application.yml` files. These properties can be used to configure various aspects of the application, such as server port, database settings, and logging configuration.",
    },
    {
      id: 11,
      question: "What is Spring Boot's embedded server?",
      answer: "Spring Boot comes with embedded web servers like Tomcat, Jetty, and Undertow. This allows you to run the application as a standalone Java application, without needing to deploy it to a separate web server.",
    },
    {
      id: 12,
      question: "What is the use of `@RequestMapping` in Spring Boot?",
      answer: "`@RequestMapping` is used to map web requests to handler methods of MVC and REST controllers in Spring Boot. It can be applied at the class or method level to handle HTTP requests.",
    },
    {
      id: 13,
      question: "What are Spring Boot dependencies?",
      answer: "Spring Boot dependencies are libraries or frameworks that your application needs. These dependencies are managed via Maven or Gradle and are automatically included through Spring Boot starters to simplify dependency management.",
    },
    {
      id: 14,
      question: "What is a Spring Boot REST API?",
      answer: "A Spring Boot REST API is an API developed using Spring Boot that provides data and functionality through HTTP methods like GET, POST, PUT, and DELETE. It is commonly used in microservices architectures and web applications.",
    },
    {
      id: 15,
      question: "How do you handle exceptions in Spring Boot?",
      answer: "In Spring Boot, exceptions can be handled globally using `@ControllerAdvice` or locally with `@ExceptionHandler`. You can also use `ResponseEntity` to customize the response for error scenarios.",
    },
    {
      id: 16,
      question: "What is Spring Data JPA?",
      answer: "Spring Data JPA is a part of the Spring Data family, simplifying database interactions by using Java Persistence API (JPA). It provides repositories for CRUD operations and integrates with Hibernate for ORM (Object-Relational Mapping).",
    },
    {
      id: 17,
      question: "What is the use of `@Entity` annotation in Spring Boot?",
      answer: "`@Entity` is used to mark a class as a JPA entity. It represents a table in the database and is used with Spring Data JPA to map Java objects to database tables.",
    },
    {
      id: 18,
      question: "What is Spring Boot security?",
      answer: "Spring Boot security is a module that provides authentication and authorization mechanisms to protect applications. It is commonly used with Spring Security to secure REST APIs, web applications, and microservices.",
    },
    {
      id: 19,
      question: "What is a Spring Boot microservice?",
      answer: "A Spring Boot microservice is a small, independently deployable service built using Spring Boot, following the principles of microservices architecture. It is loosely coupled and can communicate with other microservices using REST APIs or messaging systems.",
    },
    {
      id: 20,
      question: "What is Spring Boot's `@Value` annotation?",
      answer: "The `@Value` annotation is used in Spring Boot to inject values from properties files into fields, methods, or constructor parameters in Spring-managed beans.",
    },
    {
      id: 21,
      question: "What is Spring Boot DataSource?",
      answer: "A Spring Boot DataSource is a configuration that connects the application to a database. It can be set up automatically or manually using properties such as JDBC URL, username, password, and driver class.",
    },
    {
      id: 22,
      question: "What is Spring Boot testing?",
      answer: "Spring Boot testing provides support for unit tests and integration tests using `@SpringBootTest`, `@WebMvcTest`, and `@DataJpaTest` annotations. It helps test various layers of the application without needing to deploy it.",
    },
    {
      id: 23,
      question: "How do you handle logging in Spring Boot?",
      answer: "Spring Boot uses SLF4J and Logback for logging by default. You can configure the logging level and output format in the `application.properties` or `application.yml` file.",
    },
    {
      id: 24,
      question: "What is Spring Boot starter web?",
      answer: "Spring Boot starter web is a starter dependency that sets up the basic components required to create web applications, including RESTful APIs. It includes libraries for Spring MVC and embedded web servers like Tomcat.",
    },
    {
      id: 25,
      question: "What is Spring Boot validation?",
      answer: "Spring Boot validation is used to enforce constraints on input data. It integrates with JSR-303 and JSR-380 annotations (e.g., `@NotNull`, `@Size`) to validate user input in request bodies and form data.",
    },
    {
      id: 26,
      question: "How do you connect Spring Boot with a database?",
      answer: "Spring Boot provides automatic configuration for connecting to a database. By specifying database connection properties in `application.properties`, Spring Boot will set up a connection pool and integrate with JPA or JDBC.",
    },
    {
      id: 27,
      question: "What is Spring Boot DevTools?",
      answer: "Spring Boot DevTools provides tools to improve development workflow, including automatic restarts, live reload, and enhanced debugging.",
    },
    {
      id: 28,
      question: "What is Spring Boot WebFlux?",
      answer: "Spring Boot WebFlux is a reactive programming framework that allows for building non-blocking, asynchronous applications. It supports reactive programming paradigms using Project Reactor.",
    },
    {
      id: 29,
      question: "What is Spring Boot Thymeleaf?",
      answer: "Spring Boot Thymeleaf is a template engine used for rendering web pages. It provides an elegant way to write server-side templates and is used for generating dynamic content in web applications.",
    },
    {
      id: 30,
      question: "How do you monitor a Spring Boot application?",
      answer: "You can monitor a Spring Boot application using Spring Boot Actuator, which provides metrics, health checks, and application information. Additionally, you can integrate monitoring tools like Prometheus or Micrometer.",
    }
  ];
  
  export default SpringBootData;
  