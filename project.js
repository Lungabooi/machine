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

const depositAmount = deposit();

const numberOflines = getNumberOflines();