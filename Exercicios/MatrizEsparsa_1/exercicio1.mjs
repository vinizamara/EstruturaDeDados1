/*1. Calcule quantos Gigabytes (GB) seriam necessários para armazenar essa 
matriz no formato Denso (onde guardamos todos os zeros), considerando 
que cada número ocupa o tipo padrão de 4 bytes. */

/* 
R: Tendo em vista que são 10.000 filmes e 1.000.000 usuários, temos que o total de bytes sendo utilizados para os números é:
1.000.000 * 10.000 * 4 = 40.000.000.000 bytes
40.000.000.000 bytes = 39.062.500 KB
39.062.500 Kb é igual a aproximadamente 38.146,97 MB
38.146,97 Mb é igual a aproximadamente 37,25 GB
Ou seja, seriam necessários, aproximadamente, 37,25 GB.
*/

/* 2. Calcule o espaço necessário no formato Esparso (COO), onde para cada 
filme assistido guardamos a tripla: {linha, coluna, valor}. (Dica: cada tripla 
terá 3 números de 4 bytes cada).  */

/*
R: Tendo em vista que são 1.000.000 Usários registrados e que cada usuário assiste, em média, 100 filmes, temos que:
1.000.000 * 100 = 100.000.000
No formato COO são utilizados 3 números para representar cada valor, logo
100.000.000 * 3 = 300.000.000, e cada número ocupa 4 Bytes
300.000.000 * 4 = 1.200.000.000 Bytes
1.200.000.000 Bytes = 1.171.875 KB
1.171.875 KB é igual a aproximadamente 1.144,41 MB
1.144,41 MB é igual a aproximadamente 1,12 GB
Ou seja, seriam necessários, aproximadamente, 1,12 GB.
*/

/* 3. Qual é a economia real de memória em porcetagem? */

/* Para calcular a economia e memória temos que: 
((memória_densa - memória_esparsa) / memória_densa) * 100
((37,25 - 1,12 GB) / 37,25) * 100 = 96,99%
Logo, a economia real de memória em porcentagem foi de 96,99%
*/


