/* module.exports = {
    prop1: 8,
    prop2:true,
    prop3:'string',
    func1: function (){},
} */

function Pessoa(nome, altura, sexo) {
    this.nome = nome;
    this.altura = altura;
    this.sexo = sexo;
}

const pessoa1 = new Pessoa('Pessoa1', 1.8, 'H');
const pessoa2 = new Pessoa('Pessoa2', 1.6, 'H');
const pessoa3 = new Pessoa('Pessoa3', 1.75, 'M');
const pessoa4 = new Pessoa('Pessoa4', 1.73, 'M');
const pessoa5 = new Pessoa('Pessoa5', 1.55, 'M');

/* module.exports={
    novaPessoa:function(nome,altura,sexo){
        const pessoa = new Pessoa(nome,altura,sexo);
        this.pessoas.push(pessoa);
    },
    pessoa: [pessoa1,pessoa2,pessoa3,pessoa4,pessoa5],
    maiorEmenorAltura:function(){ */
        /* for(let i=0;i<this.pessoas.length;i++){   //for normal, mais flexivel o off é a simplificação.
            const pessoa = this.pessoas[i];
        }*/
/*         let pessoaMaiorAltura = this.pessoas[0];
        let pessoaMenorAltura = this.pessoas[0];
        for(let pessoa of this.pessoas){
            if(pessoa.altura > pessoaMaiorAltura.altura){
                pessoaComMaiorAltura = pessoa;
              }
        }
        if(pessoa.altura < pessoaMenorAltura.altura){
            pessoaComMenorAltura = pessoa;
          }

        console.log("Pessoa com maior altura: ", pessoaMaiorAltura);
        console.log("Pessoa com menor altura: ", pessoaMenorAltura);
    }
} */

//pessoa.sexo == 'H' ? pessoa é homem 

module.exports = {
    novaPessoa:function(nome,altura,sexo){
      const pessoa = new Pessoa(nome,altura,sexo);
      this.pessoas.push(pessoa);
    },
    pessoas:[pessoa1,pessoa2,pessoa3,pessoa4,pessoa5],
    //a maior e a menor altura do grupo;
    maiorEmenorAltura:function(){
      // for(let i = 0;i<this.pessoas.length;i++){
      //   const pessoa = this.pessoas[i];
      // } 
      let pessoaComMaiorAltura = this.pessoas[0];
      let pessoaComMenorAltura = this.pessoas[0];
      
      for(let pessoa of this.pessoas){
        if(pessoa.altura > pessoaComMaiorAltura.altura){
          pessoaComMaiorAltura = pessoa;
        }
  
        if(pessoa.altura < pessoaComMenorAltura.altura){
          pessoaComMenorAltura = pessoa;
        }
      }
  
      console.log("Pessoa com menor altura: ",pessoaComMenorAltura);
      console.log("Pessoa com maior altura: ",pessoaComMaiorAltura);
    },
    mediaAlturaMulheres:function(){
        let alturaMulher = this.pessoas[0];
        let quantidade = 0;
        let retorno = alturaMulher/quantidade;
        for(let pessoa of this.pessoas){
            if(pessoa.sexo == 'M'){
                quantidade ++ 
            }
            if(pessoa.altura == 'M'){
                pessoa.altura + alturaMulher 
            }
            return retorno
        }
        console.log('A média de alturada mulheres é: ' + retorno)
    }
  } 
