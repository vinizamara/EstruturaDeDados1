/*
    1. Utilizando o arquivo "PILHA" da pasta "lib".
    Descreva todo o código abaixo a partir do estado da pilha (inicialmente vazia)
    e após cada uma das operações a seguir:
    
    push(5)
    push(9)
    pop()
    push(3)
    push(8)
    pop()
    pop()
    push(6)
    push()
    push(2)
    pop()
    push(10)
    push(1)
    pop()
    pop()
    push(15)
    pop()
    pop()
    
*/

import Stack from '../Pilha/Stack.mjs'

const pilha = new Stack()

pilha.push(5)
console.log(pilha.print())

pilha.push(9)
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.push(3)
console.log(pilha.print())

pilha.push(8)
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.push(6)
console.log(pilha.print())

pilha.push()
console.log(pilha.print())

pilha.push(2)
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.push(10)
console.log(pilha.print())

pilha.push(1)
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.push(15)
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())

pilha.pop()
console.log(pilha.print())
