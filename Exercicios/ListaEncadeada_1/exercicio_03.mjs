// Exercício 3: Contagem de Ocorrências (REPETIDOS)
// Desafio: Crie um método countOccurrences(val) que conta quantas vezes um valor aparece na lista.

import LinkedList from "../../lib/LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item1");
lista.insertHead("Item3");
lista.insertHead("Item1");
lista.insertHead("Item2");
lista.insertHead("Item1");

console.log("Lista Atual: " + lista.print());

console.log(lista.countOcurrences("Item1"));
console.log(lista.countOcurrences("Item2"));
