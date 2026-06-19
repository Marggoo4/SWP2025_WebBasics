import { Actor } from "./Actor.js";

// Singleton: there is exactly one score board for the whole game.
// The constructor is private, so the only way to obtain it is getInstance().
export class GameStandings implements Actor {
  private static instance: GameStandings | null = null;

  private score: number = 0;

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

  increaseScore(amount: number): void {
    this.score += amount;
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
