$(document).ready(function(){

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
