class BankAccount {

  constructor(type) {
    this.type = type
    this.balance = 0
    this.transactionHistory = []
  }

  withdraw(num) {
    this.transactionHistory.push("withdraw " + (this.balance - num))
    this.balance = this.balance - num
  }

  deposit(num) {
    this.transactionHistory.push("deposit " + (this.balance + num))
    this.balance = this.balance + num
  }

  showBalance() {
    console.log(this.balance);
  }

}

var newAcc = new BankAccount('checking')
