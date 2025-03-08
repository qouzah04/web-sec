$(document).ready(function () {
    $(window).on('scroll', function () {
        let scrollPosition = $(window).scrollTop();

        $('section').each(function () {
            const sectionTop = $(this).offset().top - 150;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                const id = $(this).attr('id');
                $('nav ul li a').removeClass('active');
                $('nav ul li a[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
