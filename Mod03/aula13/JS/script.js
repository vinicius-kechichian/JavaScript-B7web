//Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

//Eventos
input.addEventListener('keyup', handleKeyUp); /* quando soltar o enter, evento funcionara */

//Funções
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        const newLi = document.createElement('li'); /* criar elemento na lista*/
        newLi.innerHTML = input.value; /* pegar o valor digitado */
        lista.appendChild(newLi); /* 
        
        adicionar na lista */

        input.value = ''; /* limpa campo de pesquisa */
    }
}