// pode subir
function podeSubir(altura, acompanhada) {
    let podeSubir =false
     
    if (altura >= 1.20 && altura <=2.0) {
    podeSubir = true        
    }

    if (altura >=1.20 && acompanhada) {
        podeSubir = true
    }

    return podeSubir
}

function podeSubir(altura, acompanhada) {
    if ((altura >= 1.20 && altura <=2.0) || (altura >=1.20 && acompanhada)) {
        return true
    } else {
        return false
    }
}

function podeSubir(altura, acompanhada) {
    return (altura >= 1.20 && altura <=2.0) || (altura >=1.20 && acompanhada)
}

/* if ((altura >= 1.20 && altura <=2.0)) {
    return "Acesso autorizado" 
}

if ((altura >=1.20 && acompanhada)) {
    return "Acesso autorizado somente com acompanhante"
}

if (podeSubir = false) {
    return " Acesso negado"
} */

console.log(podeSubir(1.30, false))