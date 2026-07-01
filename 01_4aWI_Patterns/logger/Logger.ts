// Singleton: there is only one Logger instance shared across the whole app.
// The constructor is private, so nobody can create a second logger with "new".
export class Logger {
  private static instance: Logger;
  private messages: string[] = [];

  private constructor() { }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    this.messages.push(message);
    console.log(`[LOG] ${message}`);
  }

  getHistory(): string[] {
    return [...this.messages];
  }
}
