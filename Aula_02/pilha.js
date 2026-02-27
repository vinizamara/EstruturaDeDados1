/*let pilha = []

pilha.push(10)
pilha.push(15)
pilha.push(20)

console.log(pilha)

pilha.unshift(5)
console.log(pilha)*/

import Stack from "../lib/Stack.mjs"

let pilha = new Stack()

console.log(pilha.print())
console.log("Está vazia?", pilha.isEmpty)

pilha.insert(35)
pilha.insert(77)
pilha.insert(19)

console.log(pilha.print())
console.log("Está vazia?", pilha.isEmpty)

let removido = pilha.remove()
console.log({removido}, pilha.print())

let ultimo = pilha.peek()
console.log({ultimo}, pilha.print())
