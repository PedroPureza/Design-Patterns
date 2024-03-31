// on the abstraction file we can also see an example of polymorphism
// The calculateTotalArea function can take any shape object and calculate the area of that shape.

// real polymorphism example
import express, { NextFunction, Request, Response } from "express";

const app = express();

const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware 1");
  next();
};

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware 2");
  next();
};

app.use(middleware1);
app.use(middleware2);

// each middleware can have its own implementation but they inherit from the same parent class
