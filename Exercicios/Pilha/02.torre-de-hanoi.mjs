/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from '../Pilha/Stack.mjs'

// Criando as torres
const torreA = new Stack()
const torreB = new Stack()
const torreC = new Stack()

// Estado inicial: discos na TorreB
torreB.push(4)
torreB.push(3)
torreB.push(2)
torreB.push(1)

// Função para mover disco
function mover(origem, destino) {
    if (origem.isEmpty) return

    const disco = origem.pop()

    // Regra: não pode colocar maior sobre menor
    if (!destino.isEmpty && destino.peek() < disco) {
        throw new Error("Movimento inválido!")
    }

    destino.push(disco)
}

// Torre de Hanoi (recursivo)
function hanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
        mover(origem, destino)
        return
    }

    hanoi(n - 1, origem, auxiliar, destino)
    mover(origem, destino)
    hanoi(n - 1, auxiliar, destino, origem)
}

// ===== ANTES =====
console.log("------- ANTES -------")
console.log("Torre A:", torreA.print())
console.log("Torre B:", torreB.print())
console.log("Torre C:", torreC.print())

// Executa
hanoi(4, torreB, torreA, torreC)

// ===== DEPOIS =====
console.log("------- DEPOIS -------")
console.log("Torre A:", torreA.print())
console.log("Torre B:", torreB.print())
console.log("Torre C:", torreC.print())
