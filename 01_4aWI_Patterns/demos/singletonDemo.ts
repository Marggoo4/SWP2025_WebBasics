import { GameStandings } from "../actors/GameStandings.js";

// Both calls return the very same instance.
const a = GameStandings.getInstance();
const b = GameStandings.getInstance();

a.increaseScore(10);
b.increaseScore(5);

console.log("Same instance:", a === b);
console.log("Score:", a.getScore()); // 15, because a and b are identical
