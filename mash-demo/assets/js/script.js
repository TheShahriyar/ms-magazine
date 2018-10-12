(function($) {
    "use strict";

    //when dom is ready
    $(document).ready(function() {


        // Start Back to Top
        $('#back-to-top').on('click', function() {
            $("html, body").animate({scrollTop: 0}, 1000);
            return false;
        });



        //Owl Carousel-- Heading Post Slider
        $(".heading-carousel-post").owlCarousel({
            pagination: true,
            navigation: true,
            items : 1,
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".breaking-news-carousel").owlCarousel({
            pagination: false,
            navigation: true,
            items : 1,
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".featured-post-carousel").owlCarousel({
            pagination: false,
            navigation: true,
            items : 4,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".heading-news-section-3").owlCarousel({
            pagination: false,
            navigation: true,
            items : 4,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".gallery-post").owlCarousel({
            pagination: true,
            navigation: false,
            items : 1,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".slide-post-2-item").owlCarousel({
            pagination: false,
            navigation: true,
            items : 2,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".slide-post-3-item").owlCarousel({
            pagination: false,
            navigation: true,
            items : 3,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $(".slide-post-1-item").owlCarousel({
            pagination: false,
            navigation: true,
            items : 1,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet: [767,2],
            slideSpeed: 2500,
            stopOnHover: true,
            autoPlay: true,
            singleItem: false,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });

        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 180,
            itemMargin: 5,
            asNavFor: '#slider'
        });
         
        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });


        /*-------------------------------------------------*/
        /* =  OWL carousell - featured post, video post, gallery posts
        /*-------------------------------------------------*/
        try {
            var owlWrap = $('.owl-wrapper');

            if (owlWrap.length > 0) {

                if (jQuery().owlCarousel) {
                    owlWrap.each(function(){

                        var carousel= $(this).find('.owl-carousel'),
                            dataNum = $(this).find('.owl-carousel').attr('data-num'),
                            dataNum2,
                            dataNum3;

                        if ( dataNum == 1 ) {
                            dataNum2 = 1;
                            dataNum3 = 1;
                        } else if ( dataNum == 2 ) {
                            dataNum2 = 2;
                            dataNum3 = dataNum - 1;
                        } else {
                            dataNum2 = dataNum - 1;
                            dataNum3 = dataNum - 2;
                        }

                        carousel.owlCarousel({
                            autoPlay: 10000,
                            navigation : true,
                            pagination: false,
                            items : dataNum,
                            itemsDesktop : [1199,dataNum2],
                            itemsDesktopSmall : [979,dataNum3],
                            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
                        });

                    });
                }
            }

        } catch(err) {

        }


        // Massonry Post
        $(window).on('load', function() {

            var $container = $('.masonry-box');
            $container.isotope({
                
            });
        });



        //Tooltip
        $('[data-toggle="tooltip"]').tooltip()

        //video background
        try {
            jQuery(".player").mb_YTPlayer();
        } catch (err) {}

        
        // Popup Video
        try {
            $('.video-link').magnificPopup({
                type: 'iframe'
            });
        } catch(err) {

        }

        try {
            var magnLink = $('.log-in-popup');
            magnLink.magnificPopup({
                closeBtnInside:true
            });
        } catch(err) {

        }



        // Video with player
        var api_key = 'AIzaSyAsvJPKTArFviBbDntKU4sHxkl8fYrj1uM';
        $('.RYPP').rypp( api_key, {
            autoplay: true
        });



    });
    //dom ready end

    

    

    

})(jQuery);