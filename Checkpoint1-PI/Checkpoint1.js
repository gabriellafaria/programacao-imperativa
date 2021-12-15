function microondas(comida, tempo){
     let tempoPadrão;
     console.log("Prato pronto, bom apetite!");
      
       switch(comida){
         case "Pipoca": tempoPadrão = 10; break;
         case "Macarrão": tempoPadrão = 8; break;
         case "Carne": tempoPadrão = 15; break;
         case "Feijão": tempoPadrão = 12; break;
         case "Brigadeiro": tempoPadrão = 8; break;
         default: return "Prato inexistente"
       }
       {
      return tempo > tempoPadrão*3 -1 ? "Kabumm!"   
      : tempo > tempoPadrão*2 ? "Sua comida queimou"
      : tempo < tempoPadrão && tempo >= 0 ? "Tempo insuficiente!" : ""
   }
}

console.log(microondas("feijão", 24))

