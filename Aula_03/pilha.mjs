import Stack from "../lib/Stack.mjs";

let frase = "Socorram-me, subi no onibus em Marrocos"

let pilha = new Stack()

for (let i = 0; i < frase.length; i++){
    pilha.insert(frase.charAt(i))
}

console.log(pilha.print())

let reverso = ""

while (!pilha.isEmpty){
    reverso += pilha.remove()
}

console.log(" Reverso: ", reverso)
