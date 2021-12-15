let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8]; 
//queremos dobrar o nosso array, para isso, vamos mapea-lo
//map - receberá um callback  -- valor: valor de cada poisção - index: em que número o valor está 

let listaNumerosDobro = listaNumeros.map(function(valor, index){
    return valor * 2;
});

// filter - filtra o array
let listaNumerosFiltrados = listaNumeros.filter(function(valor, index){
    return valor > 6
});

// reduce - somar os arrays (os parâmetros são diferentes) - resultado: uma variável onde vamos somar cada um dos valores e armazenalos (começa em 0)
let listaNumerosSomados = listaNumeros.reduce(function(resultado, valor){
    return resultado + valor;
})

// forEach - um simples for --> é um array simples, sem retorno 
listaNumeros.forEach(function(valor, index){
    //console.log("O valor é: " + valor + " e a sua posição é: " + index);
})


//micro desafio 

let arrayPares = [0, 2, 4, 6, 8] 
let arrayImpar = arrayPares.map(function(valor, index){
    return valor + 1
})

let nomes = ["Maria Eduarda", "Maria Cecilia", "Carlos", "Igor"];
let nomesFiltro = nomes.filter(function(valor, index){
    return valor >= "Maria"
});

/* let number = [1, 5, 9, 3, 7];
let string = number.reduce(function(resolt, valor){
    return resolt 
}) */

let animais = ["Gato" , "Cachorro" , "Papaguaio"];
let animaisString = animais.forEach(function(valor, index){
    console.log("O animal é " + animais)
})

