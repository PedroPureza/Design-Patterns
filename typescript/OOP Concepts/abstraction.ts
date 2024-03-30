interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

// Code above this is abstracted from user

//User code
let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);
console.log("Area of Circle: ", calculateTotalArea(circle));
console.log("Area of Reactangle: ", calculateTotalArea(rectangle));

// Example of uses of abstraction in day to day life

// Date Class in JavaScript
// No need of knowing how the date is calculated, we just need to know the methods to get the date, month and year.

const now = new Date();
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
console.log(`Today's date is ${date}/${month}/${year}`);
