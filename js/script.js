// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let inserisci1 = prompt('inserisci una parola'); 
let giraParola = palindromaCek(inserisci1);

if (inserisci1 === giraParola){
    console.log('la tua parola é palindroma')
}else{
    console.log('la tua parola non é palindroma')
}


function palindromaCek (parola1){
    let parolaContrario = '';
    for ( let i = parola1.length - 1 ; i > 0 ; i--){
        parolaContrario = (parolaContrario + parola1[i])
    }
    return parolaContrario;
}