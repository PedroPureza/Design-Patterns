abstract class Shape {
  abstract calculateArea(): number;
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side ** 2;
  }
}

// client code

function area(shape: Shape): number {
  return shape.calculateArea();
}

let square = new Square(5);
console.log(area(square)); // 25

// If I were to create a Rectangle class that extends Shape, I could create a new implementation of the calculateArea method that would return the area of a rectangle.
// This is an example of the Liskov Substitution Principle in action.
