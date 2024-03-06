// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function verificaSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        return;
    }

    while (b <= numero) {
        let temp = a + b;
        if (temp === numero) {
            console.log("O número informado pertence à sequência de Fibonacci.");
            return;
        }
        a = b;
        b = temp;
    }


    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

const numero = 21; 
verificaSequenciaFibonacci(numero);
