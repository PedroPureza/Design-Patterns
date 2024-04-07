// Be cautios of adding new methods to an existing interface, it may break the existing classes that implement the interface
// It may be better to create a new interface

interface Machine {
  print(document: Document): void;
  scan(document: Document): void;
  fax(document: Document): void;
}

class WrongImplementationMultiFunctionPrint implements Machine {
  print(document: Document): void {
    console.log("print");
  }

  scan(document: Document): void {
    console.log("scan");
  }

  fax(document: Document): void {
    console.log("fax");
  }
}

//The code above is a violation of the Interface Segregation Principle
//What if we have a printer that can only print?

//Right implementation

interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log("print");
  }

  scan(document: Document): void {
    console.log("scan");
  }

  fax(document: Document): void {
    console.log("fax");
  }
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log("print");
  }
}

//This way we can create a new class that implements the Printer interface without breaking the existing classes that implement the interface
