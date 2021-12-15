//1 
function retangulo(x, y) {
    let area = x*y;
    let perimetro = 2*(x+y);
    return perimetro, area
}
 //2 
 function quadrado(x) {
    let area = x*x;
    let perimetro = 4*x;
    return perimetro
 }

 //3
 function circunferencia(x) {
     let area = Math.PI*x*x;
     let perimetro = 2*Math.PI*x;
     return area.toFixed(2)
 }

 //4
 function triangulo(x, y, z) {  
     return x+y+z
 }

 // console.log(triangulo(2,3,4));

//5
/* for (let volta =1; volta <=2; volta++){
    console.log(volta)} */

 //6
/* for (let volta =5; volta <=6; volta++){
    console.log(volta);
    console.log(volta/2); 
    console.log(volta%2);
} */

//7
function idade(x) {
    let anos = x/365;
    let meses = x/12;
    let dias = x;
    return "Eu tenho " + anos.toFixed(1) + " anos " + meses.toFixed(1) + " meses " + dias.toFixed(1) + " dias"
}
//console.log(idade(8047))

//8
function conversao(x) {
  console.log(x +" °F")    
   return (5/9*(x-32)).toFixed(1) + " °C"
}
console.log(conversao(60));

