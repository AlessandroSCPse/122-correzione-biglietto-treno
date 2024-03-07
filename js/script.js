// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare 
// il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// Al click sul bottone
const generateBtn = document.querySelector('#generate-btn');
generateBtn.addEventListener('click', function() {
    // Prendo km e età dalle input
    // const kmInput = document.querySelector('#user-km');
    // const userKm = parseInt(kmInput.value);
    // console.log(userKm);

    const userName = document.querySelector('#user-name').value;
    console.log(userName);

    const userKm = parseInt(document.querySelector('#user-km').value);
    console.log('km', userKm);
    const userAge = parseInt(document.querySelector("#user-age").value);
    console.log('age', userAge);

    // Calcolo il prezzo standard pieno
    let price = userKm * 0.21;

    // METODO SOVRASCRIVENDO LA STESSA VARIABILE
    // if(userAge < 18) {
    //     price = price - (price * 20 / 100);
    // } else if(userAge > 65) {
    //     price = price - (price * 40 / 100);
    // }

    // const humanPrice = price.toFixed(2);
    // document.getElementById('user-message').innerHTML = `Il prezzo del tuo biglietto è ${humanPrice} €`;

    // ALTRO MODO CON VARIABILE DISCOUNT
    let discount = 0;

    // Se l'utente ha meno di 18 anni levo il 20% al prezzo pieno
    // Altrimenti se l'utente ha più di 65 anni levo il 40% al prezzo pieno
    // Ottengo il prezzo finale
    if(userAge < 18) {
        discount = price * 20 / 100;
    } else if(userAge > 65) {
        discount = price * 40 / 100;
    }

    const finalPrice = price - discount;
    console.log(finalPrice);
    const finalRoundedPrice = finalPrice.toFixed(2);

    // Output
    const userMessage = 'Il prezzo del tuo biglietto è: ' + finalRoundedPrice + ' Euro';
    document.querySelector('#user-message').innerHTML = userMessage;
});
