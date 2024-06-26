// The Singleton pattern is a creational pattern that lets you ensure that a class has only
// one instance,while providing a global access point to this instance.
class Singleton {
  private static instance: Singleton;
  private static _value: number;

  constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value(): number {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

instance1.value = 10;

console.log(instance1.value); // 10
console.log(instance2.value); // 10
console.log(instance1 === instance2); // trues

// The Singleton pattern is useful when you need to make sure that only one instance of a class exists.
// Examples: A logger class that logs messages to a file. You only need one instance of the logger class to log messages.
// A global configuration class that stores configuration settings for an application.
// You only need one instance of the configuration class to store the configuration settings.
// A database connection class that connects to a database.
// You only need one instance of the database connection class to connect to the database.

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp} - ${message}`);
  }
}

let logger1 = Logger.getInstance();
logger1.log("Logger 1 is logging a message");

let logger2 = Logger.getInstance();
logger2.log("Logger 2 is logging a message");

//same instance
