// qnt. 0 é pre-definido caso o parametro não seja passado.
function comprarComida(quantidade = 0){
    let preco = quantidade * 12;
    return preco;
    //console.log("comprando comida...");
  //  console.log(quantidade)
}
console.log(comprarComida(5));

comprarComida();  //como string?
//console.log("depois da função");

function soma(num1=0, num2= 0, num3= 0){
    const soma = num1 + num2 +num3;
    return soma
}

console.log(2+2)

console.log(8-2)

console.log(4/2)

console.log(7*9)

let numero = 10;
console.log(numero++)
console.log(numero++)
console.log(++numero)

let paisDaGabriella = brasil
console.log(paisDaGabriella)