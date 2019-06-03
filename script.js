$(document).ready(function(){
  var cards = [{title:"Card One", body:"blahblahblah"}, {title:"Card Two",body:"harharhar"}];
  var forwardButton = $('#cardAdvanceButton');
  var backButton = $('#cardRetreatButton');
  var addButton = $('#addCardButton')
  var deleteButton = $('#deleteCardButton')
  var currentCard = 0;

  var titleField = $('card_title')
  var bodyField = $('card_body')

// start with the first card
  updateCardDisplay(0)


  forwardButton.on('click',function(){
    // if we're at the end of the card stack wrap around to the first card.
    if (currentCard == cards.length -1){
      currentCard = 0;
    } else {
    currentCard++;
    };
    
    updateCardDisplay(currentCard)
  })


  backButton.on('click', function(){
    // if we're at the beginning of the card stack wrap around to the end.
    if (currentCard == 0){
      currentCard = cards.length-1;
    } else {
      currentCard--;
    };

    updateCardDisplay(currentCard)
  })

function updateCardDisplay(cardIndex){
  $('#card_title').text(cards[cardIndex].title);
  $('#card_body').text(cards[cardIndex].body);
}

addButton.on('click',function(){
  addCard()
})

deleteButton.on('click',function(){
  cards.splice(currentCard,1)
  if (cards.length == 0){
    addCard()
  } else{
    currentCard = cards.length -1
    updateCardDisplay(currentCard)
  }
 
})

function addCard(){
  cards.push({title:"Click me", body:"Click me to edit"})
  currentCard = cards.length -1
  updateCardDisplay(currentCard)
}

// make the title editable
  var content = document.querySelector('#card_title');
  content.addEventListener('input', function(event) {
    cards[currentCard].title = content.innerHTML;
  })

  // make the body editiable
  var content = document.querySelector('#card_body');
  content.addEventListener('input', function(event) {
    cards[currentCard].body = content.innerHTML;
  })

})







