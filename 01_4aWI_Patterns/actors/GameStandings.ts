import { Actor } from "./Actor.js";
import { Subject } from "../observer/Subject.js";
import { Observer } from "../observer/Observer.js";

// Singleton: there is exactly one score board for the whole game.
// The constructor is private, so the only way to obtain it is getInstance().
// As a Subject it notifies registered observers whenever the score changes.
export class GameStandings implements Actor, Subject {
  private static instance: GameStandings | null = null;

  private score: number = 0;
  private observers: Observer[] = [];

  private constructor(
    private x: number = 10,
    private y: number = 20,
  ) { }

  static getInstance(): GameStandings {
    if (GameStandings.instance === null) {
      GameStandings.instance = new GameStandings();
    }
    return GameStandings.instance;
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.score);
    }
  }

  increaseScore(amount: number): void {
    this.score += amount;
    this.notifyObservers();
  }

  getScore(): number {
    return this.score;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  update(deltaTime: number): void { }
}
