// Deposit monoey
// Dertimine number of lines 
// collect bet amount
// Spin the slot machine
// Check if user won
// Give user their winnings
// Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const currencyDepositAmount = parseFloat(depositAmount);

    if(isNaN(currencyDepositAmount) || currencyDepositAmount <=0 ){
        console.log("Invalid Deposit Amount, try Again")
    } else {
        return currencyDepositAmount;
    }
 }

};

const getNumberOflines = () => {
    while (true){
        const lines = prompt("Enter the number of lines to bet (1-3): ");
        const numberOflines = parseFloat(lines);
    
        if(isNaN(numberOflines) || numberOflines <=0  || numberOflines > 3){
            console.log("Invalid number of lines ")
        } else {
            return numberOflines;
        }
     }
    

}

const getBet = (balance, lines) => {
    while (true){
        const bet = prompt("Enter the total bet (1-3): ");
        const numberBet = parseFloat(lines);
    
        if(isNaN(numberBet) || numberBet <=0  || numberBet > balance / lines){
            console.log("Invalid bet, try again ")
        } else {
            return numberBet;
        }
     }

}




let balance = deposit();

const numberOflines = getNumberOflines();
const bet = getBet(balance, numberOflines);