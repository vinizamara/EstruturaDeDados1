// Exercício 5: Transformar Lista em Array
// Desafio: Crie um método toArray() que transforma a lista em um array comum ([]).

import LinkedList from "../../lib/LinkedList.mjs";

let lista = new LinkedList();

lista.insertHead("Item3");
lista.insertHead("Item2");
lista.insertHead("Item1");

console.log("Lista Atual Como Array: ")
console.log(lista.toArray());
