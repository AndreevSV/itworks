let boughtTesla = true;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = true;
let currentYear = 2018;

function checkAgeOfTesla(yearOfTeslaPurchase, currentYear) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        return "Would you like an upgrade for you Tesla?";
    } else {
        return "Are you satisfied with your Tesla?";
    }
}

function checkForBoughtAndCitizenship(boughtTesla, isUSCitizen){
    if (boughtTesla == true && isUSCitizen == true) {
        return checkAgeOfTesla(yearOfTeslaPurchase, currentYear);
    } else if (boughtTesla == true && isUSCitizen == false) {
        return "Would you like to move to the US?";
    } else if (boughtTesla == false) {
        return "Would you like to buy a Tesla?";
    }
}

console.log(checkForBoughtAndCitizenship(boughtTesla, isUSCitizen));


