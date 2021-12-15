const participanteA =  [5, 8, 4, 9, 5]; //31/participantesA.length
const participanteB =  [8, 7, 8, 6, 8];
const participanteC =  [7, 5, 10, 8, 3]

//Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

function pontuacaoMedia(notas) {
    let x = 0;
    for(let i=0;i<notas.length;i++){
        x = x + notas[i]
    }
    return console.log(x/notas.length); 
}

//pontuacaoMedia(participanteA);

//Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.
function pontuacao(x) {
    let y= x[0] //começando no primeiro elemento do array
    for(let i=1;i<x.length;i++){ //i=1 para não comparar o 0 com 0 
        (y<x[i]) ? y = x[i] : ""
    }
    return y
}

//console.log(pontuacao(participanteA));

function pontuacaoMenor(x) {
    let y= x[0] //começando no primeiro elemento do array
    for(let i=1;i<x.length;i++){ //i=1 para não comparar o 0 com 0 
        (y>x[i]) ? y = x[i] : ""
    }
    return y
}
//console.log(pontuacaoMenor(participanteA));

//Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

function competicao(participanteA, participanteB, participanteC) {
    let medA = pontuacaoMedia(participanteA);
    let medB = pontuacaoMedia(participanteB);
    let medC = pontuacaoMedia(participanteC);

    let maiA = pontuacao(participanteA);
    let maiB = pontuacao(participanteB);
    let maiC = pontuacao(participanteC);

    (medA > medB && medA > medC) ? console.log('participante A venceu')
    : (medB > medA && medB > medC) ? console.log('participante B venceu')
    : (medC > medA && medC > medB) ? console.log('participante C venceu') : ''
}

competicao(participanteA, participanteB, participanteC)

//MESA 
let alice = [23, 82, 46];
let bob = [45, 8, 32];

function ganhador(a, b){
pontosA = 0
pontosB = 0
  for(i=0; i<a.length; i++){
    (a[i]>b[i]) ? pontosA ++ : pontosB ++
  }
  (pontosA>pontosB) ? console.log('A é o vencedor') : console.log("B é o vencedor")
}
ganhador(alice, bob)