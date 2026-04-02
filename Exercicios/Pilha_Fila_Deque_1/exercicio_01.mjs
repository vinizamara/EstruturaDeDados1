// Exercício 1: Fila com Contador de Operações (Queue)
// Desafio: Modifique a classe Queue para contar quantas operações foram feitas na fila.

import Queue from "../../lib/Queue.mjs";

let fila = new Queue()
console.log(fila.print())

fila.enqueue("Ricardo")
fila.enqueue("Pedro")
fila.enqueue("Leonardo")

console.log(fila.print())
console.log(fila.getOperationCount)

fila.dequeue("Pedro")
console.log(fila.print())
console.log(fila.getOperationCount)

