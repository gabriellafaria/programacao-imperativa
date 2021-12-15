//JASON - notação do js 
const usuario = {
    nome: "Gabriella",
    email: "g@gmail.com",
    senha: "asdf",
    telefone: "xx",
    termosDeUso: true,
    idade: 22

}

const numeros = [1,2,3];
numeros.length // acesso nos arrays

const carro = {
    marca: "Fiat",
    modelo: "Argo",
    potencia: 102,
    acelerar(){
        console.log('acelerando');
    },
    turbinar(){
        this.potencia = this.potencia*2;
    },
}



const pessoa ={
    nome: "Gabs",
    peso: 60,
    altura: 1.5,
    //imc: (this.peso/(this.altura*this.altura)) uma forma
    imc:function(){
        console.log("imc: " + (this.peso/(this.altura*this.altura)))
    }
}

function Pessoa(x, y, z) {
    this.nome = x
    this.peso = y
    this.altura = z
    this.imc = function(){console.log("imc: " + (this.peso/(this.altura*this.altura)))}
}

const gabriella = new Pessoa("Gabriella", 60,1.5)
const lucas = new Pessoa("Lucas", 80, 1.9)
const pedro = new Pessoa("Pedro", 70, 1.7)

gabriella.imc()
lucas.imc()
pedro.imc()

const pessoas = [gabriella, lucas, pedro]
console.log(pessoas);