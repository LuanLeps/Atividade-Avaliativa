// Luan Carlos, Turma 109 10/09/2024

// Exercício 1 - Array de Números Aleatórios
// Função que gera um array com números aleatórios. 
// Parâmetros:
//   tamanho - número de elementos no array
//   minimo - valor mínimo possível
//   maximo - valor máximo possível
// Retorna um array com números aleatórios dentro do intervalo especificado.
const gerarArrayAleatorio = (tamanho, minimo, maximo) =>
    Array.from({ length: tamanho }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);

// Exercício 2 - Elemento Mais Frequente
// Função que encontra o elemento mais frequente em um array.
// Parâmetro:
//   array - o array para verificar a frequência dos elementos
// Retorna o elemento mais frequente ou uma mensagem se não houver elemento mais frequente.
const elementoMaisFrequente = (array) => {
    // Cria um objeto que mapeia cada elemento à sua frequência no array
    const frequencias = array.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {});
    
    // Encontra a entrada com a maior frequência
    const [elementoFreq, maxFreq] = Object.entries(frequencias).reduce((a, b) => a[1] > b[1] ? a : b);
    
    // Se a frequência máxima é maior que 1, retorna o elemento; caso contrário, retorna uma mensagem
    return maxFreq > 1 ? Number(elementoFreq) : "Não há elemento mais frequente";
};

// Exercício 3 - Remover Repetidos
// Função que remove elementos repetidos de um array.
// Parâmetro:
//   array - o array do qual remover os elementos repetidos
// Retorna um novo array sem elementos repetidos ou uma mensagem se não houver elementos repetidos.
const removerRepetidos = (array) => {
    // Usa o Set para remover duplicatas e converte de volta para array
    const unica = [...new Set(array)];
    return unica.length < array.length ? unica : "Não há elementos repetidos";
};

// Exercício 4 - Concatenar
// Função que concatena dois arrays.
// Parâmetros:
//   array1 - o primeiro array
//   array2 - o segundo array
// Retorna um novo array que é a combinação dos dois arrays fornecidos.
const concatenarArrays = (array1, array2) => array1.concat(array2);

// Exercício 5 - Junção das Funções
// Função principal que utiliza as funções anteriores e exibe resultados no console.
function main() {
    // Gera um array de 10 números aleatórios entre 1 e 100
    const arrayAleatorio = gerarArrayAleatorio(10, 1, 100);
    console.log(`Entrada: ${arrayAleatorio}`);
    
    // Encontra e exibe o elemento mais frequente
    console.log(`Elemento mais frequente: ${elementoMaisFrequente(arrayAleatorio)}`);
    
    // Remove elementos repetidos e exibe o array resultante
    const arraySemRepetidos = removerRepetidos(arrayAleatorio);
    console.log(`Array sem repetidos: ${arraySemRepetidos}`);
    
    // Concatena o array original com o array sem repetidos e exibe o resultado
    console.log(`Array concatenado: ${concatenarArrays(arrayAleatorio, arraySemRepetidos)}`);
}

// Ativa a função principal para execução
main();
