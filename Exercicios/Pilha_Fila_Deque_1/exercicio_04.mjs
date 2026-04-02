// Exercício 4: Pilha com Capacidade Máxima
// Desafio: Modifique a classe Stack para ter um limite máximo de elementos.

import Stack from "../../lib/Stack.mjs"

let pilha = new Stack(3);

pilha.insert("Ação1");
pilha.insert("Ação2");
pilha.insert("Ação3");
console.log(pilha.print());

pilha.insert("Ação4");
console.log(pilha.print());

pilha.remove();
console.log(pilha.print());

pilha.insert("Ação4");
console.log(pilha.print());
