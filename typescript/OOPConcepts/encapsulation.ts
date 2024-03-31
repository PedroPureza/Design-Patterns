// balance - hidden - private
// you can't access the balance directly, bank.balance = 1000 will not work

class BankAccount {
  private _balance: number;

  constructor(initialbalance: number) {
    this._balance = initialbalance;
  }

  // getter to get balance of the bank accounts
  public getBalance(): number {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      console.log("Invalid operation");
      return;
    }
    if (this._balance - amount < 0) {
      console.log("Insufficient balance");
      return;
    }
    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
console.log("Initial balance: ", myAccount.getBalance());
myAccount.deposit(500);
console.log("Balance after deposit: ", myAccount.getBalance());
myAccount.withdraw(200);
console.log("Balance after withdrawal: ", myAccount.getBalance());

// Real world example
// again with the date object

const newDate = new Date();
console.log("Date ", newDate.getFullYear());
newDate.setFullYear(2022);
console.log(newDate.getFullYear());
