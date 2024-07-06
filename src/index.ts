import { Account } from "./Account";
import { SavingsAccount } from "./SavingsAccount";
import { CurrentAccount } from "./CurrentAccount";

function main() {
  const savingsAccount = new SavingsAccount(1001, 5000, 5);
  savingsAccount.showBalance();
  savingsAccount.deposit(2000);
  savingsAccount.addInterest();
  savingsAccount.withdraw(3000);
  savingsAccount.showBalance();

  const currentAccount = new CurrentAccount(2001, 10000, 2000);
  currentAccount.showBalance();
  currentAccount.deposit(3000);
  currentAccount.withdraw(15000);
  currentAccount.showBalance();
}

main();
