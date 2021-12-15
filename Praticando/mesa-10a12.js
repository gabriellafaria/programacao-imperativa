//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
let array1 = [1, 2, 3, 4, 5, 10, 2]
let array2 = ["o", "l", "á"]
let array3 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
let array4 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function imprimirInverso(umArray){
    let a = umArray.length -1
    for(i=a;i>=0;i--){
        console.log(umArray[i]);
    }
}
//imprimirInverso(array1)

//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
function inverter(umArray){
    let b = umArray.length -1;
    let arrayInvertido = []
    for(i=b;i>=0;i--){
        arrayInvertido.push(umArray[i])
    }
    console.log(arrayInvertido);
}
//inverter(array2)

//Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
function somarArray(umArray){
    let c = umArray.length;
    let arraySomado = 0;
    for(i=0;i<c;i++){
        arraySomado += umArray[i]
    }
    console.log(arraySomado)
}
//somarArray(array1)

//Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
function concatenarArray(umArray){
    let d = umArray.length;
    let concatenar=""
    for(i=0;i<d;i++){
        concatenar += umArray[i]
    }
    return console.log(concatenar);
}
//concatenarArray(array2)

//Coleções de Filmes (e mais…)
//Os filmes devem estar todos em letras maiúsculas.
function maiusculo(x) {
    let e = x.length;
    for(i=0;i<e;i++){
        x[i] = x[i].toUpperCase()
    }    
    return console.log(x)
}
//maiusculo(array3)
function juntar(x, y) {
    let f = y.length;
    let final = x;
    for(i=0;i<f;i++){
        final.push(y[i])
    }   
    console.log(final);
    final.pop() //tirou o último - fortnite
    console.log(final)
}
//juntar(array3, array4)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararArray(x, y) {
    let g = y.length;
    for(i=0;i<g;i++){
        x[i] == y[i] ? console.log("As classificações da rodada " + (i+1) + " são iguais :)") : console.log("As classificações da rodada " + (i+1) + " são diferentes :(")
    }
}
//compararArray(asiaScores, euroScores)

//Mesa 11
let arrayX= ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];
let arrayY = ["livro1", "livro2"]

function passarElementos(x, y) {
    let b = y.length
    for(i=0;i<b;i++){
        x.push(y.pop().toUpperCase())
    }
    x.pop() //infiltrado 
    return console.log(x);
}
//passarElementos(arrayX, arrayY)

function comparar(x, y) {
    let a =[];
    let b = x.length;
    let c = y.length;
    if (b>c) { for(i=0;i<b;i++){
        a[i] = x[i] === y[i]}
    } else {
        for(i=0;i<c;i++){
            a[i] = x[i] === y[i]}
        }
    console.log(a);
}

// comparar(asiaScores, euroScores)

//Bônus extra
const participanteA =  [5, 8, 4, 9, 5]; 
const participanteB =  [8, 7, 8, 6, 8];
const participanteC =  [7, 5, 10, 8, 3];

function pontuacaoMedia(nota){
    let media = 0;
    for(let i in nota){
        media = media + nota[i]
    }
    return console.log(media/nota.length)
}

pontuacaoMedia(participanteC);
pontuacaoMedia(participanteB)

function pontuacaoMaior(nota){
    let maior = nota[0];
    for(let i in nota){
        (maior<nota[i]) ? maior = nota[i] : ""
    }
    return console.log(maior)
}

function competicao(participanteA, participanteB, participanteC){
    const mediaA = pontuacaoMedia(participanteA);
    const mediaB = pontuacaoMedia(participanteB);
    const mediaC = pontuacaoMedia(participanteC);

    const maiorA = pontuacaoMaior(participanteA);
    const maiorB = pontuacaoMaior(participanteB);
    const maiorC = pontuacaoMaior(participanteC);

   if(mediaA > mediaB && mediaA > mediaC) {
       console.log('Participante A venceu na classificação de média')
   } else if (mediaB > mediaA && mediaB > mediaC){
    console.log('Participante B venceu na classificação de média')
   } else {console.log('Participante C venceu na classificação de média')}

   if(maiorA > maiorB && maiorA > maiorC) {
    console.log('Participante A venceu na classificação de e-tip')
} else if (maiorB > maiorA && maiorB > maiorC){
 console.log('Participante B venceu na classificação de e-tip')
} else {console.log('Participante C venceu na classificação de e-tip')}
    
/*     return mediaA > mediaB && mediaA > mediaC ? 'Participante A venceu na classificação de média'
    : mediaB > mediaA && mediaB > mediaC ? 'Participante B venceu na classificação de média' 
    : mediaC > mediaA && mediaC > mediaB ? 'Participante C venceu na classificação de média' : ''

   maiorA > maiorB && maiorA > maiorC ? 'Participante A venceu na classificação de e-tip'
    : maiorB > maiorA && maiorB > maiorC ? 'Participante B venceu na classificação de e-tip' : 'Participante C venceu na classificação de e-tip'
    //: (maiorC > maiorA && maiorC > maiorB) ? console.log('Participante C venceu na classificação de e-tip') : '' */
    
}
competicao(participanteA, participanteB, participanteC)