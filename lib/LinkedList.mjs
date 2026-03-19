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

        //4° Caso: posição intermediária
        else{
            let before = this.#head

            for (let i = 1; i < pos; i++){
                before = before.next
            }

            let after = before.next

            inserted.next = after
            before.next = inserted
        }

        this.#count++;
    }

    //Método para inserção na primeira posição (atalho)
    insertHead(val){
        this.insert(0, val)
    }

    //Método para inserção na última posição (atalho)
    insertTail(val){
        this.insert(this.#count, val)
    }

    //Método para remoção de um nodo na lista
    remove(pos){
        //1° caso: a lista está vazia ou a posição informada está fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        let removed

        //2° caso: remoção do início da lista
        if(pos === 0){
            removed = this.#head
            this.#head = this.#head.next

            //Caso o início seja o último
            if (this.#count === 1){
                this.#tail = null
            }
        }

        //3° caso: remoção de nodo intermediário ou final
        else{
            let before = this.#head
            for (let i = 1; i < pos; i++){
                before = before.next
            }

            removed = before.next

            let after = removed.next

            before.next = after

            // atualiza o tail em caso de remoção
            if (pos === this.#count - 1){
                this.#tail = before
            }
        }

        this.#count--

        return removed.data
    }
}
