export default class Deque {
    #data

    constructor(){
        this.#data = []
    }

    //Método para inserção no inicio da estrutura
    insertFront(val){
        this.#data.unshift(val)
    }

    //Método para inserção no final da estrutura
    insertBack(val){
        this.#data.push(val)
    }

    //Método para remoção do início da estrutura
    removeFront(){
        return this.#data.shift()
    }

    //Método para remoção do final da estrutura
    removeBack(){
        return this.#data.pop()
    }

    //Método para consultar o início da estrutura
    peekFront(){
        return this.#data[0]
    }

    //Método para consultar o final da estrutura
    peekBack(){
        return this.#data[this.#data.length - 1]
    }

    get isEmpty(){
        return this.#data.length === 0 ? "Sim, está vazia!" : "Não, não está vazia!"
    }

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
