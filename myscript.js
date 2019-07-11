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
Lorem? ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis troia exercitation ullamco laboris puttana ut aliquip ex ea commodo
consequat. Duis aute irure vaffanculo in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id cazzo laborum. */
console.log(testo);

// Chiedo all'utente le parole da censurare
parolacce = prompt("Inserisci qui le parole che devono essere censurate").split(/\W+/g);
/* Parole da censurare: cazzo vaffanculo puttana troia */
console.log(parolacce);

// Restituire il testo con xxx al posto delle parole censurate
counter = 0;
for (var i = 0; i < testo.length; i++) {
  if (testo.includes(parolacce[i])) {
    parolacce[i] = "xxx";
    counter++;

  }
}
console.log(parolacce);
console.log(counter);


// “Badword index” con il numero di parole censurate su il numero di parole totali.
document.getElementById('mio_id').innerHTML = counter + " parolacce " + "su " + testo.length + " parole totali";
