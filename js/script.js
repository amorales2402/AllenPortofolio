var currentsection = "hola";
var lastsection = "hola";


function animatelogo() {
    $(".transitionleft").addClass("translogoleft");
    $(".transitionright").addClass("translogoright");
}

function removelogo() {
    $(".transitionleft").removeClass("translogoleft");
    $(".transitionright").removeClass("translogoright");
    $(".transcontainerright").removeClass("transcontright");
}

function animatetxt(currentsection) {
    $(".transitiontxtleft" + currentsection.substring(1, 2) + currentsection.substring(8, 9)).addClass("transtxtleft" + currentsection.substring(1, 2) + currentsection.substring(8, 9));
    $(".transitiontxtright" + currentsection.substring(1, 2) + currentsection.substring(8, 9)).addClass("transtxtright" + currentsection.substring(1, 2) + currentsection.substring(8, 9));
}

function removetxt(currentsection) {
    $(".transitiontxtleft" + currentsection.substring(1, 2) + currentsection.substring(8, 9)).removeClass("transtxtleft" + currentsection.substring(1, 2) + currentsection.substring(8, 9));
    $(".transitiontxtright" + currentsection.substring(1, 2) + currentsection.substring(8, 9)).removeClass("transtxtright" + currentsection.substring(1, 2) + currentsection.substring(8, 9));
}

window.addEventListener('load', function() {

    animatelogo();

    var allimages = document.getElementsByTagName('img');
    for (var i = 0; i < allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }

}, false);

$('#click1').click(function() {
    $(".section1").animate({
        width: "toggle"
    });
    $(".section2").animate({
        width: "toggle"
    });


    $(".home").show();

    $(".navbar").addClass("bg-light");

    currentsection = ".section2";
    lastsection = ".section1";

    animatetxt(currentsection);
    removelogo();
});

$('#click2').click(function() {
    $(".section2").animate({
        width: "toggle"
    });
    $(".section3").animate({
        width: "toggle"
    });

    currentsection = ".section3";
    lastsection = ".section2";

    removetxt(lastsection);
    animatetxt(currentsection);
});

$('#click3').click(function() {
    $(".section3").animate({
        width: "toggle"
    });
    $(".section4").animate({
        width: "toggle"
    });

    currentsection = ".section4";
    lastsection = ".section3";

    removetxt(lastsection);
    animatetxt(currentsection);
});
$('#click4').click(function() {
    $(".section4").animate({
        width: "toggle"
    });
    $(".section5").animate({
        width: "toggle"
    });

    currentsection = ".section5";
    lastsection = ".section4";

    removetxt(lastsection);
    animatetxt(currentsection);
});

$('#menu1').click(function() {

    $(".section1").animate({
        width: "toggle"
    })
    $(currentsection).animate({
        width: "toggle"
    })

    $(".home").hide();
    $(".selfmadeopt").show();
    $(".resumeopt").show();
    $(".navbar").removeClass("bg-light");

    currentsection = ".section1";
    lastsection = ".section2";

    animatelogo();
    removetxt(lastsection);
});

$('#menu6 ').click(function() {
    $(".section1").animate({
        width: "toggle"
    });
    $(".section2").animate({
        width: "toggle"
    });


    $(".home").hide();
    $(".navbar").removeClass("bg-light");

    currentsection = ".section1";
    lastsection = ".section2";

    removetxt(lastsection);
    animatelogo();
});
$('#menu5').click(function() {
    $(".section2").animate({
        width: "toggle"
    });
    $(".section3").animate({
        width: "toggle"
    });

    currentsection = ".section2";
    lastsection = ".section3";

    removetxt(lastsection);
    animatetxt(currentsection);
});
$('#menu4').click(function() {
    $(".section3").animate({
        width: "toggle"
    });
    $(".section4").animate({
        width: "toggle"
    });

    currentsection = ".section3";
    lastsection = ".section4";

    removetxt(lastsection);
    animatetxt(currentsection);
});
$('#menu3').click(function() {
    $(".section4").animate({
        width: "toggle"
    });
    $(".section5").animate({
        width: "toggle"
    });

    currentsection = ".section4";
    lastsection = ".section5";

    removetxt(lastsection);
    animatetxt(currentsection);
});


$('#selfmade').click(function() {
    console.log(lastsection, currentsection);
    $(".selfmade").animate({
        width: "toggle"
    })
    if (currentsection == "hola") {
        $(".section1").animate({
            width: "toggle"
        })
    } else {
        $(currentsection).animate({
            width: "toggle"
        })
    }



    $(".home").show();
    $(".selfmadeopt").hide();
    $(".navbar").addClass("bg-light");
    if (currentsection == "hola") {
        currentsection = ".selfmade";
    }
    currentsection = ".selfmade";
    lastsection = ".section1";
    console.log(lastsection, currentsection);
});

$('#resume').click(function() {
    console.log(lastsection, currentsection);
    $(".resume").animate({
        width: "toggle"
    })
    if (currentsection == "hola") {
        $(".section1").animate({
            width: "toggle"
        })
    } else {
        $(currentsection).animate({
            width: "toggle"
        })
    }

    $(".home").show();
    $(".resumeopt").hide();
    $(".navbar").addClass("bg-light");
    if (currentsection == "hola") {
        currentsection = ".resume";
    }
    currentsection = ".resume";
    lastsection = ".section1";
    console.log(lastsection, currentsection);
});

$('#resumeopt').click(function() {
    $(".resume").animate({
        width: "toggle"
    });
    $(".resume2").animate({
        width: "toggle"
    });

    currentsection = ".resume2";
    lastsection = ".resume";
});