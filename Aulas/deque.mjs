//lista de compras

import Deque from "../lib/Deque.mjs"

let listaCompras = new Deque()

console.log(listaCompras.print())
console.log("A lista de compras está vazia? \n" + listaCompras.isEmpty)

//Produtos Alimentícios -> início
listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Macarrão")
listaCompras.insertFront("Sal")
console.log(listaCompras.print())

//Produtos de Limpeza -> final
listaCompras.insertBack("Sabão em Pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Escova de Dentes")
listaCompras.insertBack("Água Sanitária")
console.log(listaCompras.print())

listaCompras.insertFront("Café")
listaCompras.insertFront("Açúcar")
console.log(listaCompras.print())

listaCompras.insertBack("Amaciante")
listaCompras.insertBack("Condicionador")
listaCompras.insertBack("Shampoo")
console.log(listaCompras.print())

let removido = listaCompras.removeFront()
console.log({removido})
console.log(listaCompras.print())

let frente = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log({frente})
console.log({ultimo})
