function static() {
    $('#dot').css('border-color', 'transparent');
    $('#dot.static').noisy({
        'intensity': 1,
        'size': 1000,
        'opacity': 1,
        'fallback': '',
        'monochrome': true
    });
}

static();

$('body').ready(function onOff() {
    $('#dot').toggleClass('active');
});


$( "a" ).click(function() {
  $( ".contact" ).toggle();

  if ($( this ).html() == "Close") {
    $( this ).html('Business is by invite only.');
 } else {
  $( this ).html('Close');
};
});

setTimeout(function() {
    // Do something after 5 seconds
    $('body').ready(function onOff() {
        $('.expand').css('width', '600px');
    });
}, 800);



var play = false; // switch on\off
var ii = null; // interval ID
var colors = ['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)', 'rgba(0,0,0,1)']; // pixel colors

//  make a new renderer 
function getRender(pdx, pdy, pcolors) {
    var cvs = document.getElementById("cvs");
    var ctx = cvs.getContext('2d');
    var wt = cvs.width;
    var ht = cvs.height;
    var dx = pdx;
    var dy = pdy;
    var colors = pcolors;
    return function() {
        for (var x = 0; x < wt; x += dx)
            for (var y = 0; y < ht; y += dy) {
                var idx = Math.floor(Math.random() * colors.length);
                ctx.fillStyle = colors[idx];
                ctx.fillRect(x, y, dx, dy);
            }
    }
};

// one to go, please
var render = getRender(1, 2, colors);

// define switcher
function doSwitch(e) {
    play = !play;
    if (play)
        ii = setInterval(render, 0);
    else
        clearInterval(ii);
};
// switch ON
doSwitch();
// link switcher to keyboard
document.body.addEventListener('keydown', doSwitch);



//upand down

function loop() {
    $('#cvs').animate({
        bottom: '1000'
    }, {
        duration: 12000,
        complete: function() {
            $('#cvs').animate({
                bottom: '-50px'
            }, {
                duration: 100,
                complete: loop
            });
        }
    });
}
loop();



// magic.js
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'process.php', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
                        encode          : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 

                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
