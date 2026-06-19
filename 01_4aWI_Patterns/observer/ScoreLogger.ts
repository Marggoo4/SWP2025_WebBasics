import { Observer } from "./Observer.js";

// Concrete observer: logs every score change to the console.
export class ScoreLogger implements Observer {
  constructor(private name: string) { }

  update(score: number): void {
    console.log(`[${this.name}] score changed to ${score}.`);
  }
}
