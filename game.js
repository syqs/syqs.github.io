$(document).ready(function(){

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



  function theJudge(computerChoice, userChoice, choices){
    var computerChoice2 = {}
    if(computerChoice == userChoice){
        alert("===");
    }else if(choices[userChoice] === undefined){
        alert("Your choice was not based in wisdom");
    }else{
        userChoice = choices[userChoice];
        var victory = userChoice.defeats[computerChoice] !== undefined;
        computerChoice2 = choices[computerChoice];
        if(victory) {
            alert("The Vitory! " + userChoice.name + " " + userChoice.defeats[computerChoice2.name.toLowerCase()] + " " + computerChoice2.name + "!");
        }else{
            alert("The Defeat! " + computerChoice2.name + " " + computerChoice2.defeats[userChoice.name.toLowerCase()] + " " + userChoice.name + "!");
        }
    }
}

// var userChoice2 = prompt("Do you choose mutated rock, super sharp paper, neo, gojira, spocks grandfather(sarek) or perhaps the super goku?").toLowerCase();

// alert("The computer chose " + computerChoice2);
//
// theJudge(computerChoice2, userChoice, choices);

var start = function (n){
  var n = n || 0;
  if (n>=1){
    var userChoice2 = prompt("Do you choose mutated rock, super sharp paper, neo, gojira, spocks grandfather(sarek) or perhaps the super goku?").toLowerCase();
    computerChoice = theChoice(choices2);
    theJudge(computerChoice, userChoice2, choices2);
  }else{
    var userChoice = prompt("Do you choose rock, paper, scissors, lizard, spock or perhaps the goku?");
    computerChoice = theChoice(choices);
    theJudge(computerChoice, userChoice, choices);
  }
  n++
  start(n)
};

start()

var thePlayScene1 = function(){
  var ZoomDown = 'animated zoomOutDown';
  var ZoomUp = 'animated zoomInUp';
  var t1 = function(){
    console.log(  $('h1.first').html('<h1 class="animated zoomInUp">How are we feeling today?</h1>'))
    $('h1.first').text('How are we feeling today?');
    $('hello').text('Somewhat recreational');
  };
  var t2 = function(n,m) {
    n = n || 0;
    m = m || 0;
    if(n === 'button1'){
      if (m === 0) {
        return "this is the default param for button1"
      }else if(m===1){
        return "button1 option 1"
      }else{
        return "... all the other options..."
      }

    }else if (n==='title1'){
      if (m === 0) {
        return "this is the default param"
      }else if(m===1){
        return "How about that weather?"
      }else{
        return "... and so it begins..."
      }
    }else throw error('the error is done, but not really')
  }

  //first button clicked
  $('.hello').on('click', function() {
    $('.hello').addClass(ZoomDown).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('.hello').removeClass(ZoomDown);
      $('.hello').text(t2('button1',1));
      $('.hello').addClass(ZoomUp);
      // add the class name for the next button :: since we remove the class once we want to reasign the value of the button to something else
      $('.hello').addClass('hello2');
      $('.hello').removeClass('hello');

    });

    $('h1.first').addClass(ZoomDown).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $('h1.first').removeClass(ZoomDown);
      $('h1.first').text(t2('title1',2));
      $('h1.first').addClass(ZoomUp);
      //add an incrementing counter and use it to generate a
      //new class name in order to create some sort of dynamic targeting mechanism
      $('h1.first').addClass('question2');
      $('h1.first').removeClass('first');
      $('.q1').removeClass('hidden').addClass(ZoomUp)
    });
  });
  // tada! button clicked :: .q1
  $('.q1').on('click', function() {
    $('.q1').addClass(ZoomDown).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      // question2 is the current h1 class when this function is running
      $('.question2').addClass(ZoomDown).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $('.question2').removeClass(ZoomDown);
        //pass in 2 parameters to our t2 function to decide what to print out
        $('.question2').text(t2('title1',0));
        $('.question2').addClass(ZoomUp);
        $('.question2').addClass('question3');
        $('.question2').removeClass('question2');
      });

  });
});
}

thePlayScene1();

});
