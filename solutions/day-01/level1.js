// Variables
let first = 'James';

// DATA TYPES
// Primitive data types in JavaScript include:
    // Numbers - Integers, floats
    // Strings - Any data under single quote, double quote or backtick quote
    // Booleans - true or false value
    // Null - empty value or no value
    // Undefined - a declared variable without a value
    // Symbol - A unique value that can be generated by Symbol constructor
    
// Non-primitive data types in JavaScript includes:
    // Objects
    // Arrays

// - Primitive data types
    // Primitive data types are immutable(non-modifiable) data types 
        // Strings:
        let word = 'JavaScript';
        // Attempting to modify the string should return error
        // This expression would NOT change the 'word' variable
        word[0] = 'Y';
        console.log(word); // Should return 'JavaScript'

    // Primitive data types are compared by its values
        // Strings:
            let js = 'JavaScript';
            let py = 'Python';
            console.log(js == py); // false
        
        // Integers:
            let numOne = 3;
            let numTwo = 3;
            console.log(numOne == numTwo); // true

        // Booleans:
            let ligtOn = true;
            let ligtOff = false;
            console.log(ligtOn == ligtOff); // false

// - Non-primitive data types(Object References)
    // Non-primitive data types are modifiable or mutable
        // Arrays:
            let nums = [1, 2, 3];
            nums[0] = 10;
            console.log(nums) // [10, 2, 3];
            
    // Non-primitive data types cannot be compared by value
    // Even if two non-primitive data types have the same properties and values, they are not strictly equal
        // Objects:
            let useOne = {
                name:'James',
                role:'teaching',
                country:'United States'
            };

            let userTwo = {
                name:'James',
                role:'teaching',
                country:'United States'
            };
            console.log(useOne == userTwo); // false

    // Non-primitive values are referred to as reference types, 
    // because they are being compared by reference instead of value
    // Two objects are only strictly equal if they refer to the same underlying object
        // Objects:
            let nums2 = [1, 2, 3];
            let numbers = nums2;
            console.log(nums2 == numbers); // true
    
            let userThree = {
                name:'James',
                role:'teaching',
                country:'United States'
            };
            let userFour = userThree;
            console.log(userThree == userFour); // true


// NUMBERS
// Numbers are integers and decimal values which can do all the arithmetic operations
// Declaring Number Data Types:
let age = 35;
const gravity = 9.81 ; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram

// More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

console.log(age, gravity, mass, boilingPoint, bodyTemp);


// Math Object:
// In JavaScript the Math Object provides a lots of methods to work with numbers
const PI = Math.PI

console.log(PI) // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)) // 3 to round values to the nearest number

console.log(Math.round(9.81)) // 10

console.log(Math.floor(PI)) // 3 rounding down

console.log(Math.ceil(PI)) // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)


// Random Number Generator:
// The JavaScript Math Object has a random() method number generator which generates number from 0 to 0.999999999
// Generate a random number between 0 and 10
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

// STRINGS:
// Strings are texts, which are under single, double, back-tick quote. 
// To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.
let space = ' '; // an empty space string
let firstName = 'James';
let lastName = 'Bond';
let country = 'United States';
let city = 'NYC';
let language = 'JavaScript';
let job = 'teacher';
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// String Concatenation
// Connecting two or more strings together is called concatenation.
// Concatenating Using Addition Operator
// Concatenating using the addition operator is an old way. 
// This way of concatenating is tedious and error-prone. 
// It is good to know how to concatenate this way, strongly suggested to use the ES6 template strings.
// Declaring different variables of different data types
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
console.log(personInfoOne);

// Long Literal Strings
// A string could be a single character or paragraph or a page. 
// If the string length is too big it does not fit in one line. 
// We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. 
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";
console.log(paragraph);

// Escape Sequences in Strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence. 
// Most common escape characters:
// - \n: new line
// - \t: Tab, means 8 spaces
// - \\: Back slash
// - \': Single quote (')
// - \": Double quote (")
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?'); // line break
console.log('Days\tTopics\tExercises');
console.log('Day 1\t3\t5');
console.log('Day 2\t3\t5');
console.log('Day 3\t3\t5');
console.log('Day 4\t3\t5');
console.log('This is a backslash  symbol (\\)'); // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"');
console.log("In every programming language it starts with \'Hello, World!\'");
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020');

// Template Literals (Template Strings)
// To create a template strings, we use two back-ticks. 
// We can inject data as expressions inside a template string. 
// To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.
//Syntax
// `String literal text`
// `String literal text ${expression}`
console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);

// Using a string template or string interpolation method, 
// we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).
console.log(`${a} is greater than ${b}: ${a > b}`)





// ARRAYS
// Creating arrays:
// Using Array constructor
const arr1 = Array();
console.log(arr1);

let arr2 = Array();
console.log(arr2);

// Using square brackets:
const arr3 = [];
console.log(arr3);

// Array with values
const numbersArray = [0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]; // number array
const armor = ['Knife', 'Nunchucks', 'Brass Knuckles','Shotgun', 'AK-47', 'Glock 9', 'Beretta', 'Uzi', 'MAC-10']; // armor array
const characters = ['James Bond', 'Max Payne', 'Stone Cold', 'The Rock', 'Ash', 'Goku', 'Vegetta', 'Ryu', 'Bison']; // characters array
const attacks = ['Punch', 'Kick', 'Push', 'Slice', 'Stab', 'Shoot']
const moves = [ {directions: ['Up', 'Down', 'Left', 'Right']} , 'Jump', 'Crouch', 'Reload', 'Change Weapon'];
const players = [ 1, 2, 3, 4, 5, 6];

// Print array and it's length
console.log('Numbers:', numbers);
console.log('Number of Numbers', numbers.length);

console.log('Armor:', armor);
console.log('Number Guns in Armor', armor.length);

console.log('Characters:', characters);
console.log('Number of Characters', characters.length);

console.log('Attacks:', attacks);
console.log('Number of Attacks', attacks.length);

console.log('Moves:', moves);
console.log('Number of Moves', moves.length);

console.log('Players:', players);
console.log('Number of Players', players.length);

