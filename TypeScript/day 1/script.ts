// person.ts
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

// Example usage
const p: Person = { name: "Ahmed", age: 22 };
greet(p);
