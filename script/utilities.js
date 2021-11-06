function calculateReport () {
    arraySpending = [typeTotal(Category.FOOD), typeTotal(Category.UTILITIES), typeTotal(Category.ENTERTAINMENT), typeTotal(Category.CUSTOM)];
    totalSpent = total();
    average = totalSpent/4;
    return totalSpent, min.array, max.array, average;
}

function userGuessAmount (totalSpent,maxCategory, minCategory, average, budget){
    userGuess = prompt("Guess how much you spent this month!") // this will implement some sort of get user input, can take it out if needed
    if (userGuess == totalSpent){
        print("Congratulations! You've guessed correctly. Here is a summary of all the money you spent so far.")
        print("You spent the most in this category " + maxCategory + "Try spending less in this category!")
        print("You spent the least in this category "+ minCategory)
        print("Here is the average amount spent so far. " + average)
    } else {
        if(totalSpent = budget.budgetTotal()){
            print("You actually spent this much: " + totalSpent)
        }
        else if(totalSpent > budget.budgetTotal()){
            print("Yikes! You went over budget. Try watching your spending in this category: " + maxCategory)

        }
        else{
            print("Yay! You've spent less than expected. Treat yourself!")
        }
    }
}