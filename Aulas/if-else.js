// meu primeiro if
let status = true

if (true){
    console.log("O valor é true - verdadeiro")
} else {
    console.log("O valor é false - falso");
}

// Igualdade, if e else
let linguagem = "string"
if ("javascript") {
    console.log("Estou aprendendo");
} else {
    console.log("Aprenderei mais tarde");
}

// Lista de Compras
let listaDeCompras = ['café', 'arroz', 'feijão', 'legumes', 'chocolate', 'biscoitos'];

console.log("O método Join faz a junção dos arrays para uma string usando o separador que escolhemos ou uma , automaticamente.");
console.log(listaDeCompras.join(" * "));

listaDeCompras.push('frutas', 'pão');
console.log("O método push é usado para acrescentar mais elementos/informações no array inicial, mas as inclusões são no final. Se fizar a operação direto na sua impressão (console.log) ele retorna a contagem dos arrays.");
console.log(listaDeCompras);

listaDeCompras.pop();
console.log("O método pop exclui o último elemento de nossa array. Não recebe parâmetro, pois é sempre o último a ser excluido");
console.log(listaDeCompras);

listaDeCompras.shift();
console.log('O método shifth exclui o primeiro elemento do nosso array, também não recebe um parâmetro pois já é determinado o elemento a ser excluido');
console.log(listaDeCompras);

listaDeCompras.unshift('achocolatado', 'café');
console.log("O método unshifth é usado para acrescentar mais elementos/informações no array inicial, inclusões são impressas no início");
console.log(listaDeCompras);