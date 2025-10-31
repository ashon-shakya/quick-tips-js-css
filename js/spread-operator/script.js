// Spread Operator {...}

const car = { make: "Toyota", model: "RAV4", year: 2020 };
const options = { transmission: "Automatic", fuel: "Petrol" };

// create combined object individually
// const combined = {
//   make: car.make,
//   model: car.model,
//   year: car.year,
//   transmission: options.transmission,
//   fuel: options.fuel,
// };

// using spread operator {...}
const combined = { ...car, ...options };
