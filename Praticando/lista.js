//microdesafio
function teste(x, y) {
    return y - x;    
}
//console.log(teste(10, 40));

//microdesafio2
function teste2(x, y) {
  //  console.log(x)
    return x / 2
}
/* const retorno = teste2(10)
console.log(retorno); */

//1
function convertPolegadas(polegadas) {
    return polegadas * 2.54
}
console.log(convertPolegadas(2));

//2
function stringToUrl(string){
    return "http://www."+ string + ".com.br"
}
console.log(stringToUrl("gabriella"))

//3
function adicaoDePonto(string){
    return string + "!"
}
console.log(adicaoDePonto("Consegui"));

//4
function idadeDeCachorro(number){
    return number * 7
}
console.log(idadeDeCachorro(2));

//5
function valorHora(salario) {
    return salario/160
}
console.log(valorHora(1200));

//6
function calculaImc(peso, altura) {
    return peso/(altura*2)
}
console.log(calculaImc(58, 1.70));

//7
function stringMaiuscula(string) {
    return string.toUpperCase()
}
console.log(stringMaiuscula("gabi"));

//8
function qualOperador(string){
   return typeof string
}
console.log(qualOperador(4))

//9
function qualCircunferencia(r) {
    return (r*r)*Math.PI
}
console.log(qualCircunferencia(5).toFixed(2))