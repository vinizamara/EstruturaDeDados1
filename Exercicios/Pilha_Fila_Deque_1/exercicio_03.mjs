// Exercício 3: Deque com Capacidade Limitada
// Desafio: Modifique a classe Deque para definir um tamanho máximo e impedir que novos elementos sejam inseridos quando o limite for atingido.

import Deque from "../../lib/Deque.mjs"

let deque = new Deque(5);

deque.insertFront(5);
deque.insertFront(4);
deque.insertBack(3);
deque.insertBack(2);
deque.insertFront(1);

console.log(deque.print());

deque.insertFront(6);
deque.insertBack(6);
console.log(deque.print());

deque.removeFront();
console.log(deque.print());

deque.insertFront(6);
console.log(deque.print());

deque.insertFront(8);
