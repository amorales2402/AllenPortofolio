

(function ($) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            $(".navbar").addClass("logo_b");
        } else {
            $(".navbar").removeClass("logo_b");
        }

    });
})(jQuery);