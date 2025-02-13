/* L'utente inserisce due parole in successione, con due prompt. il software stampa prima la parola più corta poi la parola più lunga */

const first_word = prompt("Insert the first word here: ")

const second_word = prompt("Insert the second word here: ")

if (first_word.length > second_word.length) {
  console.log(`${first_word} is the longer word`);
  console.log(`${second_word} is the shorter word`);
}
else if (second_word.length > first_word.length) {
  console.log(`${second_word} is the longer word`);
  console.log(`${first_word} is the shorter word`);
}
else {
  console.log(`${first_word} and ${second_word} are the same length`);

}