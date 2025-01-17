//Prompt user to input Farenheit temp and convert the input into a number.
const fahrenheitInput = prompt 
  ('Enter the Fahrenheit temperature. We will convert it to Celcius for you.');

const fahrenheitTemp = Number(fahrenheitInput);

//Create a function that turns Fahrenheit into Celsius.
const convertToCelsius = Math.floor((fahrenheitTemp - 32) * (5/9));

//A function that returns a description of the Fahrenheit temperature.
const describeTemperature = () => { 
  if (fahrenheitTemp < 32) {
    return (`very cold`);
} else if (fahrenheitTemp < 64) {
    return (`cold`);
} else if (fahrenheitTemp < 86) {
    return (`warm`);
} else if (fahrenheitTemp < 100) {
    return (`hot`);
} else {
    return (`very hot`);
}}

//Alert user of Fahrenheit and Celsius temperatures and how it feels.
alert(`The temperature is ${fahrenheitTemp}F, which is ${convertToCelsius}C. It feels ${describeTemperature()} outside.`);


//EXTRA PRACTICE - Random Number Generator
//Create a function that takes a number in and returns a random number between 0 and the input.
const userInput = prompt (`Enter any number above '0'.`);
const userNumber = Number(userInput);
const getRandomInt = Math.floor(Math.random() * (userNumber));

alert(`Your random number is: ${getRandomInt}`);