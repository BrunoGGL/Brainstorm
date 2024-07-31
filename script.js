const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você saiu para explorar uma reserva florestal e agora se encontra perdido na propria, sem nenhuma conexão de celular ou equipamentos necessário. Oque você faz? ",
        alternativas: [
            {
                texto: "entro em desespero.",
                afirmacao: "fiquei apenas parado esperando por ajuda."
            },
            {
                texto: "procuro torre para me comunicar",
                afirmacao: "sai andando procurando sinal."
            }
        ]
    },
    {
        enunciado: "você verifica que tem uma bolsa, e encontra comida e uma bússula. Qual a sua escolha?",
        alternativas: [
            {
                texto: "Escolho a comida, pois estou com fome.",
                afirmacao: "escolheu a comida para não morrer de fome."
            },
            {
                texto: "Escolho a bússula para tentar me localizar na mata.",
                afirmacao: "infelizmente a bússula nao ajudou, pois você não sabia usar.."
            }
        ]
    },
    {
        enunciado: "você precisa procurar água entretanto você está perto de apenas um rio poluído .",
        alternativas: [
            {
                texto: "você toma a água podre",
                afirmacao: "você tomou a água contaminada e poderá ter complicações depois."
            },
            {
                texto: "ainn que nojinho.",
                afirmacao: "você não toma a água por estar contaminada, mas poderá ficar desidratado."
            }
        ]
    },
    {
        enunciado: "Ohh não, você se depara com um onça. E agora?",
        alternativas: [
            {
                texto: "tento jogar um graveto para ela ir pegar.",
                afirmacao: "você jogou o graveto para a onça ir buscar, mas ela ignora e te come."
            },
            {
                texto: "subo em uma árvore, não sou loco",
                afirmacao: "você consegue sobreviver ao ataque da onça subindo em uma árvore!"
            }
        ]
    },
    {
        enunciado: "você acaba andando depois disso e encontra 2 casébres, um a direita e outro a esquerda . Qual você entra? ",
        alternativas: [
            {
                texto: "entro no da direita.",
                afirmacao: "você entra na casa da direita e Infelizmente ali morava dona ortensia ela jogou uma bola de basquete na sua cabeça e acabou te matando."
            },
            {
                texto: "entro no da esquerda.",
                afirmacao: "você entra na Casa da esquerda e la mora dona sheila, ela te ajuda chamando a defesa civil."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();