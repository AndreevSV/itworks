// Exercise 2

// Create a Bank module. It should have a variable and two functions:
// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950
// The above is not a mistake. The names are purposefully different from the instructions. Understand why?

const Bank = function () {
  let _money = 500;

  const depositCash = function (cash) {
    return (_money += cash);
  };

  const checkBalance = function () {
    console.log(_money);
  };

  return {
    deposit: depositCash,
    showBalance: checkBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
