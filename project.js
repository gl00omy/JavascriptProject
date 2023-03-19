//1. deposit some money
//2. determine number of lines to bet on
//3. collect a bet amount
//4. spin the slot machine 
//5. check if the user won
//6. give the user money
//7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <=0 ) {
            console.log("Invalid deposit amoun, try again.");
        } else {
            return numberDepositAmount;
        }
    }
}

const  DepositAmount = deposit();
console.log(deposit)