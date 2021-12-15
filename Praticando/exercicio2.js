//microdesafio 1
function a(x ,y) {
  return y - x  
}
console.log(a(10, 40));

// ex1
function converter(polegadas){
 centimetros = polegadas * 2.54;
    return centimetros;
}
  console.log(converter(2))

//ex2
function ex2(meuLink){
        let url  = "http://www." + meuLink + ".com.br";
        return url;
}
//ex3
function ex3(umaString){
        let frase = umaString + " !";
        return frase
}
//ex4
function ex4(idadeHumano =1){
      let idadeC = idadeHumano * 7;
      return idadeC
}
//ex5
function ex5(salarioMensal){
      let horasTrabalhadas = salarioMensal /160;
      return horasTrabalhadas
}
//ex6
function ex6(altura, peso){
        let IMC = peso /(altura * altura)
        return IMC
} 