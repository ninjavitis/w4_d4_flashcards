$(document).ready(function(){
  var cards = [{title:"Ilithid", body:"Psionic tyrants, slavers, and interdimensional voyagers, they are insidious masterminds that harvest entire races for their own twisted ends. Four tentacles snake from their octopus-like heads, flexing in hungry anticipation when sentient creatures come near."}, 
               {title:"Shambling Mound",body:"A shambling mound, sometimes called a shambler, trudges ponderously through bleak swamps, dismal marshes, and rain forests, consuming any organic matter in its path. This rotting heap of animated vegetation looms up half again as tall as a human, tapering into a faceless head at its top."},
                {title:"Demilich",body:"The immortality granted to a lich lasts only as long as it feeds mortal souls to its phylactery. If it falters or fails in that task, its bones turn to dust until only its skull remains. This demilich contains only a fragment of the lich’s malevolent life force — just enough so that if it is disturbed, these remains rise into the air and assume a wraithlike form. The skull then emits a terrifying howl that can slay the weak-hearted and leave others trembling with fear. Left alone, it sinks back down and returns to the empty peace of its existence."}
              ];
  
               var forwardButton = $('#cardAdvanceButton');
  var backButton = $('#cardRetreatButton');
  var addButton = $('#addCardButton')
  var deleteButton = $('#deleteCardButton')
  var currentCard = 0;

  var titleField = $('#card_title')
  var bodyField = $('#card_body')

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



titleField.on('click', function(){
  var content = document.querySelector('#card_title');
  content.addEventListener('input', function(event) {
    cards[currentCard].title = content.innerHTML;
  })
})


bodyField.on('click', function(){
  // make the body editiable
  var content = document.querySelector('#card_body');
  content.addEventListener('input', function(event) {
    cards[currentCard].body = content.innerHTML;
  })
})





})







