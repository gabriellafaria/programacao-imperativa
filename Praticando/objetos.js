function Conta(numero, tipoConta, saldo, titular){
    this.numero = numero
    this.tipoConta = tipoConta
    this.saldo = saldo
    this.titular = titular
}

const conta1 = new Conta(5486273622,	"Conta Corrente",	400,	"Abigael Natte")
const conta2 = new Conta(1183971869,	"Conta Poupança",	8675,	"Ramon Connell")
const conta3 = new Conta(9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente")
const conta4 = new Conta(1761924656,	"Conta Poupança",	32415,	"Ansel Ardley")
const conta5 = new Conta(7401971607,	"Conta Poupança",	18789,	"Jacki Shurmer")
const conta6 = new Conta(630841470,	    "Conta Corrente",	28776,	"Jobi Mawtus")
const conta7 = new Conta(4223508636,	"Conta Corrente",	2177,	"Thomasin Latour")
const conta8 = new Conta(185979521,	    "Conta Poupança",	25994,	"Lonnie Verheijden")
const conta9 = new Conta(3151956165,	"Conta Corrente",	7601,	"Alonso Wannan")
const conta10 = new Conta(2138105881,	"Conta Poupança",	33196,	"Bendite Huggett")

let contas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10]

let banco = {
    clientes: contas,
    consultarcliente : function(titular){
        for (let i = 0; i < contas.length; i++) {
            if(contas[i].titular == titular){return console.log(contas[i]) }
        }
    },
    deposito: function(titular,quantia){
        for (let i = 0; i < contas.length; i++) {
            if(contas[i].titular == titular){
                let novoSaldo = contas[i].saldo += quantia
                return console.log(`Depósito realizado, seu novo saldo é: ${novoSaldo}`);
            }
        }
    },
    saque: function(titular,quantia){
        for (let i = 0; i < contas.length; i++) {
            if(contas[i].titular == titular && contas[i].saldo > 0){
                let novoSaldoSubtraido = contas[i].saldo -= quantia
                return console.log(`Extração feita com sucesso, seu novo saldo é: ${novoSaldoSubtraido}`);
            } else { return console.log("Fundos insuficientes")}
        }
    }
}

// Acho que é isso galera :)

//banco.consultarcliente("Abigael Natte")
//banco.deposito("Abigael Natte", 200)
banco.saque("Abigael Natte", 200)

//aula
const conta = {
    clientes:lista
}