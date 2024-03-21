// Exercise 1

// Create a StringFormatter module. It should have two functions:
// capitalizeFirst - receives a string and returns the string with the first 
// letter uppercased, and the next ones lowercased

// toSkewerCase - receives a string and replaces any spaces with a dash
// const formatter = StringFormatter();

// formatter.capitalizeFirst("dorothy"); //should return Dorothy
// formatter.toSkewerCase("blue box"); //should return blue-box


const StringFormatter = function () {
    
    const capitalizeFirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    } 

    const toSkewerCase = function (str) {
        return str.replace(/ /g, '-')
    }

    return {
        capitalizeFirst : capitalizeFirst,
        toSkewerCase : toSkewerCase
    }
}

const formatter = StringFormatter() 

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box
