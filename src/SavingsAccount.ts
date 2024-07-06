import { Account } from "./Account";

export class SavingsAccount extends Account {
  private interestRate: number;

  constructor(
    accountNumber: number,
    initialBalance: number,
    interestRate: number
  ) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interestAmount = this.balance * (this.interestRate / 100);
    this.deposit(interestAmount);
    console.log(
      `Added interest of ${interestAmount}. New balance: ${this.balance}`
    );
  }
}
