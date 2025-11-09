// utils.ts
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

// Example usage
console.log(min([3, 1, 7, 2]));      // 1
console.log(min(["z", "a", "m"]));   // "a"
console.log(min([]));                // undefined
