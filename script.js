const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector("caixaPerguntas");
const caixaAlternativa = document.querySelector("caixaAlternativa");
const caixaResultado = document.querySelector(" caixaResultado");
const textoResultado = querySelector("textoResultado");

const perguntas = [
    {
        enunciado:"fgxgxtzhdzhdzdhz"
        
    alternativa: ["urubu do pix"]
    

    ]

}
{
    enunciado:"kkkkk"
    alternativa:[
        "b";
        "A"
    ]
}

const perguntas = [
    {
        enunciado:"urubu"
        alternativas:[
            "urubu do pix",
            "urubu pobre."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual. enunciado;
    caixaAlternativa.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){

for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa;
    caixaAlternativa. appendChild(botaoAlternativa);
    
}


}

    
    
