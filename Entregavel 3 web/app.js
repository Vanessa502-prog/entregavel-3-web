
console.log("===== BLOCO 1 - FUNDAMENTOS E VARIÁVEIS =====");

// 1. Variável pontos
let pontos = 20;
pontos = pontos + 10;
console.log("Pontos:", pontos);

// 2. Constante MAX_PONTOS
const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao alterar a constante:", erro.name);
    console.log("Isso acontece porque uma constante não pode receber outro valor.");
}

// 3. Tipos primitivos
const nome = "Vanessa";
const idade = 20;
const aprovado = true;
let valorIndefinido;
const valorNulo = null;

console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de aprovado:", typeof aprovado);
console.log("Tipo de valorIndefinido:", typeof valorIndefinido);
console.log("Tipo de valorNulo:", typeof valorNulo);

// 4. Template Literals e concatenação
const aluno = "Vanessa";
const curso = "Engenharia da Computação";

console.log(`Meu nome é ${aluno} e curso ${curso}.`);
console.log("Meu nome é " + aluno + " e curso " + curso + ".");


console.log("\n===== BLOCO 2 - FUNÇÕES =====");

// 1. Função declarada e hoisting
console.log("Maior de idade:", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 2. Função de expressão e ReferenceError
try {
    ehMaiorDeIdadeExpressao(20);
} catch (erro) {
    console.log("Erro antes da declaração:", erro.name);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

console.log("Resultado da função de expressão:",
    ehMaiorDeIdadeExpressao(20));

// 3. Função dobro nas três formas
function dobro(n) {
    return n * 2;
}

const dobroExpressao = function(n) {
    return n * 2;
};

const dobroArrow = n => n * 2;

console.log("Dobro com função declarada:", dobro(5));
console.log("Dobro com função de expressão:", dobroExpressao(5));
console.log("Dobro com arrow function:", dobroArrow(5));

// 4. Parâmetro com valor padrão
function dobroPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro sem informar valor:", dobroPadrao());


console.log("\n===== BLOCO 3 - CONTROLE DE FLUXO =====");

// 1. Classificação da nota
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log("Nota 8:", classificarNota(8));
console.log("Nota 4:", classificarNota(4));

// 2. Semáforo
const corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Semáforo: Pare");
        break;
    case "amarelo":
        console.log("Semáforo: Atenção");
        break;
    case "verde":
        console.log("Semáforo: Siga");
        break;
    default:
        console.log("Cor inválida");
}

// 3. Tabuada do 5
console.log("Tabuada do 5:");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva
console.log("Contagem regressiva:");

let contagem = 5;

while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}

// 5. Números pares e ímpares com for
console.log("Pares e ímpares com for:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

// 6. Números pares e ímpares com while
console.log("Pares e ímpares com while:");

let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }

    numero++;
}

// 7. Dia da semana
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log("Dia 2:", diaDaSemana(2));
console.log("Dia 7:", diaDaSemana(7));
console.log("Dia 9:", diaDaSemana(9));
