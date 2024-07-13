// The 'Product' class
class Car {
    // Car properties
    private engine: string;
    private body: string;
    private wheels: string;

    constructor(builder: CarBuilder) {
        this.engine = builder.Engine;
        this.body = builder.Body;
        this.wheels = builder.Wheels;
    }

    // Getters for car properties
    get Engine() { return this.engine; }
    get Body() { return this.body; }
    get Wheels() { return this.wheels; }
}

// The 'Builder' class
class CarBuilder {
    private engine: string = '';
    private body: string = '';
    private wheels: string = '';

    // Setters for car properties. They return the CarBuilder object to allow for method chaining.
    setEngine(value: string): CarBuilder {
        this.engine = value;
        return this;
    }

    setBody(value: string): CarBuilder {
        this.body = value;
        return this;
    }

    setWheels(value: string): CarBuilder {
        this.wheels = value;
        return this;
    }

    // The build method returns a new Car object with the set properties.
    build(): Car {
        return new Car(this);
    }

    // Getters for builder properties
    get Engine() { return this.engine; }
    get Body() { return this.body; }
    get Wheels() { return this.wheels; }
}

// Usage
let carBuilder = new CarBuilder();
let car = carBuilder.setEngine("V8").setBody("Sedan").setWheels("Alloy").build();

console.log("Engine: " + car.Engine);
console.log("Body: " + car.Body);
console.log("Wheels: " + car.Wheels);