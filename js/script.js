(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".bi-arrow-down-circle").removeClass("arrow-effect");
        } else {
            $(".bi-arrow-down-circle").addClass("arrow-effect");

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
    $(".bi-arrow-down-circle").addClass("arrow-effect");
}, false);