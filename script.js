$(function () {

  //array to hold tarot cards
  let cards = [  "death.png" , "devil.png" ,   "fool.png" , "hangedman.png" , "hermit.png" ,  "judgement.png" ,   "lovers.png" ,   "priestess.png" ,  "sun.png" ];

//find random value for repeated card
  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  console.log (randomCard)

//add random value to cards array
function addRandom () {
  cards.push($(randomCard));
}

  //Fisher-Yates shuffle algorithm

  function shuffle(array) {
    //use a for loop to walk through the array in reverse order  
    for (let i = array.length - 1; i > 1; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // choose a random index from 0 to i

      // swap elements array[i] and array[j]

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  //call the shuffle function
  shuffle(cards)


//event listener for card click
$("#container").on('click', 'li', function(){
  //check that the event listener is working
  console.log($(this));

  //toggle the image
  $(this).find("img").toggle();
});

  //loop through tarot array with JQuery.each and displaying the icon images
  $(cards).each(
    function (index, value) {
      
      let card = $("#tarot").append(`<li><img src="png/${value}"></li>`);
      
    
  });

  
});
