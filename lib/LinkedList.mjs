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
    #removedHistory = []; // armazena valores removidos

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
            
            this.#removedHistory.push(removed.data);
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

            this.#removedHistory.push(removed.data);
        }

        this.#count--

        return removed.data
    }

    //Método para remover o primeiro nodo da lista (atalho)
    removeHead() {
        return this.remove(0)
    }

    //Método para remover o ultimo nodo da lista (atalho)
    removeTail(){
        return this.remove(this.#count - 1)
    }

    indexOf(val){
        //1° caso: lista vazia
        if(this.isEmpty){
            return -1
        }

        let node = this.#head

        for(let i = 0; i < this.#count; i++){
            if(node.data === val){
                return i 
            }
            node = node.next
        }

        return -1
    }

    peek(pos){
        //1° caso: lista vazia ou posição fora dos limites
        if (this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        //2° caso: busca sequencial
        let node = this.#head
        for (let i = 0; i < pos; i++){
            node = node.next
        }
        return node.data
    }

    peekHead(){
        return this.peek(0)
    }

    peakTail(){
        return this.peek(this.#count - 1)
    }

    print(){
        let output = "( "
        let node = this.#head

        for (let i = 0; i < this.#count; i++){
            if(output !== "( "){
                output += ", "
            }
            output += `[${i}]: ${node.data}`
            node = node.next
        }
        output += ` ), count: ${this.#count}`
        return output
    }

    //Método para retoranar valores removidos
    history(){
        if (this.#removedHistory.length === 0){
            return "Nenhuma remoção ainda."
        }
        else{
            return this.#removedHistory
        }
    }

    //Método para inverter a ordem dos nós da lista encadeada.
    reverse(){
        let prev = null
        let current = this.#head
        let next = null

        // atualiza o tail (antigo head)
        this.#tail = this.#head

        while (current !== null){
            next = current.next      // guarda o próximo
            current.next = prev      // inverte o ponteiro
            prev = current           // avança prev
            current = next           // avança current
        }

        // atualiza o head
        this.#head = prev
    }

    // Método que conta quantas vezes um valor aparece na lista.
    countOcurrences(val){
        let quantOcurrences = 0
        let node = this.#head

        for (let i = 0; i < this.#count; i++){
            if (node.data == val){
                quantOcurrences++;
            }
            node = node.next
        }

        return "Ocorrências de " + val + ": " + quantOcurrences
    }

    // Método que remove todas as ocorrências de um valor na lista
    removeAll(val){
        let node = this.#head

        for (let i = 0; i < this.#count; i++){
            if (node.data == val){
                this.remove(i)
            }
        }
    }

    // Método que transforma a lista em um array comum
    toArray(){
        let arrayList = []
        let node = this.#head;

        for (let i = 0; i < this.#count; i++){
            arrayList.push(node.data);
            node = node.next;
        }

        return arrayList;
    }
}
