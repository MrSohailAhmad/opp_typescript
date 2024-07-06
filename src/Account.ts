export class Account {
  protected accountNumber: number;
  protected balance: number;

  constructor(accountNumber: number, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log(`Insufficient balance. Current balance: ${this.balance}`);
    }
  }

  showBalance() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  }
}
