# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AR

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented languages are used when you have a fixed set of requirements to build some functionality, and as your requirement changes, you add new functionality. This is accomplished by adding new classes which extends the existing methods, and there will be no changes done on the existing class.
Functional languages are preferred when you have a fixed set of requirements, and as your code changes, you mainly add new operations and methods on existing code. This can be achieved by adding new functions which compute with existing data, and the existing functions are left alone. Object-oriented languages typically allow for mutable state, meaning that the attributes of an object can change over time. In functional programming, Data immutability is a core concept in functional programming. When you need to modify data, you create new data structures with the desired changes. This immutability simplifies code and can cause debugging.

Researched answer: Object oriented programming is a programming paradigm in which you program using objects to represent things you are programming about (sometimes real world things). These objects could be data structures. The objects hold data about them in attributes. The attributes in the objects are manipulated through methods or functions that are given to the object. Functions on the other hand, provides the advantages like efficiency, lazy evaluation, nested functions, bug-free code, parallel programming. In simple language, functional programming is to write the function having statements to execute a particular task for the application. Each small function does its part and only its part. The function can be easily invoked and reused at any point. It also helps the code to be managed and the same thing or statements does not need to be written again and again. It allows for very modular and clean code that all works together in harmony.

2. Ruby has an implicit return. What does that mean?

Your answer: Ruby embraces implicit returns, a feature that eliminates the need for the "return" keyword when the final expression in a code path acts as the return value. In ruby's default state, "return" without an explicit argument yields "nil,"

Researched answer: In Ruby, implicit returns are a feature where you don't need to use the "return" keyword if the last expression in a code path serves as the return value. It's important to keep in mind that by default, "return" without an explicit argument returns "nil," which is considered a falsey value. Depending on the specific context and purpose of the code in a method, returning "nil" may or may not be essential.

3. What is a block in Ruby?

Your answer: A block, essentially, is the same thing as a method, except it does not have a name, and does not belong to an object. A ruby block is an anonymous piece of code, it can accept input in form of arguments (if it needs any), and it will return a value, but it does not have a name. Moreover, blocks can only be created by the way of passing them to a method when the method is called. Blocks are also just snippets of code that can be created to be executed later. Blocks are passed to methods that yield them within the do and end keywords. One of the many examples is the each method, which loops over enumerable objects.

Researched answer: A Ruby block is a section of code that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}. The do-end statement is usually used for blocks that span multiple lines, while {} is used for single line blocks. Blocks are anonymous functions that can have multiple arguments. The argument names are defined between two pipe.

4. How do you extract a single value from a Ruby hash?

Your answer: The Ruby Hash is a container for data where each piece of data is mapped to a Key. The data is called the Value. Keys can be either strings or symbols. Values can be anything, just like with arrays. A hash looks almost like an array, but with curly braces {} instead of hard ones [] There's no order to a hash unlike an array. you're accessing your data using strings.

Researched answer: In Ruby, you can access a value in a hash by using bracket notation. After the hash name, type the key in square brackets. For example, to access the value for the key "email", you would type the key name and chain the value in bracket notation. The would put the full users email once printed. You can also use the key() method to return the key for the first entry with a given value. The given value is passed as an argument to the key() method

5. STRETCH: What is a version manager?

Your answer: A version manager is simply a tool that allows the user to switch between different versions of software, in this case, Node.js. There are many different version managers out there to use. Moreover, Version control software keeps track of every modification to the code in a special kind of database such as mySQL, PostreSQL, and oracle are a few examples.

Researched answer: A version manager is a special program designed to handle language versions. With its help it became possible to install the required versions and switch between them. Unlike the package managers that come with operating systems, version managers always allow to install the latest versions of languages as soon as they come out. NVM is one example of this type of management system.

## Looking Ahead: Terms for Next Week

1. Test-driven development: Test Driven Development (TDD) is the software development process where developers write automated test scripts before writing functional code, ensuring code validity and minimizing test script duplication. This approach involves implementing code, writing tests, and running tests to verify the code's functionality. By refactoring and addressing failing tests, developers can continuously improve their codebase.

2. PostgreSQL: PostgreSQL stands out as a sophisticated, enterprise-grade relational database system that operates on an open-source foundation. It adeptly accommodates both SQL, which is relational in nature, and JSON, which is non-relational, for querying data.Benefiting from over two decades of active development by the open-source community, PostgreSQL enjoys a remarkable level of stability. This versatile database serves as the primary data repository for numerous web applications, mobile apps, and analytical platforms.

3. CRUD: CRUD, Which stands for create, read, update, and delete, In such apps, users must be able to create data, have access to the data in the UI by reading the data, update or edit the data, and delete the data. CRUD is common in constructing web applications, because it provides a memorable framework for reminding developers of how to construct full, usable models. 
