/*
Olá, me chamo Ivonielson, comecei fazer o curso de lógica de programação da dio.me.
Abaixo segue meu codigo para resolver o segundo desafio.
Resolvi apresentar um codigo onde tem 4 Players na partida.
Tentarei usar todos os recursos ja estudados até o momento
*/


//array com o nome de todos os jogadores e seus dados de vitorias e derrotas
const jogadores = [
    {nome:"IvoShow ShowShow", vitorias: 50, derrotas: 10},
    {nome:"IviNho ShowZinho", vitorias: 150, derrotas: 10},
    {nome:"Ivão ShowSão", vitorias: 88, derrotas: 11},
    {nome:"Ivo Show", vitorias: 20, derrotas: 45},

];

for (let i = 0; i < jogadores.length; i++) {
    //Constante com o nome do jogador do array
    const jogador = jogadores[i];
    //console.log(`${jogador.nome} ${jogador.vitorias} ${jogador.derrotas}`)
    const saldoPontos = calculaSaldoPontos(jogador.vitorias,jogador.derrotas)
    //constante para receber o nivel que o herói encontra-se
    const nivel = retornaNivel(saldoPontos)

//Menssagem
console.log(`O Herói **${pegaNikeName(jogador.nome)}** tem o saldo de **${saldoPontos}** e está no nível **${nivel}**`)
  
}
//*********************FUNÇOES*********************** */

//função pega primeiro nome
function pegaNikeName(name){
	let NikeName = name.split(" ")[0]
    return NikeName
}

//função para retornar o saldo de pontos
function calculaSaldoPontos(vitorias,derrotas) {
    return vitorias-derrotas
}

//função para trazer o nivel do jogador
function retornaNivel(saldoPontos) {
     let nivel
    //Para comparação, usei o switch, ficou um código mais elegante
    switch (true) {
        //Se vitórias for menor do que 10 = Ferro
        case saldoPontos >=0 && saldoPontos < 10:
            nivel = "Ferro"
            break;
        //Se vitórias for entre 11 e 20 = Bronze
        case saldoPontos >= 11 && saldoPontos <= 20:
            nivel = "Bronze"
            break
        //Se vitórias for entre 21 e 50 = Prata
        case saldoPontos >= 21 && saldoPontos <= 50:
            nivel = "Prata"
            break
        //Se vitórias for entre 51 e 80 = Ouro
        case saldoPontos >= 51 && saldoPontos <= 80:
            nivel = "Ouro"
            break
        //Se vitórias for entre 81 e 90 = Diamante
        case saldoPontos >= 81 && saldoPontos <= 90:
            nivel = "Diamante"
            break
        //Se vitórias for entre 91 e 100= Lendário
        case saldoPontos >= 91 && saldoPontos <= 100:
            nivel = "Lendário"
            break
        //
        case saldoPontos < 0:
            nivel = "Game over"
            break
        //Se vitórias for maior ou igual a 101 = Imortal
        default:
            nivel = "Imortal"
            break;
    }
 return nivel  
}
    