  var choices  =  {
    rock : {name: "Rock", defeats: {scissors: "crushes", lizard: "crushes"}},
    paper: {name: "Paper", defeats: {rock:  "covers", spock: "disproves"}},
    scissors: {name: "Scissors", defeats:{paper : "cuts", lizard: "decapitates"}},
    lizard: {name: "Lizard", defeats:{paper: "eats", spock: "poisons"}},
    spock: {name: "Spock", defeats:{scissors : "smashes",rock : "vaporises", goku:"teaches the vulcan nerv pinch technique to"}},
    goku: {name: "Goku", defeats:{paper:"evaporates", rock:"slices", lizard:"become friends with", scissors:"laughs as"}},
    key: function(n) {
        return this[Object.keys(this)[n]];
    },
    level: 1
  };

  var choices2  =  {
    mutated_rock : {name: "Mutated_Rock", defeats: {neo: "crushes", gojira: "crushes"}},
    seriously_sharp_paper: {name: "Seriously_Sharp_Paper", defeats: {mutated_rock:  "covers", sarek: "disproves"}},
    neo: {name: "Neo", defeats:{paper : "cuts", gojira: "decapitates", seriously_sharp_paper: "decides there is no"}},
    gojira: {name: "Gojira", defeats:{paper: "eats", sarek: "rectifies"}},
    sarek: {name: "Sarek", defeats:{neo : "smashes",mutated_rock : "vaporises", super_goku:"teaches the Epic vulcan nerv pinch technique to"}},
    super_goku: {name: "super_goku", defeats:{paper:"evaporates", mutated_rock:"slices", gojira:"become friends with", neo:"laughs at"}},
    key: function(n) {
    return this[Object.keys(this)[n]];
    },
    level: 2
  };

function theJudge(computerChoice, userChoice){
    // had some issuess introduced this variable for a quick fix might not be necessary :: TODO
    var computerChoice2 = {};

    // if it is a tie or undefined :: take care of that first
    if(computerChoice == userChoice){
      alert("a tie? ");
      //print out to screen that its a tie :: TODO
      // voice it out to the user  :: TODO
      // start next order of bussiness :: TODO

    }else if(choices[userChoice] === undefined){
      alert("Your choice was not based in wisdom <3");
      // print out to screen that its a tie :: TODO
      // voice it out to the user :: TODO
      // start next order of bussiness :: TODO
    }else{
      // make userChoice an object
      userChoice = choices[userChoice];
      // returns true or false if property exists on the object
      var victory = userChoice.defeats[computerChoice] !== undefined;
      // make computerChoice an object
      computerChoice2 = choices[computerChoice];
      // If there is vicotry that is !undefined
      if(victory) {
        // since there was a property with the name of the value for the computerChoice in the defeats object nested within our property
        // we can anounce the winner
          alert("The Vitory! " + userChoice.name + " " + userChoice.defeats[computerChoice2.name.toLowerCase()] + " " + computerChoice2.name + "!");
      }else{
        // or the loserino
          alert("The Defeat! " + computerChoice2.name + " " + computerChoice2.defeats[userChoice.name.toLowerCase()] + " " + userChoice.name + "!");
      }
    }
 }

 // Computer choice needs refactoring
 function theChoice(theObject){
   var computerChoice = Math.random();
   if (computerChoice < 0.2) {
       computerChoice = theObject.key(0).name.toLowerCase();
   } else if (computerChoice <= 0.4) {
       computerChoice = theObject.key(1).name.toLowerCase();
   } else if (computerChoice <= 0.6) {
       computerChoice = theObject.key(2).name.toLowerCase();
   } else if (computerChoice <= 0.8) {
       computerChoice = theObject.key(3).name.toLowerCase();
   } else {
       computerChoice = theObject.key(4).name.toLowerCase();
   }
   return computerChoice;
 }
