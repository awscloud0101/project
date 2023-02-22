$(document).ready(function() {
    $("#mobile-nav").css("visibility", "visible");
    var iebrowser = null;
    var useragent = window.navigator.userAgent;
    var msie = useragent.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        iebrowser = true;
    } else {
        iebrowser = false;
    }

    var slider = $('.homeslider');
    slider.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1200,
        smartSpeed: 1800,
        slideSpeed: 250,
        paginationSpeed: 300,
        items: 1,
        navigation: false,
        dots: true,
        loop: true,
        responsiveClass: true,
    });
    var ContentBoxImg = $('.contexboximg');
    ContentBoxImg.owlCarousel({
        autoplay: false,
        slideSpeed: 5000,
        smartSpeed: 800,
        items: 1,
        navigation: false,
        singleItem: true,
        dots: true,
        loop: true,
        responsiveClass: false,
        onDragged: NextRelatedContent,
    });
    var BoxTitleOptions = {
        autoplay: false,
        slideSpeed: 5000,
        smartSpeed: 800,
        items: 1,
        singleItem: true,
        autoHeight: true,
        navigation: false,
        dots: false,
        loop: true,
        responsiveClass: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
    }
    var BoxSubTitleOptions = {
        autoplay: false,
        slideSpeed: 5000,
        smartSpeed: 1500,
        singleItem: true,
        autoHeight: true,
        items: 1,
        navigation: false,
        dots: false,
        loop: true,
        responsiveClass: true,
        animateOut: 'fadeOut',
        animateIn: 'slideInLeft',
    };
    var BoxTextOptions = {
        autoplay: false,
        slideSpeed: 5000,
        smartSpeed: 800,
        items: 1,
        navigation: false,
        autoHeight: false,
        dots: false,
        loop: true,
        responsiveClass: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    };
    if (iebrowser == false) {
        BoxTitleOptions['mouseDrag'] = false;
        BoxTitleOptions['touchDrag'] = false;
        BoxSubTitleOptions['mouseDrag'] = false;
        BoxSubTitleOptions['touchDrag'] = false;
        BoxTextOptions['mouseDrag'] = false;
        BoxTextOptions['touchDrag'] = false;
    }

    var ContentBoxTitle = $('.contexboxtitle');
    ContentBoxTitle.owlCarousel(BoxTitleOptions);

    var ContentBoxSubTitle = $('.contexboxsubtitle');
    ContentBoxSubTitle.owlCarousel(BoxSubTitleOptions);

    var ContentBoxText = $('.contexboxtext');
    ContentBoxText.owlCarousel(BoxTextOptions);

    function OwlFallback() {
        if (iebrowser == true) {
            ContentBoxTitle.addClass("owl-ie-fallback");
            ContentBoxText.removeClass("owl-drag");
            ContentBoxSubTitle.addClass("owl-ie-fallback");
            ContentBoxText.addClass("owl-ie-fallback");
        }
    }
    OwlFallback();

    function NextRelatedContent(event) {
        var direction = event.relatedTarget['_drag']['direction'];
        if (direction == "left") {
            ContentBoxText.trigger('next.owl.carousel');
            ContentBoxTitle.trigger('next.owl.carousel');
            ContentBoxSubTitle.trigger('next.owl.carousel');
        } else if (direction == "right") {
            ContentBoxText.trigger('prev.owl.carousel');
            ContentBoxTitle.trigger('prev.owl.carousel');
            ContentBoxSubTitle.trigger('prev.owl.carousel');
        }
    };

    $('.prev-content').click(function() {
        ContentBoxText.trigger('prev.owl.carousel');
        ContentBoxTitle.trigger('prev.owl.carousel');
        ContentBoxImg.trigger('prev.owl.carousel');
        ContentBoxSubTitle.trigger('prev.owl.carousel');
    });

    $('.next-content').click(function() {
        ContentBoxText.trigger('next.owl.carousel');
        ContentBoxTitle.trigger('next.owl.carousel');
        ContentBoxImg.trigger('next.owl.carousel');
        ContentBoxSubTitle.trigger('next.owl.carousel');
    });
    $('.content01 .owl-dot').on('click', function() {
        ContentBoxTitle.trigger('to.owl.carousel', [$(this).index(), 300]);
        ContentBoxText.trigger('to.owl.carousel', [$(this).index(), 300]);
        ContentBoxSubTitle.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    function ResizeIllu() {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
    }
    ResizeIllu();
    setTimeout(ResizeIllu, 500);
    setTimeout(ResizeIllu, 2000);
    setTimeout(ResizeIllu, 3000);
    setTimeout(ResizeIllu, 5000);

    // var slideout = new Slideout({
    //     'panel': document.getElementById('content'),
    //     'menu': document.getElementById('mobile-nav'),
    //     'padding': 256,
    //     'tolerance': 70,
    //     'side': 'right',
    //     'touch': true
    // });
    // slideout.disableTouch();

    /* Maintain After Slider */
    function AbosluteParent() {
        var parent = $(".absolute-parent");
        var child_ref = $(parent).attr("for");
        var child_height = $(child_ref).innerHeight();
        $(parent).css("min-height", child_height);
    }
    AbosluteParent();

    $(window).resize(function() {
        AbosluteParent();
    });

    function ResizeableFunc() {
        AbosluteParent();
    }
    window.onresize = ResizeableFunc;

    /* Maintain After Slider */

    // $('.toggle-mobile-nav').on('click', function() {
    //     slideout.toggle();
    //     if (slideout.isOpen()) {
    //         $("#hamberger-ico").addClass('open');
    //     } else {
    //         $("#hamberger-ico").removeClass('open');
    //     }
    // });



    $NavDropItem = $("div.drop-item-outer a.dropdown-item");
    $NavDropItem.click(function(event) {
        event.stopPropagation();
        if ($(this).prop("target") == "_blank") {
            href = $(this).attr("href");
            window.open = href;
        } else {
            href = $(this).attr("href");
            window.location = href;
            return true;
        }
    });




    $(".smooth-scroll").click(function() {
        var ref = $(this).attr("for");
        var pos = $(ref).offset().top + 2;
        var scroll = $("#content").scrollTop();
    console.log(pos);
        if (pos >= 1500) {
            speed = 1500;
        } else {
            speed = 1000;
        }
        $("#content").stop().animate({ scrollTop: pos+scroll }, speed, "swing");
    });



    var ContentSlide = $('.slide-content');
    ContentSlide.owlCarousel({
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1200,
        smartSpeed: 1500,
        items: 1,
        autoHeight: false,
        navigation: false,
        dots: true,
        responsiveClass: true,
    });



 
   

});