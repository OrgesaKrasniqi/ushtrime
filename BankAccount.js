class BankAccount {
  // Private field
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  // Deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    } else {
      console.log("Insufficient balance or invalid amount.");
    }
  }

  // Read-only balance
  getBalance() {
    return this.#balance;
  }
}

// Example usage
const account = new BankAccount(100);
account.deposit(50);       // Deposited: $50
account.withdraw(30);      // Withdrew: $30
console.log(account.getBalance()); // 120

// Trying to access private field directly
console.log(account.#balance); // SyntaxError
