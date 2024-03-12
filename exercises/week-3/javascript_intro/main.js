/*
// Exercise 1- Jill & Robert dating
// Create two ‘people’ objects, p1 and p2. Each should have the following properties:
// name
// age
// city
// Write some code with the following logic:
// If the people are the same age
// If the people live in the same city
// Print “Jill wanted to date Robert”
// If they’re not in the same city
// Print “Jill wanted to date Robert, but couldn’t”
// Note that the only data should be in the objects - in your if conditions, make sure to use the objects’ properties (keys).

let p1 = { name: "Jill", age: 45, city: "Haifa" };
let p2 = { name: "Robert", age: 45, city: "Tel-Aviv" };

function dateJillAndRobert(p1, p2) {
  if (p1.age == p2.age && p1.city == p2.city) {
    return "Jill wanted to date Robert";
  } else if (p1.city != p2.city) {
    return "Jill wanted to date Robert, but couldn’t";
  } else {
    return "Jill and Robert live in the same city and have same age";
  }
}

console.log(dateJillAndRobert(p1, p2));

// Exercise 2 - Library
// Create an object called library that has a books key
// The value of books should be an array of book objects
// Each book should have a title and author key

let library = {
  books: [
    { title: "War and Peace", author: "L.N.Tolstoy" },
    { title: "Belaya Bereza", author: "S.Esenin" },
  ],
};

console.log(library);
*/

/*
// Exercise 3 - Extra Practice
// The above code is a reservation system where people can claim their reservations when they arrive.
// After receiving the name from the prompt,
// If the reservation exists and is unclaimed, welcome the user (console log or use alert)
// If the reservation exists and is already claimed, inform the user about the situation
// If there is no reservation, tell the user there is nothing under their name
// Use ‘Bob’ and ‘Ted’ to test your code:
// When you test Bob, it should say “Welcome, Bob”
// When you test Ted, it should say “Hmm, someone already claimed this reservation”
// If you try a different name, it should say “You have no reservation”

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
  const name = prompt('Please enter the name for your reservation');

  
  function checkReservation(reservations, name) {
    if (reservations[name] && reservations[name].claimed == false) {
        return alert("Welcome " + name + "!");
    }  else if (reservations[name] && reservations[name].claimed == true) {
        return alert(name + " - your reservation already claimd!");
    } else {
        return alert(name + " - there is nothing under your name!")
    }
  }

  checkReservation(reservations, name);
  */

  /*
  // Exercise 3.1
  // It so happens that our restaurant has a bunch of open tables.
  // Therefore, if someone doesn’t have a reservation, add it to the reservations object and set “claimed” to true for that person.
  const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
  const name = prompt('Please enter the name for your reservation');

  function addPersonToClaimed(name, reservations) {
        if (!(name in reservations) || (name in reservations && reservations[name].claimed === false)) {
            reservations[name] = {claimed: true};
            return alert(name + " - the table was claimed");
        } else {
            return alert(name + " - you are already booked a table before");
        } 
  };

  addPersonToClaimed(name, reservations);
  */

  /*
// Exercise 3.2
// As of now, ‘Ted’ and ‘ted’ are two different names in our system. Change your code so that ‘ted’ and ‘Ted’ or even ‘TeD’ is all the same.
// You might be interested in toLowerCase.
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };

  const name = prompt('Please enter the name for your reservation');

  function addPersonToClaimed(name, reservations) {
        const nameLowerCase = name.toLowerCase();
        const reservationsLowCase = {};
        for (const key in reservations) {
            reservationsLowCase[key.toLowerCase()] = reservations[key];
        }
        if (!(nameLowerCase in reservationsLowCase) || (reservationsLowCase[nameLowerCase].claimed  === false)) {
            reservations[name] = {claimed: true};
            return alert(name + " - the table was claimed");
        } else {
            return alert(name + " - you are already booked a table before");
        } 
  };

  addPersonToClaimed(name, reservations);
  */

// Extensions
const date = 3;

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: true, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
};



function isExpired(date, product) {
    if (product === kitchen.items.name) {
        let isExpired = kitchen.items[name].expiryDate - date;
        if (isExpired < 0) {
            return true;
        }
    } else {
        return false;
    }
};

function isOvenOrFridgeWorking(date, kitchen) {

    
}




