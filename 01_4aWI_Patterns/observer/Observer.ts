// Observer: gets notified whenever the observed score changes.
export interface Observer {
  update(score: number): void;
}
