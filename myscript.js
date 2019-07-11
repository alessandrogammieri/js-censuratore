/* CENSURATORE
- Il software riceve in input un lungo testo e una serie di parole da censurare.
- Restituisce il testo con xxx al posto delle parole censurate.
- Stampa un “badword index” calcolato come il numero di parole censurate su il
numero di parole totali. */


// Dichiarazione variabili
var testo, parolacce, counter;

// Chiedo all'utente di inserire un testo
testo = prompt("Inserisci qui un testo").split(/\W+/g);
/* Testo da inserire:
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum. */
console.log(testo);

// Chiedo all'utente le parole da censurare
parolacce = prompt("Inserisci qui le parole che devono essere censurate").split(/\W+/g);
/* Parole da censurare:
Excepteur sint occaecat cupidatat non proident */
console.log(parolacce);

// Funzione che restituire il testo con xxx al posto delle parole censurate
function inquisitore(testo1, testo2) {
  counter = 0;
  for (var i = 0; i < testo1.length; i++) {
    if (testo2.includes(testo1[i]) == true) {
      testo1[i] = "xxx";
      counter++;
    }
  }
}

// Applichiamo la funzione ai 2 array
inquisitore(testo, parolacce)

// Restituiamo il testo con xxx al posto delle parole censurate.
document.getElementById('tuo_id').innerHTML = testo.join(" ");

// “Badword index” con il numero di parole censurate su il numero di parole totali.
document.getElementById('mio_id').innerHTML = counter + " parolacce " + "su " + testo.length + " parole totali";
