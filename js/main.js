//creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età.

let student = {
    nome: 'alberto',
    cognome: 'zanola',
    eta: 25
}

// stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let key in student) {
    console.log(key + ': ' + student[key]);
}


// creare un array di oggetti studenti.

let students = [
    {
        nome: 'luca',
        cognome: 'bianchi',
        eta: 38  
    },
    {
        nome: 'anna',
        cognome: 'rossi',
        eta: 18  
    },
    {
        nome: 'stefano',
        cognome: 'verdi',
        eta: 55  
    },
    {
        nome: 'giacomo',
        cognome: 'freddi',
        eta: 28  
    }
];

// ciclare su tutti gli studenti e stampare per ogniuno di essi , nome e cognome.

for (let i = 0; i < students.length; i++) {
    console.log(students[i].nome + ': ' + students[i].cognome);
}

// dare la possibilità all'utente, attraverso 3 prompt (), di aggiungere un nuovo oggetto studente inserendolo nell'ordine: nome, cognome, età.

let nomeUtente = prompt('inserire il proprio nome');
let cognomeUtente = prompt('inserire il proprio congome');
let etaUtente = parseInt(prompt('inserire la propria età'));

students.push({
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente
});

console.log(students);