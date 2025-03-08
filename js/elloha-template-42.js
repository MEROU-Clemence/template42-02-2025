$(document).ready(function () {
    // ****** Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.first-nav').toggleClass('first-nav-fixed');
        $('main').toggleClass('main-top');
    });

    // Sous-menu mobile
    $('.clic-sub-menu').on('click', function () {
        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }

        if ($(this).children('a').hasClass('a-active')) {
            $('.clic-sub-menu a').removeClass('a-active');
        } else {
            $('.clic-sub-menu a').removeClass('a-active');
            $(this).children('a').addClass('a-active');
        }
    });

    // ****** SCEA
    // Voir plus SCEA
    $(".options-scea span").hide();
    $(".options-scea span").slice(0, 10).show();

    $("#seeMore1").on('click', function (e) {
        e.preventDefault();

        $(".options-scea span:hidden").slideDown();

        $("#seeMore1").hide();
        $("#seeLess1").show();
    });

    // Voir moins SCEA
    $("#seeLess1").on('click', function (e) {
        e.preventDefault();

        $(".options-scea span").not(":lt(10)").slideUp();

        $("#seeMore1").show();
        $("#seeLess1").hide();
    });

    // ****** METEO: Applique l'image de fond correspondante
    $('.weather-icon').each(function () {
        var $meteoModule = $(this).closest('.meteo-img');
        var weatherIcon = $(this).attr('data');
        var baseUrl = $meteoModule.data('url');
        var iconPath = weatherIcon && weatherIcon.trim() !== ''
            ? baseUrl + weatherIcon + '.jpeg'
            : baseUrl + 'clear-day.jpeg';

        // Ajoute une classe basée sur l'icône météo (si `weatherIcon` est défini)
        if (weatherIcon && weatherIcon.trim() !== '') {
            $meteoModule.addClass('weather-' + weatherIcon);
        }

        // Applique l'image de fond à l'élément '.meteo'
        $meteoModule.css({
            'background-image': 'url(' + iconPath + ')',
            'background-size': 'cover'
        });
    });

    // Clics sur les liens des prix chèques cadeaux
    $('.all-prices-vouchers a').on('click', function (event) {
        event.preventDefault();

        var targetId = $(this).attr('id');

        // Trouver l'élément correspondant dans le slider
        var targetElement = $(targetId);
        if (targetElement.length) {
            var index = $('.slider-vouchers').find('.owl-item').filter(function () {
                return $(this).find(targetId).length > 0;
            }).index();

            // Si un index valide est trouvé, déplacer le slider
            if (index !== -1) {
                $('.slider-vouchers').trigger('to.owl.carousel', [index, 600]);
            } else {
                console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
            }
        } else {
            console.error("Cible non trouvée pour :", targetId);
        }
    });

    // Détecter le changement dans Owl Carousel pour le .active
    $('.slider-vouchers').on('changed.owl.carousel', function (event) {
        var currentIndex = event.item.index;

        // Sélectionner l'élément actif dans le slider
        var activeSlide = $(event.target).find('.owl-item').eq(currentIndex).find('.presta-contain-vouchers');

        if (activeSlide.length) {
            var activeId = activeSlide.attr('id');
            console.log("Élément actif dans le slider :", activeId);

            $('.all-prices-vouchers a').removeClass('active');

            $('.all-prices-vouchers a[href="#' + activeId + '"]').addClass('active');

        }
    });
});

$(document).ready(function () {
    $('.slider-gallery').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.avis-slider').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: false,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        dots: false,
        nav: true,
        margin: 20,
        items: 1,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-news').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: true,
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-other-pages').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 20,
        autoWidth: true,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-page-page').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: true,
        navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"],
        responsiveClass: true,
        items: 1,
        dots: true,
        nav: false,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-vouchers').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
        margin: 30,
        autoHeight: true,
        responsiveClass: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 2,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 2,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
});