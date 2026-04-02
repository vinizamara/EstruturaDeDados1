// Exercício 5: Deque com Elementos Únicos
// Desafio: Modifique a classe Deque para não permitir valores duplicados.

import Deque from "../../lib/Deque.mjs";

let listaCompras = new Deque(10)

console.log(listaCompras.print())
console.log("A lista de compras está vazia? \n" + listaCompras.isEmpty)

listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Sal")
console.log(listaCompras.print())

listaCompras.insertFront("Sal")
listaCompras.insertBack("Sal")

listaCompras.removeFront();
console.log(listaCompras.print())

listaCompras.insertFront("Sal")
console.log(listaCompras.print())
