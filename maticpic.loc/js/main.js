var currentNumber = $('.projects').text();

$({numberValue: currentNumber}).animate({numberValue: 476}, {
    duration: 5000,
    easing: 'linear',
    step: function() { 
        $('.projects').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('.hours').text();

$({numberValue: currentNumber}).animate({numberValue: 1843}, {
    duration: 5000,
    easing: 'linear',
    step: function() { 
        $('.hours').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('.feedbacks').text();

$({numberValue: currentNumber}).animate({numberValue: 516}, {
    duration: 5000,
    easing: 'linear',
    step: function() { 
        $('.feedbacks').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('.clients').text();

$({numberValue: currentNumber}).animate({numberValue: 675}, {
    duration: 5000,
    easing: 'linear',
    step: function() { 
        $('.clients').text(Math.ceil(this.numberValue)); 
    }
});

var $target = $('.main-tales');
var hold = 500;

$.each($target,function(i,t){
     var $this = $(t);
     setTimeout(function(){ $this.show('normal'); },i*hold);
});


//
//Slider Script
//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" S-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " S-active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}