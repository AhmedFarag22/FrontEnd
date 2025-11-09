// animal.ts
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

function printDogDetails(dog: Dog): void {
  console.log(`Dog Name: ${dog.name}, Age: ${dog.age}, Breed: ${dog.breed}`);
}

// Example usage
const myDog: Dog = { name: "Rocky", age: 3, breed: "German Shepherd" };
printDogDetails(myDog);
