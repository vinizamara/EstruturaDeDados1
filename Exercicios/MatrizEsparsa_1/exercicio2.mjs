/* 2. Big Data na Netflix (Código) 
Imagine que você é um desenvolvedor na Netflix. Temos uma matriz onde as 
linhas são usuários e as colunas são filmes. Como a maioria dos usuários não 
assistiu a todos os filmes, usamos o formato COO (Lista de Triplas) para não 
desperdiçar memória. 
Especificações Técnicas: 
Total de Usuários (Linhas): 4 
Total de Filmes (Colunas): 5 
Vetor de Pesos: Contém a importância de cada um dos 5 filmes para uma 
recomendação atual. 
Sua Tarefa de Programação 
Implemente em JavaScript uma função que realize a multiplicação da Matriz 
Esparsa (COO) pelo Vetor de Pesos. 
Requisitos do Código: 
A função deve receber um array de objetos (a matriz) e um array simples (o 
vetor). 
Proibido: Você não deve criar uma matriz densa (com zeros) em nenhum 
momento. 
O processamento deve ser eficiente, percorrendo apenas os elementos que 
existem na lista de triplas.  */

function multiplicarRecomendacao(matrizEsparsa, vetorDenso) { 
    // 1. Crie o vetor de resultado com tamanho 4 (número de usuários) preenchido com zeros 
    let resultado = new Array(4).fill(0)

    // 2. Percorra a matriz esparsa (lista de triplas) com um único laço 
    
    // 3. Aplique a lógica: Multiplique o 'valor' da nota pelo peso no 'vetorDenso'  
    // correspondente à 'coluna' e some no índice 'linha' do resultado. 
    // 4. Retorne o vetor de scores final 
} 

// --- DADOS PARA TESTE --- 
const avaliacoes = [ 
    // Usuário 0 -> Filme 1 (Nota 5) 
    // Usuário 1 -> Filme 3 (Nota 2) 
    // Usuário 3 -> Filme 0 (Nota 4) 
]; 

const pesos = [10, 20, 30, 40, 50]; // Pesos para os filmes 0, 1, 2, 3 e 4 

// Resultado esperado: [100, 80, 0, 40, 0] 
console.log("Seu resultado: ", multiplicarRecomendacao(avaliacoes, pesos)); 
