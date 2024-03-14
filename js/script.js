// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let inserisci1 = prompt('inserisci una parola'); 
let giraParola = palindromaCek(inserisci1);

if (inserisci1 === giraParola){
    console.log('la tua parola é palindroma')
} else {
    console.log('la tua parola non é palindroma')
}


function palindromaCek (parola1){
    let parolaContrario = '';
    for ( let i = parola1.length - 1 ; i >= 0 ; i--){
        parolaContrario = (parolaContrario + parola1[i])
    }
    return parolaContrario;
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// 1) l'utente sceglie pario o dispari 
// 2) l'utente inserisce un numero da 1 e 5 
// 3) il computer genera un numero casuale  da 1 a 5 tramite una funzione 
// 4) somma dei numeri 
// 5) stabilire se la somma é pari o dispari tramite una funzione 
// 6) stabilire il vincitore

let scelta = prompt('scegli pari o dispari');
let sceltaNum = parseInt(prompt('scegli un numero da 1 a 5 '));
let numRandom = parseInt(getRndInteger(1, 5));
let sum = (numRandom + sceltaNum);
let risultato = sumOddEven(sceltaNum, numRandom);

if (((scelta === 'pari') && (risultato === 'even')) || ((scelta === 'dispari')&&(risultato === 'odd'))){
    // console.log(sum)
    // console.log(numRandom)
    // console.log(sceltaNum)
    console.log(`hai vinto!!! la somma é: ${sum}`)
}else if(((scelta === 'pari') && (risultato === 'odd')) || ((scelta === 'dispari')&&(risultato === 'even'))){
    console.log(`hai perso!!! la somma é: ${sum}`)
    
}else{
    console.log('hai inserito dati sbagliati')
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

function sumOddEven (num1 , num2){
    if ( (num1 + num2  ) % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
}