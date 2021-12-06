let userInputOld= prompt("Quanti anni hai?");
let userInputKm= prompt("Quanti kilometri devi percorrere?");

let discountPerAge= userInputKm * 0.21;

if(userInputOld <18){
    discountPerAge= discountPerAge - discountPerAge * 0.2;
} else if(userInputOld >65){
    discountPerAge= discountPerAge - discountPerAge * 0.4;
}

discountPerAge= discountPerAge.toFixed(2);
document.writeln('TOTALE DA PAGARE :' + discountPerAge + '€' )