class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  constructor(public name: string = "Dog") {
    super(name);
  }
}

let myDog = new Dog("Buddy");
myDog.move(10);

//real world example

class Product {
  constructor(public id: string, public price: number) {}

  display(): void {
    console.log(`Product: ${this.id}, Price: ${this.price}`);
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public author: string,
    public price: number,
    public title: string
  ) {
    super(id, price);
  }

  display(): void {
    console.log(
      `Book: ${this.id}, Title: ${this.title} Author: ${this.author}, Price: ${this.price}`
    );
  }
}

let book = new Book("1", "John Doe", 20, "The Book");
book.display();
