// Exercise 39

/* JavaScript – Multiple inputs copy

The following exercise contains the following subjects:
● events

Instructions
Many times an application needs to verify the account by sending a verification code by text message.
Let's create functionality that enables the user to paste the verification code to the input fields.

Features:
1. The user is allowed to type the values manually. After each value is inserted, 
the next input will be focused.
2. The user is allowed to paste the verification code.
3. An extra challenge will be to auto submit the form once all inputs all populated.
   Things to think about:
   What happens if the user pastes only 3 digits and there are 6 inputs to fill out.
   Here is an example. 
   Things to help you:
   Google “paste event” to understand how to listen to a paste event.
   Google “clipboardData” to find out how to get the value of a paste event. 
*/

document.addEventListener("DOMContentLoaded", function () {
  const passInput = document.getElementById("password");
  const submitBtn = document.getElementById("submitBtn");

  function checkInput() {
    const passInputValue = passInput.value;
    if (passInputValue == "ABCd") {
      submitBtn.disabled = false;
      console.log("your code is correct");
    } else {
      submitBtn.disabled = true;
      console.log("Your code id wrong");
    }
  }

  passInput.addEventListener("paste", function (event) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData("text");

    passInput.value = pastedText;

    checkInput();
  });

  passInput.addEventListener("input", function () {
    checkInput();
  });

  submitBtn.addEventListener("click", function () {
    const passInputValue = passInput.value;
    console.log(passInputValue);
  });

  checkInput();
});
