// 'Abstraction' interface
interface Switch {
    turnOn(): void;
    turnOff(): void;
}

// 'Implementor' interface
interface Device {
    powerOn(): void;
    powerOff(): void;
}

// 'ConcreteImplementor' classes
class TV implements Device {
    powerOn() {
        console.log("TV powered on");
    }

    powerOff() {
        console.log("TV powered off");
    }
}

class Radio implements Device {
    powerOn() {
        console.log("Radio powered on");
    }

    powerOff() {
        console.log("Radio powered off");
    }
}

// 'RefinedAbstraction' classes
class Button implements Switch {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    turnOn() {
        this.device.powerOn();
    }

    turnOff() {
        this.device.powerOff();
    }
}

class Remote implements Switch {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    turnOn() {
        this.device.powerOn();
    }

    turnOff() {
        this.device.powerOff();
    }
}

// Usage
const tv = new TV();
const buttonWithTV = new Button(tv);
buttonWithTV.turnOn(); // Outputs: "TV powered on"
buttonWithTV.turnOff(); // Outputs: "TV powered off"

const radio = new Radio();
const remoteWithRadio = new Remote(radio);
remoteWithRadio.turnOn(); // Outputs: "Radio powered on"
remoteWithRadio.turnOff(); // Outputs: "Radio powered off"