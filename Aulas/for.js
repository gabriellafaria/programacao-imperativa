for(let i = 0;i<5;i++){
    console.log("Olá mundo");
}

//loop num impares
for(let i=1;i<=10;i++){
    console.log('O número ' + i + ' é ímpar')
}

// loop par
let qtdPares = 0;
let qtdImpares =0;
for(let i=0;i<=10;i++){
    if (i % 2 ==0) {
        console.log('O número ' + i + ' é par');
        qtdPares++;
    } else {
    console.log('O número ' + i + ' é ímpar'); qtdImpares++;
}}

console.log('quantidade de impares: ' + qtdImpares + ' quantidade de pares:' + qtdPares);

// calculadora
for(let i=1;i<=9;i++){
    console.log("A tábuada de " + i + "é: ");
    console.log("--------------------------/n");
    for(let j=1;j<=9;j++){
        console.log(i + "X" + j + "=" + i*j);
    }
} 

//de agora Array invertido 

let numeros = [1,2,3,4,5,6];
function imprimirInverso(array) {
    let arrayRetorno =[];
    let len = array.length;
    for(let i=0;i<len;i++){
        //arrayRetorno.push(array.pop())

    }

    return arrayRetorno
}
console.log(imprimirInverso(numeros));


function somarArray(array){
   let soma = 0;
   for(let i=0;i<array.length;i++){
       soma += array[i]
   }
   console.log(soma);
}

somarArray([1,2,3,4,5])

function arrayJoin(array){
    let resultado = " ";
    for(let i=0;i<array.length;i++){
        resultado +=array[i]
    }
    console.log(resultado);
    console.log(array.length);
}

//filmes
function colecaoFilmes() {
    let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
    let filmesUpperCase = []
    for(let i=0; i<array.length; i++){
        filmesUpperCase = filmes.pop.toUpperCase
}}

//___________

for(var i=0; i<50; i+=10){
    console.log(i)
}
console.log(i);

function soletrar(texto){
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
}
soletrar("digital-house");
soletrar("ctd")

function soma(a=1, b=3){
    return a+b;
}
console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

let x=5;
let y=x++ + ++x;
console.log("y="+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1;
console.log("x= "+x); 
console.log("y="+y);

z=10;
if (z=6){
    console.log("acertou");
} else {
    console.log("errou");
}

var z=0;
for (var i=20; i<50; i+=10){
    z+=i
}
console.log(z);

let valor=5;
let fatorial=1;
for(let i=valor; i>1; i--){
    fatorial*=i;}
console.log("Fotorial = "+fatorial);

z=10;
f=60;
if (z > f){
    console.log("acertou");
}

function mediaDeTres(p1, p2, p3) {
    const sum = soma(p1, p2, p3);
    const media = divisao(sum, 3);
    if (media >= 7) {
      console.log("Aluno aprovado");
    } else if (media >= 5 && media < 7) {
      console.log("Aluno de recuperação");
    } else {
      console.log("Aluno reprovado");
    }
  
    return media;
}
