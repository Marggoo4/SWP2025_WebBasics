import { GameStandings } from "../actors/GameStandings.js";
import { ScoreLogger } from "../observer/ScoreLogger.js";
const standings = GameStandings.getInstance();
const display = new ScoreLogger("Display");
const achievements = new ScoreLogger("Achievements");
standings.addObserver(display);
standings.addObserver(achievements);
// Each score change notifies all registered observers.
standings.increaseScore(10);
standings.increaseScore(5);
// Observers can unsubscribe and stop receiving updates.
standings.removeObserver(achievements);
standings.increaseScore(1);
