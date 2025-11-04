const age = 18;
let message = "";

// using if else
if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

// using ternary operator
message = age >= 18 ? "Adult" : "Minor";
