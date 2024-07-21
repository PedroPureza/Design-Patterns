// 'Target' interface
interface EuropeanPlug {
    provideElectricity(): void;
}

// 'Adaptee' class
class AmericanPlug {
    providePower() {
        console.log("Providing power with an American plug");
    }
}

// 'Adapter' class
class Adapter implements EuropeanPlug {
    private americanPlug: AmericanPlug;

    constructor(americanPlug: AmericanPlug) {
        this.americanPlug = americanPlug;
    }

    provideElectricity() {
        this.americanPlug.providePower();
    }
}

// Usage
const americanPlug = new AmericanPlug();
const adapter = new Adapter(americanPlug);
adapter.provideElectricity(); // Outputs: "Providing power with an American plug"