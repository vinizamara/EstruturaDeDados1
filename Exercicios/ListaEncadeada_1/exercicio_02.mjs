// Exercício 2: Reversão da Lista
// Desafio: Crie um método reverse() que inverta a ordem dos nós da lista encadeada.

import LinkedList from "../../lib/LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item3");
lista.insertHead("Item2");
lista.insertHead("Item1");

console.log("Lista Antes de Inverter: " + lista.print());

lista.reverse();

console.log("Lista Após Inversão: " + lista.print());
