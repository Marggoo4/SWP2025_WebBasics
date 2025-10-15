/* Create an Car interface with these properties:
	• brand: string
	• model: string
	• price: number
	• year: number

Create Sample data with ChatGPT

Create the following functions:
	• Calculate total price
Write a function getTotalPrice(cars: Car[]): number that adds up the price of all cars.
	• Print list of cars
Write a function printCars(cars: Car[]): void that logs all cars nicely formatted to the console.
	• Filter expensive cars
Write a function getExpensiveCars(cars: Car[], minPrice: number): Car[] that returns only the cars that are more expensive than a given value.



	1) Programmiere alle Funktionen mit for-each schleifen
	2) Programmiere die Funktionen ein 2tes mal (mit anderem Namen) mit den Array-Funktionen
		a. Filter
		b. Reduce 
		*/




interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
  { brand: "Toyota", model: "Camry", price: 28000, year: 2022 },
  { brand: "Tesla", model: "Model 3", price: 42000, year: 2023 },
  { brand: "Ford", model: "Mustang", price: 36000, year: 2021 },
  { brand: "BMW", model: "X5", price: 61000, year: 2022 },
  { brand: "Honda", model: "Civic", price: 24000, year: 2020 },
];



// for each

function getTotalPrice(cars: Car[]): number {
    let total = 0;
    cars.forEach(car => {
        total += car.price;
    });
    return total;
}

function printCars(cars: Car[]): void {
  const sorted = cars.sort((a,b) => b.price - a.price);
  cars.forEach(car => {
    console.log(`${car.brand} ${car.model} (${car.year}) - $${car.price}`);
  });
}


function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
  const result: Car[] = [];
  cars.forEach(car => {
    if (car.price > minPrice) {
      result.push(car);
    }
  });
  return result;
}



// array-function

function getTotalPriceReduce(cars: Car[]): number {
  return cars.reduce((sum, car) => sum + car.price, 0);
}


function printCarsMap(cars: Car[]): void {
  cars.map(car => `${car.brand} ${car.model} (${car.year}) - $${car.price}`)
      .forEach(line => console.log(line));
}


function getExpensiveCarsFilter(cars: Car[], minPrice: number): Car[] {
  return cars.filter(car => car.price > minPrice);
}



console.log("Total Price:", getTotalPrice(cars));

console.log("\nCars sorted:");
printCars(cars);

console.log("\nExpensive Cars over $30,000:", getExpensiveCars(cars, 30000));



console.log("\nTotal Price (reduce):", getTotalPriceReduce(cars));

console.log("\nCars sorted (map):");
printCarsMap(cars);

console.log("\nExpensive Cars over $30,000:", getExpensiveCarsFilter(cars, 30000));


/*
let a: number = 8;
let b: number = 7;

function add(number1: number, number2: number): number {
    return number1 + number2;
}

let result: number = add(4,3);
console.log(result);
*/