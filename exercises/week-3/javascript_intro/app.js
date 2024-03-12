//Loops
/*
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


//Exercise 3
// ≡ The following exercises are a little more challenging - but this is a good chance to practice your programmer’s mind. ≡
// Given this array:
// const posts = [
//   {id: 1, text: "Love this product"},
//   {id: 2, text: "This is the worst. DON'T BUY!"},
//   {id: 3, text: "So glad I found this. Bought four already!"}
// ]
// Write some code that removes the post with an id of 2 from the posts array. Can’t have any negative reviews of our product!
// Obviously, do not do posts.splice(1, 1) - you have to find the post to remove! (Of course, you will use splice - just not hard coded!)

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  let postId = 2; // Try to change from 1 till 3

  function removeNegativePost(posts, postId){
    for (let i = 0; i < posts.length; i++) {
        if (postId === posts[i].id) {
            posts.splice(i, 1);
        }
    }
    console.log(posts);
  }

  removeNegativePost(posts, postId);
*/

// Exercise 4
// Given this array:
// const posts = [
//   {
//     id: 1, 
//     text: "Love this product",
//     comments: []
//   },
//   { 
//     id: 2, 
//     text: "This is the worst. DON'T BUY!", 
//     comments: [
//                 {id: 1, text: "Idiot has no idea"}, 
//                 {id: 2, text:"Fool!"}, 
//                 {id: 3, text: "I agree!"}
//               ]
//    },
//    {
//     id: 3, 
//     text: "So glad I found this. Bought four already!",
//     comments: []
//    }
// ]
// You are given 2 as the ID of a post. Write some code that finds the comment with an ID of 3 (inside of a post with an ID of 2), and remove just that one comment.

const posts2 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  let postId2 = 2; 
  let commentId = 3;

  function removeCommentByPostIdAndCommentId(posts2, postId2, commentId){
    for (let i = 0; i < posts2.length; i++) {
        if(postId2 === posts2[i].id) {
            removeCommentById(posts2[i].comments, commentId);
            break;
        }
    }
    console.dir(posts2, {depth: null});
  }

  let comments = [];

  function removeCommentById(comments, commentId) {
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id === commentId) {
            comments.splice(i, 1);
            break;
        }
    }      
  }

    removeCommentByPostIdAndCommentId(posts2, postId2, commentId);
  