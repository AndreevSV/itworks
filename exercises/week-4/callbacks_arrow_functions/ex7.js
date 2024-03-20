// Exercise 7

// const explode = (lightFunc, soundFunc, sound) => {
//   lightFunc();
//   soundFunc(sound);
// };

// const shineLight = () =>
//   (document.getElementById("box").style.backgroundColor = "yellow");

// const makeSound = (sound) => alert(sound);

// explode(shineLight, makeSound, "BOOM");
// Study the code in the image above, think about what you expect to happen, 
// and then complete the HTML to make the code work.

const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById("box").style.backgroundColor = "yellow");

const makeSound = (sound) => alert(sound);

explode(shineLight, makeSound, "BOOM");

