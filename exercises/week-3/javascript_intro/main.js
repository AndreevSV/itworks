/*
// Exercise 1- Jill & Robert dating
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
let library = {
  books: [
    { title: "War and Peace", author: "L.N.Tolstoy" },
    { title: "Belaya Bereza", author: "S.Esenin" },
  ],
};

console.log(library);
*/

// Exercise 3 - Extra Practice
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