class MySqlDatabase {
  connect() {
    console.log("Connected to MySQL database");
  }
}

class HighLevelModule {
  constructor(private database: MySqlDatabase) {}

  run() {
    this.database.connect();
  }
}

// The HighLevelModule class is dependent on the MySqlDatabase class. If we were to change the database class to a different class,
// we would have to change the HighLevelModule class as well.
// This is a violation of the Dependency Inversion Principle.

// Right implementation:

interface IDatabase {
  connect(): void;
}

class MySqlDatabase2 implements IDatabase {
  connect() {
    console.log("Connected to MySQL database");
  }
}

class MyMongoDatabase implements IDatabase {
  connect() {
    console.log("Connected to MongoDB database");
  }
}

class HighLevelModule2 {
  constructor(private database: IDatabase) {}

  run() {
    this.database.connect();
  }
}
