export default class Queue{
    #data //vetor private (encapsulamento)

    constructor(){
        this.#data = []
    }


    //Método para inserção na fila
    //enqueue para infilerar
    enqueue(val){
        this.#data.push(val)
    }

    //método para remoção na fila
    dequeue(){
        return this.#data.shift()
    }

    //método para consultar o ínicio da fila sem remover
    peek(){
        return this.#data[0]
    }

    //verificação se a fila está vazia
    get isEmpty(){
        return this.#data.length === 0
    }

    //método de impressão
    print(){
        let output = "[ "
        for (let i = 0; i < this.#data.length; i++){
            if (output !== "[ "){
                output += ", "
            }
            output += `(${i+1}°): ${this.#data[i]}`
        }
        return output + " ]"
    }
}
