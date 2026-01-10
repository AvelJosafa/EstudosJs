///Vetor com o histórico de partidas do herói
historicoDePartidas = ["derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria", "derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria", "derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria", "derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria","derrota", 
    "vitoria", "vitoria","derrota", "vitoria", "vitoria"];


///Variáveis para armazenar a quantidade de vitórias e derrotas
quantidadeDeVitorias = 0;
quantidadeDeDerrotas = 0;

///Variável para controlar o loop
contador = 0;

///Função para calcular o saldo parcial de vitórias e derrotas
function saldoParcial(historico){

    while (contador < historico.length){
        if (historico[contador] === "vitoria"){
            quantidadeDeVitorias = quantidadeDeVitorias + 1;
        }

        else if (historico[contador] === "derrota"){
            quantidadeDeDerrotas = quantidadeDeDerrotas + 1;
        }

        contador = contador + 1;

    }
}

///Função para calcular o ranking do herói
function calcularRanking(vitorias, derrotas){
    saldoDePontos = vitorias - derrotas;
        if (vitorias <= 10){
                return "Ferro";
        } 

        else if (vitorias >= 11 && vitorias <= 20){
                return "Bronze";
            } 

        else if (vitorias >= 21 && vitorias <= 50){
                return "Prata";
            } 

         else if (vitorias >= 51 && vitorias <= 80){
                return "Ouro";
            } 

        else if (vitorias >= 81 && vitorias <= 90){
                return "Diamante";
            } 

        else if (vitorias >= 91 && vitorias <= 100){
                return "Lendário";
            } 

        else {
                return "Imortal";
            }
    }
///Variavel para armazenar o saldo de vitórias
let saldoVitorias = quantidadeDeVitorias - quantidadeDeDerrotas;

///Chamadas das funções
saldoParcial(historicoDePartidas);
let nivelRanking = calcularRanking(quantidadeDeVitorias, quantidadeDeDerrotas);

///Exibição dos resultados
console.log("Histórico de partidas: " + historicoDePartidas);
console.log("------------------------------");
console.log("Quantidade de vitórias: " + quantidadeDeVitorias);
console.log("------------------------------");
console.log("Quantidade de derrotas: " + quantidadeDeDerrotas);

///Exibição do saldo de vitórias e nível de ranking
console.log("O Herói tem de saldo de **" + saldoVitorias + "** está no nível de **" + nivelRanking + "**");
