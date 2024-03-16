// Exercise 19

// The following exercise contains the following subjects:
// ● Array

// Instructions
// For each of the questions below, answer the questions with this array:
// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all of the people.
// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
// 4. Write the command to add "Matt" to the front of the array.
// 5. Write the command to add your name to the end of the array.
// 6. Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.
// 7. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
// 8. Write the command that gives the indexOf where "Mary" is located.
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth" and "Artie". Your array should look like this when you are done 
// ["Greg", "Mary", "Elizabeth", "Artie", "James"].
// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"

const people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a loop, iterate through this array and console.log all of the people.
let iteratePeopleArray = (function (people){
    people.forEach(element => {
        console.log(element);
    });
})(people);

// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
let removePersonFromPeopleArray = function(people, name){
    let index = people.indexOf(name);
    people.splice(index, 1);
    console.log(people);
}; 
removePersonFromPeopleArray(people, 'Greg');
removePersonFromPeopleArray(people, 'James');

// 4. Write the command to add "Matt" to the front of the array.
let addPersonToFrontOfPeopleArray = function (people, name) {
    people.unshift(name);
    console.log(people);
};
addPersonToFrontOfPeopleArray(people, 'Matt');

// 5. Write the command to add your name to the end of the array.
let addPersonToEndOfPeopleArray = function (people, name) {
    people.push(name);
    console.log(people);
};
addPersonToEndOfPeopleArray(people, 'Sergey');

// 6. Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.
let iteratePeopleArrayUntilName = function (people, name) {
    let index = people.indexOf(name);
    
    for (let i = 0; i <= index; i++) {
        console.log(people[i]);
    }
};
iteratePeopleArrayUntilName(people, 'Mary');

// 7. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
let copyPeopleArrayWithoutName = function (people, name) {
    let index = people.indexOf(name);
    let newPeople = people.slice();
    newPeople.splice(index, 1); 
    console.log(newPeople);
};
copyPeopleArrayWithoutName(people, 'Mary');

// 8. Write the command that gives the indexOf where "Mary" is located.
let findIndexInArrayByName = function (people, name) {
    let index = people.indexOf(name);
    console.log('Index of ' + name + ' in array is ' + index);
}; 
findIndexInArrayByName(people, 'Mary');

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
findIndexInArrayByName(people, 'Foo');

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth" and "Artie". Your array should look like this when you are done 
// ["Greg", "Mary", "Elizabeth", "Artie", "James"].
const people10 = ["Greg", "Mary", "Devon", "James"];
const newNames = ["Elizabeth", "Artie"];
let removeNameAndAddNewNamesInArray = function (people10, name, newNames) {
    let index = people10.indexOf(name);
    people10.splice(index, 1, ...newNames) 
    console.log(people10);
} (people10, 'Devon', newNames); 

// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let concatinateWithBob = function(people, withName){
    let withBob = people.map((name) => name.concat(withName));
    console.log(withBob);
} (people, 'WithBob');



