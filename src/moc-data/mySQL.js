const MySQLData = [
    {
      id: 1,
      question: "What is MySQL?",
      answer: "MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). It is widely used for data storage, retrieval, and management in web applications.",
    },
    {
      id: 2,
      question: "What are the differences between MySQL and SQL?",
      answer: "SQL is a standard language for interacting with relational databases, while MySQL is a specific database management system that implements SQL. MySQL is one of the many databases that use SQL as their query language.",
    },
    {
      id: 3,
      question: "What are primary keys in MySQL?",
      answer: "A primary key is a unique identifier for each record in a MySQL table. It ensures that no two rows have the same value in the key column and is used for indexing and maintaining table integrity.",
    },
    {
      id: 4,
      question: "What is the difference between a primary key and a unique key in MySQL?",
      answer: "A primary key is a unique key that cannot contain NULL values, and each table can have only one primary key. A unique key, however, can contain NULL values and there can be multiple unique keys in a table.",
    },
    {
      id: 5,
      question: "What is a foreign key in MySQL?",
      answer: "A foreign key is a column or set of columns in one table that references the primary key in another table. It is used to maintain referential integrity between tables.",
    },
    {
      id: 6,
      question: "What are joins in MySQL?",
      answer: "Joins are used to combine rows from two or more tables based on a related column between them. Common types of joins include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.",
    },
    {
      id: 7,
      question: "What is the difference between DELETE and TRUNCATE in MySQL?",
      answer: "DELETE is a SQL command used to remove specific rows from a table and can include a WHERE clause. TRUNCATE removes all rows from a table, but it is faster and cannot be rolled back.",
    },
    {
      id: 8,
      question: "What is indexing in MySQL?",
      answer: "Indexing is a technique used to improve the speed of data retrieval from a database. Indexes create a data structure that makes queries faster by reducing the number of rows to be scanned.",
    },
    {
      id: 9,
      question: "What is normalization in MySQL?",
      answer: "Normalization is the process of organizing database tables and their relationships to minimize redundancy and dependency. It typically involves dividing a database into smaller tables and defining relationships between them.",
    },
    {
      id: 10,
      question: "What is a MySQL transaction?",
      answer: "A transaction is a sequence of one or more SQL operations that are executed as a single unit. Transactions ensure data consistency and can be committed or rolled back to maintain database integrity.",
    },
    {
      id: 11,
      question: "What are MySQL storage engines?",
      answer: "MySQL storage engines are mechanisms for storing, handling, and retrieving data. Common storage engines include InnoDB (supports transactions) and MyISAM (optimized for read-heavy operations).",
    },
    {
      id: 12,
      question: "What is a MySQL trigger?",
      answer: "A trigger is a set of SQL statements that are automatically executed in response to specific events on a table, such as INSERT, UPDATE, or DELETE operations.",
    },
    {
      id: 13,
      question: "What is the difference between CHAR and VARCHAR in MySQL?",
      answer: "CHAR is a fixed-length data type, while VARCHAR is a variable-length data type. CHAR is faster for fixed-size data, while VARCHAR is more efficient for data of varying lengths.",
    },
    {
      id: 14,
      question: "What is the MySQL command to create a new database?",
      answer: "The command to create a new database in MySQL is `CREATE DATABASE database_name;`.",
    },
    {
      id: 15,
      question: "How do you back up a MySQL database?",
      answer: "You can back up a MySQL database using the `mysqldump` command: `mysqldump -u [user] -p [database_name] > backup.sql`.",
    },
    {
      id: 16,
      question: "What is a view in MySQL?",
      answer: "A view is a virtual table in MySQL that is based on the result set of a SELECT query. Views simplify complex queries and improve data security by restricting access to specific data.",
    },
    {
      id: 17,
      question: "What are MySQL user privileges?",
      answer: "User privileges in MySQL determine what operations a user can perform on a database. Privileges include SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, etc.",
    },
    {
      id: 18,
      question: "What is a stored procedure in MySQL?",
      answer: "A stored procedure is a set of precompiled SQL statements that can be executed as a single unit. It is used to encapsulate business logic and improve performance by reducing client-server communication.",
    },
    {
      id: 19,
      question: "What is a MySQL cursor?",
      answer: "A cursor is a database object used to retrieve and manipulate rows from a result set one at a time. It is typically used in stored procedures to handle complex queries.",
    },
    {
      id: 20,
      question: "What is MySQL replication?",
      answer: "Replication is the process of copying data from one MySQL server (master) to one or more other servers (slaves) for redundancy, backup, or load balancing purposes.",
    },
  ];
  
  export default MySQLData;
  