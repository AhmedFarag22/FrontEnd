let arr = [10, 20, 30];

// نجيب Iterator من الـ array
let iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }



let mySet = new Set([1, 2, 2, 3, "hello"]);

console.log(mySet); // Set(3) {1, 2, 3, "hello"}

// إضافة عناصر
mySet.add(5);
mySet.add(1); // مش هيتضاف لأنه موجود

// مسح عنصر
mySet.delete(2);

// فحص عنصر
console.log(mySet.has(3)); // true

// حجم الـ Set
console.log(mySet.size); // 3

// Iteration
for (let value of mySet) {
  console.log(value);
}
// هيطبع: 1, 3, "hello", 5
mySet.clear();





let myMap = new Map();

// إضافة عناصر
myMap.set("name", "Ahmed");
myMap.set(1, "Number Key");
myMap.set({ id: 5 }, "Object Key");

// الحصول على قيمة
console.log(myMap.get("name")); // Ahmed

// فحص مفتاح
console.log(myMap.has(1)); // true

// مسح مفتاح
myMap.delete("name");

// حجم الـ Map
console.log(myMap.size); // 2

// Iteration
for (let [key, value] of myMap) {
  console.log(key, value);
}







function findLetterPositions(sentence, letter) {
  let positions = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === letter.toLowerCase()) {
      positions.push(i);
    }
  }
  return positions;
}

// تجربة
console.log(findLetterPositions("This is javaScript", "i")); 
// [2, 5, 15]
















// taskManager.js
import { Task } from "./task.js";

export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const id = this.tasks.length + 1;
    const task = new Task(id, description);
    this.tasks.push(task);
    console.log("Task added:", description);
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log("Task removed with id:", id);
  }

  completeTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.markCompleted();
      console.log("Task completed:", task.description);
    }
  }

  listTasks() {
    console.log("Tasks:");
    this.tasks.forEach((task) => {
      console.log(
        `${task.id}. ${task.description} [${task.completed ? "Done" : "Pending"}]`
      );
    });
  }
}

















// product.js
class Product {
  #name;
  #quantity;
  #price;

  constructor(name, price, quantity = 0) {
    this.#name = name;
    this.#price = price;
    this.#quantity = quantity;
  }

  addStock(quantity) {
    if (quantity > 0) {
      this.#quantity += quantity;
    } else {
      console.log("Invalid stock quantity!");
    }
  }

  sell(quantity) {
    if (quantity > 0 && quantity <= this.#quantity) {
      this.#quantity -= quantity;
      console.log("Sold", quantity, this.#name);
    } else {
      console.log("Not enough stock!");
    }
  }

  getDetails() {
    return {
      name: this.#name,
      price: this.#price,
      quantity: this.#quantity,
    };
  }
}

// Example
const prod = new Product("Laptop", 15000, 10);
prod.addStock(5);
prod.sell(3);
console.log(prod.getDetails());





















// shape.js
class Shape {
  area() {
    return 0; // base default
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Example usage
const circle = new Circle(5);
console.log("Circle area =", circle.area());

const rect = new Rectangle(4, 6);
console.log("Rectangle area =", rect.area());
