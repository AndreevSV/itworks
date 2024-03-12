//Loops

//Exercises

//Exercise 1
// Write a loop that populates (adds to) the people array with objects, that have a name and age, like this:
// {name: "Ashley", age: 23}
// Ultimately, when you console log people, it should look like this:
// {name: "Ashley", age: 23},
// {name: "Donovan", age: 47},
// {name: "Lucas", age: 18}

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

function addPeopleToObject(names, ages) {
    for (let index = 0; index < names.length; index++) {
        let person = {name: names[index], age: ages[index]};
        people.push(person);
    }
    console.log(people);
}

addPeopleToObject(names, ages);

//Exercise 2 (Extra Practise)
// Based off the people array from before, write a loop that prints out "Ashley is 23 years old", "Donovan is 47 years old", etc.
// Again, consider which loop is most appropriate.
// Note that this is different from Exercise 1 ;)
function logPhrases(people) {
    for (const key in people) {
        let name = people[key].name;
        let age = people[key].age;
        console.log(name + " is " + age + " years old.");
    }
}

logPhrases(people);
