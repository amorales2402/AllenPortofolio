(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".navbar").addClass("logo_b");
        } else {
            $(".navbar").removeClass("logo_b");
        }

    });
})(jQuery);

window.addEventListener('load', function() {
    var allimages = document.getElementsByTagName('img');
    for (var i = 0; i < allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
    $(".bg_1").addClass("bg_1_hq");
    $(".bg_3").addClass("bg_3_hq");
    $(".bg_3_2").addClass("bg_3_2_hq");

}, false)