import { Observer } from "./Observer.js";

// Subject: keeps a list of observers and notifies them about changes.
export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}
