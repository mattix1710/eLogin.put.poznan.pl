$('.error').draggable();

var i;
var myErrors = 100;
var error = '<div class="error">' + $('.error').html() + '</div>',
    	x = window.innerWidth / 3,
    y = window.innerHeight / 3;

function duplicateError() {
  $('body').append(error);
  $('.error').last()
    .css({
      top: y + 'px',
      left: x + 'px'
    })
  	.draggable();
  x+=4; y+=4;
}

// duplicate Error after 3 sec
setTimeout(function(){ 
  for (i = 1; i < myErrors; i++) { 
    setTimeout(function(){ 
      duplicateError();
    }, 50 * i);
  }
}, 3000);

// duplicate Error on click
$('body').on('click', '.ok, .close-button', function(){
    duplicateError();
  }
);

// reload page after 8 sec
setTimeout(function(){ 
  location.reload();
}, 8000);