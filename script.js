const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Como a poluição ambiental pode impactar práticas culturais e religiosas em comunidades tradicionias?"
        alternativas:[
            {
                texto:"A poluição pode levar à deterioração de locais sagrados, comprometendo a realização de rituais?"
                afirmação:"A poluição de rios e lagos pode prejudicar rituais de purificação realizados com água em várias culturas e religiões"
            }
           {
            texto:"A poluição não tem impacto significativo nas práticas culturais e religiosas, pouis elas ocorrem independente do ambiente."
            afirmação:"O desmatamento e a poluição do ar podem afetar a preservação de sitios arqueológicos e templos, qye são importantes para a identidade cultural e religiosa de muitas comunidades.  "
           }
            
           
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}