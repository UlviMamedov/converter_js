function createInvestmentAccount(initialAmount, annualInterestRate) {
    let balance = initialAmount;
    let interestRate = annualInterestRate / 100;
    let totalProfit = 0;

    function calculateCompoundInterest(principal, rate, time) {
        return principal * Math.pow(1 + rate, time);
    }

    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited ${amount} into the account.`);
            } else {
                console.log("Invalid deposit amount. Please enter a positive value.");
            }
        },

        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                console.log(`Withdrawn ${amount} from the account.`);
            } else {
                console.log("Invalid withdrawal amount or insufficient funds.");
            }
        },

        calculateProfit: function(years) {
            const initialBalance = balance;
            const futureValue = calculateCompoundInterest(
                initialBalance,
                interestRate,
                years
            );
            const profit = futureValue - initialBalance;
            totalProfit += profit;
            return profit;
        },

        getAccountInfo: function() {
            return `Balance: $${balance.toFixed(2)}, Interest Rate: ${annualInterestRate}%, Total Profit: $${totalProfit.toFixed(2)}`;
        }
    };
}

const myAccount = createInvestmentAccount(1000, 5);
myAccount.deposit(500);

alert(`Profit after 1 year: $${myAccount.calculateProfit(1).toFixed(2)}`);
alert(myAccount.getAccountInfo());