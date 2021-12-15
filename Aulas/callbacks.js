const somar = (numA, numB) => numA + numB;
const calculadora = (numA, numB, operacao) => operacao(numA, numB);

console.log(calculadora(10,20,(numA, numB)=> numA-numB));

//_PG_
//let acaoCarro = (andar, parar, callback) => callback(andar,parar)
/* function andar() {
    return 'O carro está andando';
};
function parar(){
    return 'O carro parou';
};
function acaoCarro(andar, parar, callback){
    return callback(andar,parar)
}; */

const andar = () => 'O carro está andando';
const parar = () => 'O carro parou';
const acaoCarro = (andar, parar, callback) => callback(andar, parar);
// console.log(acaoCarro(callback)=> (andar + parar))


