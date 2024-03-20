// Exercise 6 - Arrow functions

// Given the following:
// const determineWeather = (temp) => {
//   if (temp > 25) {
//     return "hot";
//   }
//   return "cold";
// };
// Create a one-line arrow function called commentOnWeather that takes one parameter, temp. 
// It should call determineWeather and return the concatenation of "It’s " and 
// determineWeather’s output:
// commentOnWeather(30); //returns "It's hot"
// commentOnWeather(22); //returns "It's cold"


const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) => console.log('It\'s ' + determineWeather(temp));

commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
