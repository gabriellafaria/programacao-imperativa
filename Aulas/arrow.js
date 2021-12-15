const somar = () => console.log('Estou em uma arrow function');
const somei = (numeroA, numeroB) => {
    console.log('Estou em um numero ' + numeroB );
    return numeroA + numeroB
}

console.log(somei(8,9)); 

//_PG_
let print = msg => console.log(msg);

print('Olá, bom dia');

let soma = (n1, n2) => n1+n2

console.log(soma(2,4));