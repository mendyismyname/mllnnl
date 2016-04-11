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
            function postToGoogle() {
                var field3 = $('#feed').val();
 
                $.ajax({
                url: "https://docs.google.com/forms/d/1QYHijGzQPtiKtVh9K77rDmSyMUDne9Ok2gKDk7l4xHA/formResponse",
                data: {"entry.36893429": field3},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function() {
                        //Success message
                    },
                    200: function() {
                        //Success Message
                    }
                }
            });
            }
             
            $(document).ready(function(){
                $('form').submit(function() {
                    postToGoogle();
                    return false;
                });
            });