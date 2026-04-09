class Node {
    constructor(val){
        this.prev = null
        this.data = val
        this.next = null
    }
}

export default class DoublyLinkedList{
    #head
    #tail
    #count

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0
    }

    get count(){
        return this.#count
    }

    //método privado que encontra um nodo por sua posição
    #findNode(pos){
        let node
        //nodo encontra-se na primeira metade da lista
        if (pos < this.#count/2){
            node = this.#head
            for (let i = 0; i < pos; i++){
                node = node.next
            }
        }
        //nodo encontra-se na segunda metade da lista
        else{
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--){
                node = node.prev
            }
        }
        return node;
    }

    //método para inserir em qualquer posição
    insert(pos, val){
        let inserted = new Node(val)

        //1° caso: lista vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }

        //2° caso: inserção na primeira posição
        else if(pos === 0){
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }

        //3° caso: inserção na última posição
        else if(pos >= this.#count){
            inserted.prev = this.#tail
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //4° caso: inserção em posição intermediaria
        else{
            let nodePos = this.#findNode(pos)
            let before = nodePos.prev

            before.next = inserted

            inserted.prev = before

            inserted.next = nodePos

            nodePos.prev = inserted
        }

        this.#count++
    }

    //Método de atalho para inserção na primeira posição
    insertHead(val){
        this.insert(0, val)
    }

    //Método de atalho para inserção na última posição
    insertTail(val){
        this.insert(this.#count)
    }

    //Método para remover um nodo da lista
    remove(pos){
        let removed
        //1° caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        //2° caso: remoção do primeiro nodo
        if(pos === 0){
            removed = this.#head
            this.#head = removed.next

            if (this.#head){
                this.#head.prev = null
            }

            if (this.#count === 1){
                this.#tail = null
            }
        }

        //3° caso: remoção do ultimo nodo (tail)
        else if(pos === this.#count - 1){
            removed = this.#tail = removed.prev

            if (this.#tail){
                this.#tail.next = null
            }

            if (this.#count === 1){
                this.#head = null
            }
        }

        //4° caso: remoção em posição intermediária
        else{
            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next

            before.next = after
            after.prev = before
        }
        this.#count--

        return removed.data
    }

    //Método de atalho para remoção da primeira posição
    removeHead(){
        return this.remove(0)
    }

    //Método de atalho para remoção da última posição
    removeTail(){
        return this.remove(this.#count - 1)
    }

    peek(pos){
        //Lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        const node = this.#findNode(pos)
        return node.data
    }

    //Atalho para ver o primeiro
    peekHead(){
        return this.peek(0)
    }

    //Atalho para ver o último
    peekTail(){
        return this.peek(this.#count - 1)
    }

    // Método que retorna a posição do nodo cujo o conteudo foi especificado
    indexOf(val){
        const middle = Math.ceil(this.#count / 2)
        let node1 = this.#head
        let node2 = this.#tail

        for(let pos = 0; pos < middle; pos++){
            // Verifica se o valor está no node1
            if (val === node1.data) return pos

            // Verifica se valor está no node2
            if (val === node2.data) return this.#count - 1 - pos

            //node 1 e 2 avança e retrocede via next e prev, respectivamente
            node1 = node1.next
            node2 = node2.prev
        }

        return -1
    }

    print(){
        let output = '( '
        let node = this.#head

        for(let i = 0; i < this.#count; i++){
            if(output !== '( ') output += ', '
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ' ), count:' + this.#count
        return output
    }
}
