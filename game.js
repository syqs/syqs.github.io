$(document).ready(function(){

  // function theUserChoice(n){
  //   var n = n || undefined;
  //   if(n === 'undefined'){
  //     return 'error user input undefined'
  //   }else if(n === 'rock'){
  //     // Make computer pick from the object's properties :: choices object
  //     computerChoice = theChoice(choices);
  //     // Takes computerChoice, userChoice n, and the collection choices
  //     theJudge(computerChoice, n, choices);
  //
  //   }else if (n === 'paper'){
  //
  //   }else if (){
  //     // // var userChoice2 = prompt("Do you choose mutated rock, super sharp paper, neo, gojira, spocks grandfather(sarek) or perhaps the super goku?").toLowerCase();
  //     // computerChoice = theChoice(choices2);
  //     // theJudge(computerChoice, userChoice2, choices2);
  //   }else{
  //
  //   }
  //
  // }

  // listener for click on rock img
  $('.rock').on('click', function() {
    start(0, 'rock');
  });

  // n is the number of game level deciding which parametars to call theJudge function with
  function start(n, userChoice){
    var result;
    var n = n || 0;
    if (n>=1){
      ///theChoice2 function needs be rewriten

      //// Play second match with new values // <-- version 0.1 code :: TODO
      // var userChoice2 = theUserChoice(choices2);
      // computerChoice = theChoice(choices2);
      // theJudge(computerChoice, userChoice2, choices2);
      console.log('playing game 2')
    }else{
      // made userChoice === 'rock' for testing :: TODO 
      computerChoice = theChoice(choices);

      // call in theJudge passing in choices computer and user made
      theJudge(computerChoice, userChoice);
    }

  };




});
