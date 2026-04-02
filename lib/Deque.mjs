export default class Deque {
    #data
    #tamanhoMax // valor maximo que aa lista podeter de tamanho

    constructor(tamanhoMax){
        this.#data = []
        this.#tamanhoMax = tamanhoMax
    }

    //Método para inserção no inicio da estrutura
    insertFront(val){
        if (this.#data.length < this.#tamanhoMax && this.isValIn(val) == false){
            this.#data.unshift(val)
        }
        //Se valor já existe na lista
        else if (this.isValIn(val) == true){
            console.log("Erro! O valor já existe na lista")
        }
        //Se ele for maior do que o maximo
        else{
            console.log("Erro! A lista já está com seu tamanho máximo")
        }
    }

    //Método para inserção no final da estrutura
    insertBack(val){
        if (this.#data.length < this.#tamanhoMax && this.isValIn(val) == false){
            this.#data.push(val)
        }
        //Se valor já existe na lista
        else if (this.isValIn(val) == true){
            console.log("Erro! O valor já existe na lista")
        }
        //Se ele for maior do que o maximo
        else{
            console.log("Erro! A lista já está com seu tamanho máximo")
        }
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

    //Método de verificação de valores repetidos na lista
    isValIn(val){
        return this.#data.includes(val)
    }
}
