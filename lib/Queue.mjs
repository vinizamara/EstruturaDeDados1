export default class Queue{
    #data //vetor private (encapsulamento)
    #operationCount = 0 //varável para contar quantas operações foram realizadas

    constructor(){
        this.#data = []
    }


    //Método para inserção na fila
    //enqueue para infilerar
    enqueue(val){
        this.#operationCount++;
        this.#data.push(val)
    }

    //método para remoção na fila
    dequeue(){
        this.#operationCount++;
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

    //Retorna o total de operações feitas
    get getOperationCount(){
        return "O total de operações feitas foram: " + this.#operationCount
    }
}
