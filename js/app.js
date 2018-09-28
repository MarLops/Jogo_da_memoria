/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        console.log(randomIndex)
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */







const R = $('.restart')

R.click(function(){
    var filhos = game.children;
    for (var i =0; i < 16; i = i +1){
        filhos[i].classList.remove('open');
        filhos[i].classList.remove('show');
        filhos[i].classList.remove('match');
        }
    filhos = shuffle(filhos);
    }

    )
    



const game = document.querySelector('.deck');

var Rodada = {
    jogadas: ["A","B"],
    n_jogada: 0,
    Resto: 0
};

game.addEventListener('click',function(event){
   const selector = event.target;
   /*
   const child = selector.firstChild.nextSibling.className;
   console.log(child)
    */
   if(selector.className == 'card'){
      
        selector.classList.toggle('open');
        selector.classList.toggle('show');
        
        if (Rodada.n_jogada%2 == 0) {
            Rodada.jogadas[0] = selector;
       
        }else{
            Rodada.jogadas[1] = selector;

            setTimeout(function(){
            if (Rodada.jogadas[0].firstChild.nextSibling.className != Rodada.jogadas[1].firstChild.nextSibling.className){
                Rodada.jogadas[0].classList.toggle('open');
                Rodada.jogadas[0].classList.toggle('show');
                Rodada.jogadas[1].classList.toggle('open');
                Rodada.jogadas[1].classList.toggle('show');
            }else{
                Rodada.jogadas[0].classList.toggle('match');
                Rodada.jogadas[1].classList.toggle('match');
            }
            
        },300);
        }
        console.log(Rodada.n_jogada)
        Rodada.n_jogada = Rodada.n_jogada + 1; 
    
    };
});

