import { Logger } from "./Logger.js";
// Both calls return the very same instance.
const a = Logger.getInstance();
const b = Logger.getInstance();
a.log("Application started");
b.log("User logged in");
console.log("Same instance:", a === b);
// The history is shared, because a and b are identical.
console.log("History:", a.getHistory());
