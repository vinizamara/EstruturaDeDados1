class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

export default class LinkedList{
    #head; // ínicio daaa lista (cabeça)
    #tail; // fim da lista (cauda)
    #count; // quantidade de nodos da lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty(){
        return this.#count === 0;
    }

    // Getter que retorna a quantidade de elementos da lista
    get count(){
        return this.#count;
    }

    // Método para inserir em qualquer posição
    insert(pos, val){
        // Cria o nodo para armazenar o valor pretendido
        const inserted = new Node(val);

        //1° Caso: a lista está vazia
        if (this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }

        //2° Caso: lista não vazia, inserção na primeira posição
        else if (pos === 0){
            inserted.next = this.#head;
            this.#head = inserted;
        }

        //3° Caso: inserção no final da lista
        else if (pos >= this.#count){
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        this.#count++;
    }
}
