/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


const number1 = prompt("Insert the first number here: ")

const number2 = prompt("Insert the second number here: ")

if (number1 > number2) {
  console.log(number1);
}
else if (number2 > number1) {
  console.log(number2);

}