// Exercício 1: Histórico de Remoções
// Desafio: Modifique a LinkedList para armazenar um histórico dos elementos removidos.

import LinkedList from "../../lib/LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item3");
lista.insertHead("Item2");
lista.insertHead("Item1");

console.log("Lista Atual: " + lista.print());
console.log("Histórico de remoções: " + lista.history());

lista.remove(1);

console.log("Lista Após remoção: " + lista.print());
console.log("Histórico de remoções: " + lista.history());
