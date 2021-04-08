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