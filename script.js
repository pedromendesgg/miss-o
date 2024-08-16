const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixaPerguntas");
const caixaAlternativa = document.querySelector("caixaAlternativa");
const caixaResultado = document.querySelector(" caixaResultado");
const textoResultado = querySelector("textoResultado");


const perguntas = [
    {
        enunciado:"Como a cultura e a religião podem influenciar a percepção e a abordagem da poluição ambiental?"
        alternativas:[
            texto:Alternativa A: Cultura e religião frequentemente promovem práticas que ajudam a proteger o meio ambiente
            
            afirmação:

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historia final= ""

function mostraPerguntas(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual. enunciado;
    caixaAlternativa.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){

for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
    caixaAlternativa. appendChild(botaoAlternativa);
    
}


}

function respostaSelecionada(opçãoSelecionada){
    const afirmação = opçãoSelecionada.afirmação;
    historiaFinal = afirmação;
    atual++
    mostraPerguntas();
}
    mostraPerguntas();

    
