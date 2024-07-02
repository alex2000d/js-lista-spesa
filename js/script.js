// creo un arrey
let ingredienti = ['pomodoro', 'uova', 'pane', 'pasta', 'formaggio', 'tonno', 'affettati', 'biscotti', 'latte'];
console.log(ingredienti)
// recupero l'elemento che deve contenere la mia lista della spesa
const lista_spesa = document.getElementById('lista-spesa');
// ciclo l'arrey
let i = 0
 while ( i < ingredienti.length ){
    
    i++
    // creo un nuovo elemento nella lista
    const li = document.createElement('li');
    // gli metto il testo all'interno
    li.innerText = ingredienti[i];
// appendo la lista all'interno di lista spesa
    lista_spesa.append(li);
}