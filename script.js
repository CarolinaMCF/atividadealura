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
                texto: "Alternativa 1",
                afirmacao: "Afirmação 1",
            },
            {
                texto: "Alternativa 2",
                afirmacao: "Afirmação 2",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 3",
                afirmacao: "Afirmação 3",
            },
            {
                texto: "Alternativa 4",
                afirmacao: "Afirmação 4",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 5",
                afirmacao: "Afirmação 5",
            },
            {
                texto: "Alternativa 6",
                afirmacao: "Afirmação 6",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPerguntas () {
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}           

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }

}

mostraPerguntas();