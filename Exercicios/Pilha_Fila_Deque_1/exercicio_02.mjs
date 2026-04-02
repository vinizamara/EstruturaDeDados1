// Exercício 2: Pilha com Histórico de Remoções (Stack)
// Desafio: Modifique a classe Stack para armazenar um histórico dos elementos que foram removidos (pop).

import Stack from "../../lib/Stack.mjs";

let pilha = new Stack();

pilha.insert("Site1");
pilha.insert("Site2");
pilha.insert("Site3");

console.log(pilha.print());

pilha.remove();
pilha.remove();
console.log(pilha.print());

console.log(pilha.history)
