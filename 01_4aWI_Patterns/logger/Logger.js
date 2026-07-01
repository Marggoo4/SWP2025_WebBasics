// Singleton: there is only one Logger instance shared across the whole app.
// The constructor is private, so nobody can create a second logger with "new".
export class Logger {
    constructor() {
        this.messages = [];
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        this.messages.push(message);
        console.log(`[LOG] ${message}`);
    }
    getHistory() {
        return [...this.messages];
    }
}
