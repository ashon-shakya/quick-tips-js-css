// General Best Practices for variable declaration

var name = "Peter";
var name = "Prem"; // Redeclaration is allowed (BAD)
console.log(name); // Prem

var count = 0;
if (true) {
  var count = 1; // Overwrites outer scope (BAD)
}
console.log(count); // 1

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5 (Loop variable leaked into outer scope, BAD)

// What to Do

// const for constant variable
const pi = 3.14159;
// pi = 3.14; // Error: Assignment to constant variable
console.log(pi);

// let for variable that changes only values
let score = 0;
score = 10; // Allowed
console.log(score);

// const for object but can change the value of property
const user = { name: "Alice" };
user.name = "Bob"; // ✅ Allowed
console.log(user);

// user = {}; // ❌ Error: Assignment to constant variable
