
$(document).ready(function(){

    // Banner btn hover class adding 
    $('.bnr-con-logo-div').hover(
        function() {
            $('.bnr-con-logo').hide();
            $('.bnr-con-hamburger-div').css('display','flex');
            $('.bnr-con-logo-div').css('padding', '11px 11px');
        },
        function() { 
            $('.bnr-con-hamburger-div').hide();
            $('.bnr-con-logo-div').css('padding', '14px 40px');
            $('.bnr-con-logo').show();
            $(".hamburger-icon").removeClass('active');
        }
    );

    $('.contact-btn').click(function(){
        $(".hamburger-icon").addClass('active');
    });
    $('.hamburger-icon').click(function(){
        $(".hamburger-icon").removeClass('active');
    });


    // Unique section hover class adding 
    $('.unique-sec-learn-btn').hover(
        function() {
            $(".unique-sec-learn-btn").addClass('animate');
            setTimeout(function(){
                $('.learn-btn-dark-style').show();
            },100)
        },
        function() { 
            $(".unique-sec-learn-btn").removeClass('animate');
            setTimeout(function(){
                $('.learn-btn-dark-style').hide();
            },100)
        }
    );


    // who we are section hover class adding 
    $('.who-we-are-section-learn-btn').hover(
        function() {
            $(".who-we-are-section-learn-btn").addClass('animate');
            setTimeout(function(){
                $('.who-we-are-section-learn-btn-dark-style').show();
            },100)
        },
        function() { 
            $(".who-we-are-section-learn-btn").removeClass('animate');
            setTimeout(function(){
                $('.who-we-are-section-learn-btn-dark-style').hide();
            },100)
        }
    );

    // who we are section image slider
    $(".who-we-are-slider").slick({
        slidesToShow: 3,
        infinite:true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 769, 
                settings: {
                    slidesToShow: 2,   
                    slidesToScroll: 1, 
                    infinite: true,         
                }
            },
            {
                breakpoint: 576, 
                settings: {
                    slidesToShow: 1.2,   
                    slidesToScroll: 1, 
                    infinite: false,  
                    autoplay: true,       
                }
            },
        ]
    });
    $('.who-we-are-slider button').text("");


    // Services Section card click 
    $('.serv-card-main-div').click(function() {
        console.log("Clicked");

        let container = $('.services-card-section');
        let clickedElement = $(this);
        let scrollPosition = clickedElement.position().left + container.scrollLeft();

        // Adjust for the width of the clicked element
        let adjustedScrollPosition = scrollPosition - (container.width() - clickedElement.outerWidth()) / 2;

        container.animate({ scrollLeft: adjustedScrollPosition }, 500);

    
        if ($(this).hasClass("serv-card-active")) {
            $(this).removeClass("serv-card-active");
    
            $(this).find(".serv-bf-click").fadeIn(200);
            $(this).find(".serv-after-click").fadeOut(200);
    
            $(".serv-card-main-div").not(this).removeClass("serv-card-active");
            $(".serv-bf-click").fadeIn(200);
            $(".serv-after-click").fadeOut(200);
        } else {
            $(".serv-card-main-div").removeClass("serv-card-active");
            $(".serv-bf-click").fadeIn(200);
            $(".serv-after-click").fadeOut(200);
    
            $(this).addClass("serv-card-active");
    
            $(this).find(".serv-bf-click").fadeOut(200);
            $(this).find(".serv-after-click").fadeIn(200);
        }
    });
    
    
    // throughout flow section
    $(".through-blog-slider-div").slick({
        slidesToShow: 1,
        infinite:true,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 767, 
                settings: {
                    autoplay: true,        
                }
            },
        ]
    });
    $('.through-blog-slider-div .slick-prev').text("");
    $('.through-blog-slider-div .slick-next').text("");


    // Footer Section connect btn hover 
    $('.footer-sec-coonect-btn').hover(
        function() {
            $(".footer-sec-coonect-btn").addClass('animate');
            setTimeout(function(){
                $('.footer-sec-coonect-btn-dark-style').show();
            },100)
        },
        function() { 
            $(".footer-sec-coonect-btn").removeClass('animate');
            setTimeout(function(){
                $('.footer-sec-coonect-btn-dark-style').hide();
            },100)
        }
    );


    // Footer nav scroll
    $('.footer-nav-page-section p').click(function(){
        // console.log("clicked");
        let scroll_id = $(this).attr('data-scroll');

        if ($('#' + scroll_id).length) {
            $('html, body').animate({
                scrollTop: $('#' + scroll_id).offset().top - 50
            }, 1000);
        } else {
            console.log("Target element not found");
        }
    });
    

});
