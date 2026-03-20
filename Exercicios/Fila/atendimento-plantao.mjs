/*
    1. O Professor Alexandre estava com febre e decidiu ir ao plantão médico.
    Quando ele chegou, havia 10 (dez) pessoas na sua frente:
    José, Sérgio, Joaquim, Maria, João, Samuel, Vicente, Terezinha, Firmino e Toninho
    
    2. Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila,
    o primeiro passo é importar a classe apropriada da pasta "lib" e depois criar o nosso "objeto" atendimento.
*/

/*
    3. Utilizando os conceitos e os arquivos de "FILA" feitos em sala, faça com que essa fila esteja na sequência a seguir
    para que o atendimento do plantão possa começar:
    
    1. José
    2. Sérgio
    3. Joaquim
    4. Maria
    5. João
    6. Samuel
    7. Vicente
    8. Terezinha
    9. Firmino
    10. Toninho
    11. Alexandre
*/

/*
    4. Imprima a fila na ordem correta (Utilize o comando correto).
*/

/*
    5. O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/

/*
    6. Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento (Utilize o comando correto).
*/

/*
    7. Equanto todos aguardavam o atendimento, chegaram mais 3 (três) pessoas na seguinte sequência (Utilize o comando correto):
    - Rafael
    - Isabela
    - Cauã
    Adicione eles na ordem da fila
*/

/*
    8. Imprima a fila na ordem correta depois das alterações (Utilize o comando correto).
*/

/*
    9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:
    Mostre o comando a ser executado e qual o nome da próxima pessoa que será atendida.
*/

/*
    10. O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila.
    Logo ela foi removido da fila (Utilize o comando correto).
*/

/*
    11. Imprima a fila na ordem correta depois de todas as alterações (Utilize o comando correto).
*/

import Queue from '../Fila/Queue.mjs'

// 2. Criando o objeto atendimento
const atendimento = new Queue()

// 3. Montando a fila na ordem correta
atendimento.enqueue("José")
atendimento.enqueue("Sérgio")
atendimento.enqueue("Joaquim")
atendimento.enqueue("Maria")
atendimento.enqueue("João")
atendimento.enqueue("Samuel")
atendimento.enqueue("Vicente")
atendimento.enqueue("Terezinha")
atendimento.enqueue("Firmino")
atendimento.enqueue("Toninho")
atendimento.enqueue("Alexandre")

// 4. Imprimindo a fila inicial
console.log("----- FILA INICIAL -----")
console.log(atendimento.print())

// 5 e 6. Chamando a primeira pessoa da fila
const atendido1 = atendimento.dequeue()
console.log("\nPessoa atendida:", atendido1)

console.log("\n----- FILA APÓS O PRIMEIRO ATENDIMENTO -----")
console.log(atendimento.print())

// 7. Adicionando mais 3 pessoas
atendimento.enqueue("Rafael")
atendimento.enqueue("Isabela")
atendimento.enqueue("Cauã")

// 8. Imprimindo a fila após as alterações
console.log("\n----- FILA APÓS NOVAS CHEGADAS -----")
console.log(atendimento.print())

// 9. Mostrando o próximo da fila
console.log("\nComando para verificar o próximo:")
console.log("atendimento.peek()")
console.log("Próxima pessoa a ser atendida:", atendimento.peek())

// 10. Chamando a próxima pessoa
const atendido2 = atendimento.dequeue()
console.log("\nPessoa atendida:", atendido2)

// 11. Imprimindo a fila final
console.log("\n----- FILA FINAL -----")
console.log(atendimento.print())
