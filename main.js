/* Aguarda o carregamento completo do DOM*/
document.addEventListener("DOMContentLoaded", () => {
  /* Definindo as cartas e suas imagens*/
  const cartas = [
    { name: "Charmander", img: "Imagens/charmander.gif" },
    { name: "Chikorita", img: "Imagens/chikorita.gif" },
    { name: "Squirtle", img: "Imagens/squirtle.gif" },
    { name: "Totodile", img: "Imagens/totodile.gif" },
    { name: "Treecko", img: "Imagens/treecko.gif" },
    { name: "Turtwig", img: "Imagens/turtwig.gif" },
    { name: "Charmander", img: "Imagens/charmander.gif" },
    { name: "Chikorita", img: "Imagens/chikorita.gif" },
    { name: "Squirtle", img: "Imagens/squirtle.gif" },
    { name: "Totodile", img: "Imagens/totodile.gif" },
    { name: "Treecko", img: "Imagens/treecko.gif" },
    { name: "Turtwig", img: "Imagens/turtwig.gif" },
  ];

  /* Embaralhando as cartas*/
  cartas.sort(() => 0.5 - Math.random());

  /* Selecionando elementos do HTML*/
  const board = document.querySelector(".board");
  const resultview = document.querySelector("#result");

  /* Variáveis de controle*/
  let cartasEscolhidas = [];
  let idDasCartasEscolhidas = [];
  let CombinacaoDeCartas = [];

  /* Função para verificar a correspondência das cartas*/
  function Checagem() {
    const cartas = document.querySelectorAll("img");
    const OpçãoUmId = idDasCartasEscolhidas[0];
    const OpçãoDoisId = idDasCartasEscolhidas[1];

    if (OpçãoUmId == OpçãoDoisId) {
      cartas[OpçãoUmId].setAttribute("src", "Imagens/bolaverde.gif");
      cartas[OpçãoDoisId].setAttribute("src", "Imagens/bolaverde.gif");
      alert("Você clicou na mesma imagem!");
    } else if (cartasEscolhidas[0] === cartasEscolhidas[1]) {
      cartas[OpçãoUmId].setAttribute("src", "Imagens/acertou.gif");
      cartas[OpçãoDoisId].setAttribute("src", "Imagens/acertou.gif");
      cartas[OpçãoUmId].removeEventListener("click", VirarCarta);
      cartas[OpçãoDoisId].removeEventListener("click", VirarCarta);
      CombinacaoDeCartas.push(cartasEscolhidas);
      alert("Você achou uma combinação!");
    } else {
      cartas[OpçãoUmId].setAttribute("src", "Imagens/bolaverde.gif");
      cartas[OpçãoDoisId].setAttribute("src", "Imagens/bolaverde.gif");
    }
    cartasEscolhidas = [];
    idDasCartasEscolhidas = [];

    /* Atualizando a mensagem na tela informando quantas combinações foram encontradas*/
    resultview.textContent =
      "Parabéns!!! Você encontrou: " + CombinacaoDeCartas.length + " pares!";

    /* Verificando se todas as combinações foram encontradas*/
    if (CombinacaoDeCartas.length === cartas.length / 2) {
      resultview.textContent =
        "🥳🥳Parabéns, você é o máximo!!! Conseguiu encontrar todos os pares!!🥳🥳";
    }
  }

  /* Função para criar o tabuleiro de cartas*/
  function CaixaDeTabuleiro() {
    /*criando um loop for que percorrerá as cartas usando i (numero) como contador*/
    for (let i = 0; i < cartas.length; i++) {
      const carta = document.createElement("img");
      carta.className = "carta-jogo";
      carta.setAttribute("src", "Imagens/bolaverde.gif");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", VirarCarta);
      board.appendChild(carta);
    }
  }

  /* Função para virar as cartas*/
  function VirarCarta() {
    let cartasIdentificação = this.getAttribute("data-id");
    cartasEscolhidas.push(cartas[cartasIdentificação].name);
    idDasCartasEscolhidas.push(cartasIdentificação);
    this.setAttribute("src", cartas[cartasIdentificação].img);
    if (cartasEscolhidas.length === 2) {
      setTimeout(Checagem, 500);
    }
  }
  CaixaDeTabuleiro();
});
