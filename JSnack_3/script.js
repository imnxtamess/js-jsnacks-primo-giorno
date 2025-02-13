/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let number_sum = 0;

for (let i = 1; i <= 10; i++) {
  const this_number = Number(prompt("Insert a number here: "))
  console.log(this_number);
  number_sum += this_number
}

console.log(number_sum);

