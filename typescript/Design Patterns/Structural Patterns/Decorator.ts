// 'Component' interface
interface Coffee {
    getCost(): number;
    getDescription(): string;
}

// 'ConcreteComponent' class
class SimpleCoffee implements Coffee {
    getCost() {
        return 10;
    }

    getDescription() {
        return 'Simple coffee';
    }
}

// 'Decorator' class
class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

// 'ConcreteDecorator' classes
class MilkCoffee extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 2;
    }

    getDescription() {
        return super.getDescription() + ', milk';
    }
}

class WhipCoffee extends CoffeeDecorator {
    getCost() {
        return super.getCost() + 5;
    }

    getDescription() {
        return super.getDescription() + ', whip';
    }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
console.log(`${coffee.getDescription()} costs ${coffee.getCost()}`);

coffee = new MilkCoffee(coffee);
console.log(`${coffee.getDescription()} costs ${coffee.getCost()}`);

coffee = new WhipCoffee(coffee);
console.log(`${coffee.getDescription()} costs ${coffee.getCost()}`);