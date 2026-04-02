export default class Stack{
    #data // vetor privado
    #historyData = [] //vetor privado para armazenar elementos removidos
    #tamanhoMax // Define tamanho máximo da pilha

    constructor(tamanhoMax){
        this.#data = []
        this.#tamanhoMax = tamanhoMax
    }

    // método para inserção no vetor
    insert(val){
        if (this.#data.length < this.#tamanhoMax){
            this.#data.push(val)
        }
        //Caso exceda o tamanho máximo
        else{
            console.log("Erro! A pilha já está com seu tamanho máximo")
        }
    }

    // método de remoção no vetor
    remove(){
        this.#historyData.push(this.#data[this.#data.length-1])
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

    //Método para retornar elementos retirados da pilha
    get history(){
        return this.#historyData
    }
}
