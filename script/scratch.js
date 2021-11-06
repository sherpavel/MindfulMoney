
function getUserInput (){ // all the categories will be objects
    food = ""
    utility = ""
    user_defined = "" // this object will have the user be able to input their own category, but be calculated in the same way
    entertainment = ""
    budget = ""
    return food, utility, user_defined, entertainment, budget
}

array = [] // of categories, but they will be objects

function calculateReport () {
    totalSpent = food + utility + user_defined + entertainment
    maxCategory = max.array
    minCategory = min.array
    average = totalSpent/4  // or how many categories is defined by the user
    return totalSpent, maxCategory, minCategory, average
}


calculateReport()
getUserInput()

function userGuessAmount (totalSpent,maxCategory, minCategory, average, budget){
    userGuess = prompt("Guess how much you spent this month!") // this will implement some sort of get user input, can take it out if needed
    if (userGuess = totalSpent){
        print("Congratulations! You've guessed correctly. Here is a summary of all the money you spent this month.")
        print("You spent the most in this category " + maxCategory + "Try spending less in this category!")
        print("You spent the least in this category "+ minCategory)
        print("Here is the average amount spent this month. " + average)
        
    } else {
        if(totalSpent = budget){
            print("You actually spent this much: " + totalSpent)
        }
        else if(totalSpent > budget){
            print("Yikes! You went over budget. Try watching your spending in this category: " + maxCategory)

        }
        else if (totalSpent < budget){
            print("Yay! You've spent less than expected. Treat yourself!")
        }

    }
}