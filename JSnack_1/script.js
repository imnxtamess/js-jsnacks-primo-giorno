/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


const number1 = Number(prompt("Insert the first number here: "))
console.log(number1);

const number2 = Number(prompt("Insert the second number here: "))
console.log(number2);

if (number1 > number2) {
  console.log(`${number1} is greater than ${number2}`);
}
else if (number2 > number1) {
  console.log(`${number2} is greater than ${number1}`);
}
else {
  console.log("The numbers are equal");

}