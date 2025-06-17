/*
function declaration vs function expressions --> function to const
declarations can be defined afer they are called
expressions need to be defined before they are called (out of scope)
general rule of thumb is place functions at the top of the code for function and readability
*/

/*
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
*/

const getRandomNumber = function (upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1
  return randomNumber
}

getRandomNumber(10)
