/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
  se è dispari inseriscilo nell’array. */

let number_list = []

for (i = 1; i <= 6; i++) {
  const this_number = Number(prompt("Insert a number here: "))
  console.log(this_number);
  if (this_number % 2 === 1) {
    number_list.push(this_number)
  }
}

console.log(number_list);
