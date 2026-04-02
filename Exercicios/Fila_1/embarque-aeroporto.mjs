/*
    No aeroporto, os passageiros embarcam no avião seguindo a ordem de check-in.
    A sequência inicial de passageiros é:

    * Passageiro A
    * Passageiro B
    * Passageiro C
    * Passageiro D
    * Passageiro E
    
    1-) Crie um objeto filaAeroporto e insira os passageiros na fila corretamente.

    2-) Imprima a fila antes do início do embarque.

    3-) O primeiro passageiro foi chamado para o embarque. Remova esse passageiro e mostre o nome dele.

    4-) Imprima a fila após a remoção.

    5-) Três novos passageiros fizeram check-in:

    * Passageiro F
    * Passageiro G
    * Passageiro H
    
    Adicione-os à fila.

    6-) Imprima a fila após as alterações.

    7-) Quem é o próximo passageiro a embarcar? Mostre o comando e o nome do passageiro.

    8-) O próximo passageiro foi chamado. Remova essa pessoa e imprima a fila atualizada.

    */

    import Queue from '../Fila/Queue.mjs'

// 1) Criar fila e inserir passageiros
const filaAeroporto = new Queue()

filaAeroporto.enqueue("Passageiro A")
filaAeroporto.enqueue("Passageiro B")
filaAeroporto.enqueue("Passageiro C")
filaAeroporto.enqueue("Passageiro D")
filaAeroporto.enqueue("Passageiro E")

// 2) Imprimir fila inicial
console.log("----- FILA INICIAL -----")
console.log(filaAeroporto.print())

// 3) Embarque do primeiro passageiro
const embarcado1 = filaAeroporto.dequeue()
console.log("\nPassageiro embarcado:", embarcado1)

// 4) Fila após remoção
console.log("\n----- FILA APÓS EMBARQUE -----")
console.log(filaAeroporto.print())

// 5) Novos passageiros
filaAeroporto.enqueue("Passageiro F")
filaAeroporto.enqueue("Passageiro G")
filaAeroporto.enqueue("Passageiro H")

// 6) Fila atualizada
console.log("\n----- FILA ATUALIZADA -----")
console.log(filaAeroporto.print())

// 7) Próximo passageiro
console.log("\nComando: filaAeroporto.peek()")
console.log("Próximo passageiro:", filaAeroporto.peek())

// 8) Embarque do próximo passageiro
const embarcado2 = filaAeroporto.dequeue()
console.log("\nPassageiro embarcado:", embarcado2)

console.log("\n----- FILA FINAL -----")
console.log(filaAeroporto.print())