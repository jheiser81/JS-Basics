
//#region WAYS TO USE JAVASCRIPT IN HTML
// There are three ways to use JavaScript in an HTML page. These are inline JavaScript, internal JavaScript, and external JavaScript.

// 1. INLINE JAVASCRIPT:
// When we use JavaScript within an HTML tag, we use the inline JavaScript. For example, we can use JavaScript in the onclick event of a button tag.
// <html>
// <body>
// <button onclick="msg()">Click Me</button>
// </body>
// </html>

// 2. INTERNAL JAVASCRIPT:
// When we use JavaScript within the script tag in an HTML page, we use the internal JavaScript. For example, we can use JavaScript within the script tag in the head or body section of an HTML page.
// <html>
// <head>
// <script>
// function msg()
// {
//     alert("Welcome to JavaScript");
// }
// </script>
// </head>
// <body>
// <button onclick="msg()">Click Me</button>
// </body>
// </html>

// 3. EXTERNAL JAVASCRIPT:
// When we use JavaScript within an external file and then use that file in an HTML page, we use the external JavaScript. For example, we can use JavaScript within an external file named script.js and then use that file in an HTML page using the script tag.
// <html>
// <head>
// <script src="script.js"></script>
// </head>
// <body>
// <button onclick="msg()">Click Me</button>
// </body>
// </html>

// Generally speaking, external JavaScript is the best way to use JavaScript in an HTML page. It is because external JavaScript code can be reused in multiple HTML pages. Also, it is easier to maintain the code in an external file.

// You can also run javascript code directly in a terminal window using the backend javascript engine node.js. This requires you to have node.js installed on your computer, as well as the npm package manager. You can install node.js from https://nodejs.org/en/download/. Once you have node.js installed, you can run javascript code in a terminal window using the following command: node filename.js

//#endregion

//#region VARIABLE DECLARATION IN JAVASCRIPT

// JavaScript is a loosely types language, meaning that you do not need to specify the data type of a variable when declaring it. Although this is sometimes convenient, it can also cause issues if you are not careful. For example, if you declare a variable and assign a string value to it, you can later assign a number to the same variable. This is not possible in a strongly typed language like C#.

// The rules for declaring variables in JavaScript are as follows:

// 1. A variable name must start with a letter, underscore (_), or dollar sign ($). It cannot start with a number.

// 2. A variable name cannot contain spaces. It must be a single word.

// 3. A variable name can only contain alpha-numeric characters and underscores.

// 4. A variable name cannot contain special characters such as exclamation mark (!), at sign (@), or semicolon (;).

// 5. Variables names are case-sensitive. For example, the variables name and Name are two different variables.

// 6. You cannot use reserved keywords as variable names. For example, you cannot use the keyword var as a variable name.

// 7. You cannot use the same variable name more than once in the same scope. For example, you cannot declare two variables with the same name within the same function.

// 8. Once a variable is declared, you must assign a value to it before using it. Otherwise, you will get an error.

// JavaScript has a few ways to declare variables.
// 1. var keyword (ES5) - This is the original way to declare variables in JavaScript. It is still used today, but it is not recommended for use in modern JavaScript, as it has some issues regarding scope.

// 2. let keyword (ES6) - This is the preferred way to declare variables in modern JavaScript. It is similar to the var keyword, but it has better scoping rules.

// 3. const keyword (ES6) - This is used to declare constants in JavaScript. Once a constant is declared, its value cannot be changed.

// The following example shows how to declare variables in JavaScript.
// var name = "John";
// let age = 25;
// const PI = 3.14;
//#endregion

//#region SCOPE OF VARIABLES IN JAVASCRIPT

// The scope of a variable determines where the variable can be accessed from. In JavaScript, there are two types of scope: global scope and local scope.

// 1. GLOBAL SCOPE:
// A variable declared outside a function has global scope. It can be accessed from anywhere in the code. For example, the following code declares a variable named name outside a function. Therefore, the variable has global scope.
// var name = "John";
// function msg()
// {
//     alert(name);
// }
// msg(); // John
// alert(name); // John

//The best way to declare global variables is to use the window object. For example, the following code declares a variable named name using the window object.
// window.name = "John";
// function msg()
// {
//     alert(window.name);
// }
// msg(); // John
// alert(window.name); // John

// 2. LOCAL SCOPE:
// A variable declared inside a function has local scope. It can only be accessed from within the function. For example, the following code declares a variable named name inside a function. Therefore, the variable has local scope.
// function msg()
// {
//     var name = "John";
//     alert(name);
// }
// msg(); // John
// alert(name); // Error
//#endregion

//#region DATA TYPES IN JAVASCRIPT

// JavaScript has the following data types:

// 1. Character - A character is a single character enclosed within single or double quotes. For example, 'A' and "A" are both characters.

// 2. String - A string is a sequence of characters enclosed within single or double quotes. For example, "Hello World" and 'Hello World' are both strings.

// 3. Number - A number can be an integer or a floating-point number. For example, 10 and 10.5 are both numbers.

// 4. Boolean - A boolean can be either true or false.

// 5. Undefined - A variable that has been declared but not assigned a value has the value undefined.

// 6. Null - A variable that has been explicitly assigned the value null has the value null.

// 7. Object - An object is a collection of key-value pairs. For example, {name: "John", age: 25} is an object.

// 8. Array - An array is a collection of values. For example, [1, 2, 3] is an array of numbers, and ["John", "Mary", "Mike"] is an array of strings.

// The following example shows how to declare variables of different data types in JavaScript.
// var name = "John"; // string
// var age = 25; // number
// var isMarried = false; // boolean
// var childrenNames = ["Alice", "Bob"]; // array
// var spouse = { name: "Mary", age: 25 }; // object
// var car = null; // null
// var job; // undefined
//#endregion

//#region TYPE CONVERSION IN JAVASCRIPT

// JavaScript is a loosely typed language, meaning that you do not need to specify the data type of a variable when declaring it. However, you can convert a value from one data type to another using the following methods:

// 1. toString() - This method converts a value to a string.

// 2. toNumber() - This method converts a value to a number.

// 3. toBoolean() - This method converts a value to a boolean.

// The following example shows how to convert a value from one data type to another in JavaScript.
// var age = 25; // number
// var ageAsString = age.toString(); // string
// var found = true; // boolean
// var foundAsNumber = Number(found); // this will print out 1, as 1=true and 0=false
// var foundAsString = found.toString(); // string
// var price = 19.95; // number
// var priceAsString = price.toString(); // string
// var priceAsBoolean = Boolean(price); // boolean will print as true
//#endregion

//#region OPERATORS IN JAVASCRIPT

// JavaScript has the following types of operators:

// 1. Arithmetic Operators - Arithmetic operators are used to perform arithmetic operations on numeric operands. For example, 1 + 2 is an arithmetic expression that uses the + operator to add two numeric operands 1 and 2. The following table lists the arithmetic operators in JavaScript:

// Operator	Description
// +	Addition (Also used for string concatenation)
// -	Subtraction
// *	Multiplication
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// 2. Assignment Operators - Assignment operators are used to assign values to variables. For example, x = 10 is an assignment expression that assigns the value 10 to the variable x. The following table lists the assignment operators in JavaScript:

// =	Assignment x = 10	        Same as: x = 10
// +=	Add and assign x += 5	    Same as: x = x + 5
// -=	Subtract and assign x -= 5	Same as: x = x - 5
// *=	Multiply and assign x *= 5	Same as: x = x * 5
// /=	Divide and assign x /= 5	Same as: x = x / 5
// %=	Modulus and assign x %= 5	Same as: x = x %

// 3. Comparison Operators - Comparison operators are used to compare two values. For example, x == y is a comparison expression that compares the value of x and y. The following table lists the comparison operators in JavaScript:

// ==	Equal to x == y
// ===	Equal value and equal type x === y
// !=	Not equal x != y
// !==	Not equal value or not equal type x !== y
// >	Greater than x > y
// <	Less than x < y
// >=	Greater than or equal to x >= y
// <=	Less than or equal to x <= y

// 4. Logical Operators - Logical operators are used to combine two or more conditions. For example, x > 5 && x < 10 is a logical expression that combines two conditions x > 5 and x < 10 using the && operator. The following table lists the logical operators in JavaScript:

// &&	Logical AND x > 5 && x < 10
// ||	Logical OR x > 5 || x < 10
// !	Logical NOT !(x > 5 && x < 10)

//#endregion
