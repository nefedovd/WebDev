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