  var choices  =  {
    rock : {name: "Rock", defeats: {scissors: "crushes", lizard: "crushes"}},
    paper: {name: "Paper", defeats: {rock:  "covers", spock: "disproves"}},
    scissors: {name: "Scissors", defeats:{paper : "cuts", lizard: "decapitates"}},
    lizard: {name: "Lizard", defeats:{paper: "eats", spock: "poisons"}},
    spock: {name: "Spock", defeats:{zan: "teaches the ultimate logic to",scissors : "smashes",rock : "vaporises", goku:"Teaches the Vulcan Nerv Pinch technique to",}},
    goku: {name: "Goku", defeats:{paper:"evaporates", rock:"slices", lizard:"become friends with", scissors:"laughs as"}},
    zan: {name: "Zan", defeats: {paper:"recycles", rock:"gets a new workout partner:", lizard: "tames", scissors: "doesn't need"}},
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
