// 1. Variables, Data types, I/O:
// ```pseudo
// DECLARE variableA, variableB
// variableA = some data
// variableB = some other data
// SWAP variableA, variableB
// DISPLAY variableA, variableB
// ```

let a = 5;
let b = "hats";
console.log(a, b);

// swap the variables
//turn this into a function later
let temp = a;
a = b;
b = temp;
console.log(a, b);
//declare temp = var1, which is 5.
//Temp now holds the value 5.
//declare var1 (5) = var2, which has the value 'hats'.
//Var1 now holds the value 'hats'
//declare var2 to be the value of temp, which is currently 5
//var1 is now 'hats' and var2 is now 5

// 2. String Operations:
// ```pseudo
// DECLARE author, quote
// author = 'Name'
// quote = 'Their quote'
// DISPLAY 'I’m inspired by this quote from ', author, ': ', quote
// ```

let author = "Elizabath Sumner";
let quote =
  "Success is not built on success. It's built on failure. It's built on frustration. Sometimes it's built on catastrophe.";
console.log(
  "I am inspired by this quote from " + author + ", who once said: " + quote
); //regular concat

console.log(
  `I am inspired by this quote from ${author}, who once said ${quote}`
); //interpolated string. Must remember the ``

// 3. Math Operators:
// ```pseudo
// DECLARE numA, numB, numC
// numA = 5 + 15 * 3
// numB = 100 / 5 - 5
// numC = numA - numB
// DISPLAY numC
// numC = 15 % 4
// DISPLAY numC
// ```

let numA, numB, numC;
numA = 5 + 15 * 3;
numB = 100 / 5 - 5;
numC = numA - numB;
console.log(numC);
numC = 15 % 4;
console.log(numC);

// 4. Conditional Statements:
// ```pseudo
// DECLARE number
// IF number MOD 2 == 0 THEN
//     DISPLAY 'Number is even'
// ELSE
//     DISPLAY 'Number is odd'
// END IF

let number = +prompt("Input a number.");
if (number % 2 == 0) 
{
  alert("The number is even.");
} 
else 
{
  alert("The number is odd.");
}

// DECLARE year
// IF year MOD 4 == 0 AND (year MOD 100 != 0 OR year MOD 400 == 0) THEN
//     DISPLAY 'Leap year'
// ELSE
//     DISPLAY 'Not a leap year'
// END IF
// ```

let year = +prompt("Enter a value for year.");
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) 
{
    alert("Leap year.");
}
else 
{
alert("Not a leap year.")
}

// 5. Loops:
// ```pseudo
// DECLARE sum = 0
// FOR i FROM 1 TO 100 DO
//     sum = sum + i
// END FOR
// DISPLAY sum

sum = 0
for (let i = 0; i < 101; i++) //go to 101, otherwise the sum counter will stop at 99
{
    sum = sum + i; //or sum += i;
}
console.log(sum);

let sum = 0;                                     
for (i = 0; i <= 100; i++) {                    
  console.log(`${i} + ${sum} = ${i+sum}`)
sum = sum + i;
} // more detailed version of the code above, shows running total

// WHILE password != correctPassword DO
//     INPUT password
// END WHILE
// ```

let password = "password";
let correctPassword = "password";
while (password != correctPassword)
{
    password = prompt("Enter the password.");
}
console.log("You have entered the correct password.");
//will keep prompting until the correct password is entered

// 6. Subroutines:
// ```pseudo
// FUNCTION add(a, b)
//     RETURN a + b
// END FUNCTION

function add(a, b)
{
    return a + b;
}
console.log(add(5, 10));

// FUNCTION subtract(a, b)
//     RETURN a - b
// END FUNCTION

function subtract(a, b)
{
  return a - b;
}
console.log(subtract(10, 5));

// FUNCTION multiply(a, b)
//     RETURN a * b
// END FUNCTION

function multiply(a, b)
{
  return a * b;
}
console.log(multiply(5, 10));

// FUNCTION divide(a, b)
//     IF b != 0 THEN
//         RETURN a / b
//     ELSE
//         DISPLAY "Division by zero error"
//     END IF
// END FUNCTION

function divide(a, b)
{
  if (b != 0)
  {
    return a / b;
  }
  else
  {
    console.log("Division by zero error");
  }
}

// FUNCTION power(base, exponent)
//     IF exponent == 0 THEN
//         RETURN 1
//     ELSE
//         RETURN base * power(base, exponent-1)
//     END IF
// END FUNCTION
// ```

function power(base, exponent)
{
  if (exponent == 0)
  {
    return 1;
  }
  else
  {
    return base * power(base, exponent - 1);
  }
}

// 7. Arrays:
// ```pseudo
// DECLARE numArray[5]
// FIND max and min from numArray
// DISPLAY max, min

let numArray = [1, 2, 3, 4, 5];
let max = Math.max(...numArray);
let min = Math.min(...numArray);
console.log(max, min);
//uses the math.max and math.min functions
//the ... is the spread operator, which spreads out the array into individual values

//using a for loop
//the math functions are more concise, but the for loops allows for more control if you are performing other operations

let numArray2 = [1, 2, 3, 4, 5];
let max2 = numArray2[0];
let min2 = numArray2[0];
for (let i = 0; i < numArray.length; i++)
{
  if (numArray[i] > max2)
  {
    max2 = numArray[i];
  }
  if (numArray[i] < min2)
  {
    min2 = numArray[i];
  }
}
console.log(max2, min2);

// DECLARE randomArray[100]
// FOR i FROM 0 TO 99 DO
//     randomArray[i] = RANDOM NUMBER
// END FOR

let randomArray = [];
for (let i = 0; i < 100; i++)
{
  randomArray[i] = Math.random();
  console.log(randomArray[i]);
}


// DECLARE gameBoard[3][3]
// // Implement Tic Tac Toe
// ```

// 8. OOP:
// ```pseudo
// CLASS Animal
//     // Properties and methods common to all animals
// END CLASS

// CLASS Dog EXTENDS Animal
//     // Dog-specific properties and methods
// END CLASS

// CLASS Cat EXTENDS Animal
//     // Cat-specific properties and methods
// END CLASS

// // Create instances of Dog and Cat, interact with them
// ```

// 9. Final Project:
// ```pseudo
// CLASS AirlineSystem
//     // Properties for seating, booking, UI, etc.
//     // Methods for performing tasks
// END CLASS

// // Create an instance of AirlineSystem and perform tasks
// ```
