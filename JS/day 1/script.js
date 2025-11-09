const numbers = [10, 20, 30];
const newNumbers = [0, ...numbers, 100];

console.log(newNumbers) ; // Spread Operator ...

const details = {name: "Ahmed", age: 23};

const newDetails = {...details, country:"Egypt"};
console.log(newDetails)


function getUserData({firstName, favoriteColor = "green"}) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" }));
console.log(getUserData({ firstName: "Melissa" }));
console.log(getUserData({}));

function calculateAverage(...nums) {
  if (nums.length === 0) return 0; // لو مفيش أرقام
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
}

console.log(calculateAverage(10, 20, 30));


function findMax(...nums) {
  if (nums.length === 0) return undefined;
  return Math.max(...nums);
}

console.log(findMax(10, 20, 30));

const numberss = [1, 2, 3, 4, 5];

const squared = numberss.map(num => num * num);
console.log(squared);

const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 };

console.log(updatedPerson);

const words = ["apple", "banana", "cherry", "date", "fig"];


const hasLongWord = words.some(word => word.length > 5);

console.log(hasLongWord); // true

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 95 },
  { name: 'Charlie', score: 45 },
  { name: 'David', score: 60 },
  { name: 'Eve', score: 100 }
];

const passingStudents = students
    .filter(student => student.score >= 60)
    .map(student => student.name);
console.log(passingStudents);

const allAbove50 = students
    .every(student => student.score > 50);

console.log(allAbove50); 

const hasPerfectScore = students.some(student => student.score === 100);
console.log(hasPerfectScore);

var str = 'hello';

// تحويل string لمصفوفة حروف
var chars = [...str];

console.log(chars);


let age = prompt("Enter your age:");