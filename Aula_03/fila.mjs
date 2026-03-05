import Queue from "../lib/Queue.mjs";

let fila = new Queue()
console.log(fila.print())
console.log("Está vazia?", fila.isEmpty)

//inserções na fila
fila.enqueue("Alexandre")
fila.enqueue("Jeremias")
fila.enqueue("João")
fila.enqueue("Maria")
console.log(fila.print())

//Quem será atendido
let proximo = fila.peek()
console.log({proximo})

//remoção da fila
let atendido = fila.dequeue()
console.log({atendido})

console.log(fila.print())