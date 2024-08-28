const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Ter o poder de voar livremente, mas… nunca mais pousar.",
                afirmacao: "Você nunca mais poderá pisar no chão.",
            },
            {
                texto: "Ter supervelocidade, mas… ser grudado no chão.",
                afirmacao: "Você nunca mais poderá sair do chão.",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Curar todos os problemas ambientais do planeta, mas… haverá uma extinção global e só a próxima geração de humanos poderá usufruir dessa cura.",
                afirmacao: "Você salvou o meio ambiente, mas a sua geração não existe mais.",
            },
            {
                texto: "Os humanos serão imortais, mas… os animais deixarão de existir.",
                afirmacao: "Você se tornou imortal, mas acabou com o equilíbrio ecológico.",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Criar uma nave espacial que pode te levar para qualquer planeta, mas… você não poderá, nunca mais, retornar à Terra. ",
                afirmacao: "Você criou uma ótima nave, mas a Terra já não é mais seu lar.",
            },
            {
                texto: "Uma empresa cria robôs que fazem tudo o que você pedir com excelência, sem chance de rebelião, mas… você se transformará no robô da pessoa que você mais odeia. ",
                afirmacao: "Os robôs convivem em harmonia com os humanos, mas agora você é o robô de quem mais odeia.",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas () {
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}           

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.alternativas;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em resumo, você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();