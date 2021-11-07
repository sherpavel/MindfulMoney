function calculateReport () {
    var arraySpending = [typeTotal(CATEGORY.FOOD), typeTotal(CATEGORY.UTILITIES), typeTotal(CATEGORY.ENTERTAINMENT), typeTotal(CATEGORY.CUSTOM)];
    var totalSpent = total();
    var average = totalSpent/4;
    
    return totalSpent, min.array, max.array, average;
}

function userGuessAmount (totalSpent,maxCategory, minCategory, average, budget){
    var userGuess = prompt("Guess how much you spent this month!") // this will implement some sort of get user input, can take it out if needed
    if (userGuess == totalSpent){ // user guesses the amount they spent correctly
        print("Congratulations! You've guessed correctly. Here is a summary of all the money you spent so far.")
    } else {// user doesn't guess correctly, show the actual amount
        if(totalSpent = budget.budgetTotal()){  //if they spent just enough
            print("You actually spent this much: " + totalSpent)

        }
        else if(totalSpent > budget.budgetTotal()){ // if they spent over their budget
            print("Yikes! You went over budget. Try watching your spending in this category: " + maxCategory)
        }
        else{ // if they spent less than their budget
            print("Yay! You've spent less than expected. Treat yourself!")
        }
    }// summary statistics below
    print("You spent the most in this category " + maxCategory + "Try spending less in this category!")
    print("You spent the least in this category "+ minCategory)
    print("Here is the average amount spent so far. " + average)
}