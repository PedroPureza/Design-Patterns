// The Singleton pattern is a creational pattern that lets you ensure that a class has only
// one instance,while providing a global access point to this instance.
class Singleton {
  private static instance: Singleton;
  private static _value: number;

  constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value(): number {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();

instance1.value = 10;

console.log(instance1.value); // 10
console.log(instance2.value); // 10
console.log(instance1 === instance2); // trues
