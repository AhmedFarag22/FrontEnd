/******************************
 * 1. BASIC TYPES
 ******************************/
let id: number = 101; // number
let userName: string = "Ahmed"; // string
let isActive: boolean = true; // boolean
let anything: any = "hello"; // any (not recommended)

let ids: number[] = [1, 2, 3]; // array of numbers
let names: string[] = ["Ali", "Omar"]; // array of strings
let mixed: (number | string)[] = [1, "two", 3]; // union type array

/******************************
 * 2. TUPLES
 ******************************/
let person: [number, string, boolean];
person = [1, "Ahmed", true]; // fixed order + fixed types

/******************************
 * 3. ENUMS
 ******************************/
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction.Up); // 1

/******************************
 * 4. TYPE ALIASES
 ******************************/
type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: "Ahmed",
};

/******************************
 * 5. INTERFACES
 ******************************/
interface Person {
  name: string;
  age: number;
}

function greet(p: Person): void {
  console.log(`Hello ${p.name}, Age: ${p.age}`);
}

greet({ name: "Omar", age: 30 });

/******************************
 * 6. INTERFACE EXTENDING
 ******************************/
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { name: "Rocky", age: 3, breed: "German Shepherd" };

/******************************
 * 7. FUNCTIONS
 ******************************/
function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;

/******************************
 * 8. OPTIONAL & DEFAULT PARAMS
 ******************************/
function logMessage(msg: string, prefix?: string): void {
  console.log(prefix ? `${prefix}: ${msg}` : msg);
}
logMessage("Hello"); // Hello
logMessage("Hello", "Info"); // Info: Hello

function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5)); // 10

/******************************
 * 9. CLASSES
 ******************************/
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): void {
    console.log(`${this.brand} is driving...`);
  }
}

const car1 = new Car("BMW");
car1.drive();

/******************************
 * 10. ACCESS MODIFIERS
 ******************************/
class Employee {
  public id: number;
  private salary: number;
  protected department: string;

  constructor(id: number, salary: number, dept: string) {
    this.id = id;
    this.salary = salary;
    this.department = dept;
  }

  getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(id: number, salary: number, dept: string) {
    super(id, salary, dept);
  }
  showDept() {
    console.log(this.department); // allowed (protected)
  }
}

/******************************
 * 11. GENERICS
 ******************************/
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<string>("Hello")); // Hello
console.log(identity<number>(123)); // 123

function getArray<T>(items: T[]): T[] {
  return [...items];
}
let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["a", "b"]);

/******************************
 * 12. GENERIC FUNCTION (MIN)
 ******************************/
function min<T extends number | string>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  let smallest = arr[0];
  for (const item of arr) {
    if (item < smallest) {
      smallest = item;
    }
  }
  return smallest;
}
console.log(min([3, 1, 7, 2])); // 1
console.log(min(["z", "a", "m"])); // "a"

/******************************
 * 13. MODULES (EXPORT & IMPORT)
 ******************************/
// MathOperations.ts
export function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

// main.ts
// import { multiplyNumbers } from "./MathOperations";
// console.log(multiplyNumbers(4, 5)); // 20

/******************************
 * 14. TYPE ASSERTIONS (CASTING)
 ******************************/
let someValue: any = "Hello TypeScript";
let strLength: number = (someValue as string).length;

/******************************
 * 15. PROMISE & ASYNC/AWAIT
 ******************************/
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 1000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}
getData();

/******************************
 * 16. UTILITY TYPES
 ******************************/
interface FullUser {
  id: number;
  name: string;
  age: number;
}

// Partial = all properties optional
type PartialUser = Partial<FullUser>;

// Readonly = all properties readonly
type ReadonlyUser = Readonly<FullUser>;

// Pick = choose specific props
type UserNameOnly = Pick<FullUser, "name">;

// Omit = exclude specific props
type UserWithoutAge = Omit<FullUser, "age">;
