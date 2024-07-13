abstract class FactoryCar {
    constructor(public model: string, public productionYear: number) {}
    abstract displayCarInfo(): void;
}

class Sedan extends FactoryCar {
    public displayCarInfo(): void {
        console.log(`Model: ${this.model}, Production Year: ${this.productionYear}, Type: Sedan`);
    }
}

class SUV extends FactoryCar {
    public displayCarInfo(): void {
        console.log(`Model: ${this.model}, Production Year: ${this.productionYear}, Type: SUV`);
    }
}

class Hatchback extends FactoryCar {
    public displayCarInfo(): void {
        console.log(`Model: ${this.model}, Production Year: ${this.productionYear}, Type: Hatchback`);
    }
}

class CarFactory {
    public createCar(type: "sedan" | "suv" | "hatchback", model: string, productionYear: number): FactoryCar {
        switch (type) {
            case "sedan":
                return new Sedan(model, productionYear);
            case "suv":
                return new SUV(model, productionYear);
            case "hatchback":
                return new Hatchback(model, productionYear);
            default:
                throw new Error("Invalid car type.");
        }
    }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Toyota Camry", 2021);
sedan.displayCarInfo();