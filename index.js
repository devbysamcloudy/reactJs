// index.js
// Main entry point of the app

// --- IMPORTS MUST ALWAYS BE AT THE TOP ---
import { add, multiply } from "./math.js";
import { sayHello, sayGoodbye } from "./greetings.js";
import _ from "lodash";
import chalk from "chalk";

// --- MATH EXAMPLES ---
console.log("Add:", add(2, 3));          // 5
console.log("Multiply:", multiply(2, 3)); // 6

// --- LODASH EXAMPLE ---
const numbers = [1, 2, 3, 4, 5, 6];

// _.chunk(array, size) splits array into groups
const chunkedNumbers = _.chunk(numbers, 2);
console.log("Chunked array:", chunkedNumbers);

// --- CHALK (COLORS IN TERMINAL) ---
console.log(chalk.green("Success!"));
console.log(chalk.red("Error!"));
console.log(chalk.blue.bold("Node.js is fun"));

// --- GREETINGS ---
console.log(sayHello("Arthur"));
console.log(sayGoodbye("Arthur"));
