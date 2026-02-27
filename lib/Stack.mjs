export default class Stack{
    #data // vetor privado

    constructor(){
        this.#data = []
    }

    // método para inserção no vetor
    insert(val){
        this.#data.push(val)
    }

    // método de remoção no vetor
    remove(){
        return this.#data.pop()
    }

    // verificar o topo da pilha
    peek(){
        return this.#data[this.#data.length - 1]
    }

    // verificar se pilha está vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    // mostra lista em string
    print(){
        return JSON.stringify(this.#data)
    }
}
