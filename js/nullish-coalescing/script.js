// Check for null
const value = null;
let output = "";
if (value) {
  output = value;
} else {
  output = "John Doe";
}

console.log(output); // Result: John Doe

// Nullish Coalescing Operator (??)
// Provide fallback only for null or undefined

const name = null;
const result = name ?? "John Doe";

console.log(result); // Result: John Doe
