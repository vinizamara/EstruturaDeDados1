// Exercício 4: Remoção de Todas as Ocorrências
// Desafio: Crie um método removeAll(val) que remove todas as ocorrências de um valor na lista.

import LinkedList from "../../lib/LinkedList.mjs";

let lista = new LinkedList()

lista.insertHead("Item1");
lista.insertHead("Item3");
lista.insertHead("Item1");
lista.insertHead("Item2");
lista.insertHead("Item1");

console.log("Lista Antes da Remoção do 'Item1': " + lista.print());

lista.removeAll("Item1");

console.log("Lista Depois da Remoção do 'Item1': " + lista.print());
