import { Account } from "./Account";

export class CurrentAccount extends Account {
  private overdraftLimit: number;

  constructor(
    accountNumber: number,
    initialBalance: number,
    overdraftLimit: number
  ) {
    super(accountNumber, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number) {
    const availableBalance = this.balance + this.overdraftLimit;
    if (amount <= availableBalance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log(
        `Exceeded overdraft limit. Available balance: ${availableBalance}`
      );
    }
  }
}
