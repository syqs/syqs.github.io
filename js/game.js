$(document).ready(function(){

  //initialize material-desing library

  $('.materialboxed').materialbox();
  $.material.init();
  $('img').addClass('d1')


  var synth = window.speechSynthesis;
  // var inputTxt = document.querySelector('.txt');

  var inputTxt = document.querySelector('.txt').childNodes[0].nodeValue;
  var voiceSelect = "native" ||"Google 日本語";

  var voices = synth.getVoices();

  function populateVoiceList() {
    voices = synth.getVoices();
    for(i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      // voiceSelect.appendChild(option); //when dealing with list of voices
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  // inputForm.onsubmit = function(event) {
  function onSubmit(event) {
    event.preventDefault();

    var utterThis = new SpeechSynthesisUtterance(inputTxt);
    var selectedOption = voiceSelect;
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    // range 0 - 2 for pitch
    utterThis.pitch = 1;
    //range from 0 - 2 for speed of speach
    utterThis.rate = 1.2;
    synth.speak(utterThis);
  }

  // :: TODO ::
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
  $('.rock').on('click', function(e) {
    // we need to prevent default onclick behaviour :: TODO
    setTimeout( start(0, 'rock'),2000);
    onSubmit(e)
  });

  // n is the number of game level deciding which parametars to call theJudge function with
  function start(n, userChoice){
    var result;
    var n = n || 0;
    if (n>=1){
      //// Play second match with new values // <-- version 0.1 code needs upgrades :: TODO
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
