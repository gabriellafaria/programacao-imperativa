const numeros = [100, 200, 300, 400, 500, 600];

for(let i=0; i<numeros.length; i++){
    i, numeros[i];
}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
/* 
for(i=0; i<notas.length; i++){
    somaDasNotas += notas[i]
}*/

notas.forEach(nota => {
    somaDasNotas += nota
});

let media = somaDasNotas/notas.length

//console.log(media); 

//callbacks
const nomes = ["Ana", "Ju", "Leo", "Paula"];

//nomes.forEach(ImprimeNomes);

function ImprimeNomes(nome){
    console.log(nome);
}

const nota1 = [10,9,8,7,6];
const nota1Atual = nota1.map(nota => nota == 10 ? nota : ++nota);
//console.log(nota1Atual)

let names = ["ana Julia", "Caio vinicius", "BIA silva"];
const namesAtual = names.map(nome => nome.toUpperCase());
//console.log(namesAtual)

