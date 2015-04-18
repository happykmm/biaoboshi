console.log("index.js is loading");

$(document).ready(function() {
	console.log('document is ready');


    $('.banner').unslider({
    	speed: 200,               //  The speed to animate each slide (in milliseconds)
		delay: 4000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true,             //  Support responsive design. May break non-responsive designs
		pause: false
    });


});