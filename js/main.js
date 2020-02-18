
var km= prompt('quanti km devi percorrere?', '');
var età= prompt('quanti anni hai?', '');

console.log(km);
console.log(età);

var calcolo= km * 0.21;

console.log(calcolo + '$ è il prezzo senza sconto');

if (età<18) {
    console.log((Math.round(calcolo - ((calcolo*20)/100)))+ '$ è il prezzo scontato under 18');
} else if (età>=18 && età<=63) {
    console.log((Math.round(calcolo)) + '$ è il prezzo non scontato');
} else if (età>63) {
    console.log((Math.round(calcolo - ((calcolo*40)/100)))+ '$ è il prezzo scontato over 64');
}
