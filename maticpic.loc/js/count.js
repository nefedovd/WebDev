var currentNumber = $('.clients').text();

$({numberValue: currentNumber}).animate({numberValue: 271}, {
    duration: 5000,
    easing: 'linear',
    step: function() { 
        $('.clients').text(Math.ceil(this.numberValue)); 
    }
});

var currentNumber = $('.works').text();

$({numberValue: currentNumber}).animate({numberValue: 984}, {
    duration: 5000,
    easing: 'linear',
    step: function() { 
        $('.works').text(Math.ceil(this.numberValue)); 
    }
});