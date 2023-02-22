  var owl = $(".mks").owlCarousel({
    // animateOut: 'fadeOut',
    items: 1,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true, 
    dots: true,
    dotsContainer: '#carousel-custom-dots',
    nav: true,
    loop: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true" style="font-size:40px;"></i>', '<i class="fa fa-angle-right" aria-hidden="true" style="font-size:40px; float:right;"></i>'],
    responsiveClass: true,
    startPosition: randomPosition()
 });
 $('.owl-dot').click(function(){owl.trigger('to.owl.carousel', [$(this).index(), 300]);});
 function randomPosition(){
    var r_hb = $('#carousel-custom-dots li').length;
    var randomize = null;
    randomize=1
 }

$(document).ready(function(){
      
     
      $(document).on('focus', '.datepicker',function(){
            $(this).datepicker({
                todayHighlight:true,
               format: "dd/mm/yyyy",
                autoclose:true
            })
        });



    $(".ds_m-forms li a").click(function(){
        var parent = $(this).parent("li").parent("ul").offset().top;
        var child = $(this).parent("li").offset().top;
        $(".ds_m-forms-tab").css({"top": child - parent});
    });

    $(".ds_m-terms li a").click(function(){
        var parent = $(this).parent("li").parent("ul").offset().top;
        var child = $(this).parent("li").offset().top;
        $(".ds_m-terms-tab").css({"top": child - parent});
    });



   
  AOS.init({
      duration: 1500,
      once: true,
  })
  var owl = $("#banner").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true, 
    dots: true,
    dotsContainer: '#carousel-custom-dots',
    nav: true,
    loop: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true" style="font-size:40px;"></i>', '<i class="fa fa-angle-right" aria-hidden="true" style="font-size:40px;"></i>'],
    responsiveClass: true,
    startPosition: randomPosition()
});
  $('.owl-dot').click(function(){owl.trigger('to.owl.carousel', [$(this).index(), 300]);});
 //Random index generator
 function randomPosition(){
    var r_hb = $('#carousel-custom-dots li').length;
    var randomize = null;
    randomize=1
}
var owl = $(".about-slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true, 
    dots: true,
    dotsContainer: '.about-dots',
    nav: true,
    loop: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true" style="font-size:40px;"></i>', '<i class="fa fa-angle-right" aria-hidden="true" style="font-size:40px;"></i>'],
    responsiveClass: true,

    startPosition: randomPosition()
});
$('.owl-dot').click(function(){owl.trigger('to.owl.carousel', [$(this).index(), 300]);});
 //Random index generator
 function randomPosition(){
    var r_hb = $('#carousel-custom-dots li').length;
    var randomize = null;
    randomize=1
}
var play = $('.play-1');
play.owlCarousel({
    autoplay: false,
    items: 1,
    autoplayTimeout: 5000,
    autoplaySpeed: 1200,
    smartSpeed: 1500,
    slideSpeed: 300,
    paginationSpeed: 500,
    singleItem: true,
    navigation: false,
    dots: false,
    loop: true,
    responsiveClass: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    mouseDrag: false,
    touchDrag: false,
});
var owl = $(".play-2").owlCarousel({
    navigation : false,
    slideSpeed : 500,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    singleItem: true,
    autoPlay : false,
    items:5,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    navigation: false,
    center:true,
    loop:true,
    autoWidth:false,
    autoHeight:false,
    autoWidthClass: 'owl-width',
    autoHeightClass: 'owl-height',
    responsive:{
        0:{
            items:2,
        },
        1180:{

            items:2,
        },
        1200:{
            items:5,

        }
    },
});
var owl = $('.play-2');
owl.owlCarousel();
$('.am-next').click(function() {
    owl.trigger('next.owl.carousel');
    console.log(owl);
})
$('.am-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
owl.on('changed.owl.carousel', function(event) {        
 var index = event.page.index;
 console.log(index);
 $('.play-1').trigger('to.owl.carousel', [index, 500, true]);
})
$(document).ready(function(){
  $(".flip").click(function(){
   $('.panel').slideDown("slow");
});
  $(".close").click(function(){
   $(".panel").slideUp("slow");
});
  $(".flip1").click(function(){
   $('.panel1').slideDown("slow");
});
  $(".close").click(function(){
   $(".panel1").slideUp("slow");
});
  $("ul.nav-tabs a").click(function (e) {
   e.preventDefault();  
   $(this).tab('show');
});
});


// var loc = window.location.href;
// $('.navbar ul li a').each(function () {
//  var status = loc.indexOf($(this).attr('href'));
//  $(this).closest('li a').removeClass('my-active');
//    // console.log(status);
//    if ( -1 != status ) {
//       console.log(status);
//       $(this).closest('li a').addClass('my-active');
//   }
// });

var w_hgt   = $(window).height();
  var h_hgt   = $('nav').height();
  var f_hgt   = $('footer').height();
  var c_height  = w_hgt - (h_hgt+f_hgt);
  var mainhe =  $('hgtadjust').css({'max-height':c_height+'px'});
// alert(c_height);
//map code
var schoolurl   = window.location.href;
var school      = schoolurl.split('/');
  // var loc = window.location.href;    var loc = window.location.pathname.split( '/' );    var newpath = loc[3];
  
  if(school[school.length-1] =='schools'){
    // alert(school);
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 4.6,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            center: new google.maps.LatLng(20.5937, 78.9629),
            gestureHandling: 'cooperative',
            styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
                ]
            }
            ]
        };
        var mapElement = document.getElementById('locatus-map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.8315,77.0266),
            map: map,
            title: 'Agartala',
            icon: 'img/DPWF_final-41.png'
  
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(27.1767, 78.0081),
            map: map,
            title: 'Agra',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(26.4499, 74.6399),
            map: map,
            title: 'Ajmer',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.6854, 75.6143),
            map: map,
            title: 'Betma',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.6013, 75.3025),
            map: map,
            title: 'Dhar',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(13.1770, 78.2020),
            map: map,
            title: 'Kolar',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.1786, 88.2461),
            map: map,
            title: 'Malda',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(18.8453,76.5198),
            map: map,
            title: 'Parli',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(9.9252, 78.1198),
            map: map,
            title: 'Madurai',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(17.4298, 78.6172),
            map: map,
            title: 'Narapally',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.8120, 70.8236),
            map: map,
            title: 'Morbi',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(19.0330, 73.0297),
            map: map,
            title: 'Navi Mumbai',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.0180, 76.7160),
            map: map,
            title: 'Ashta',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.2235, 73.7478),
            map: map,
            title: 'Aravali',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.5461902, 77.55621),
            map: map,
            title: 'Dadri Road',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.9623, 76.0508),
            map: map,
            title: 'Dewas',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(29.4438, 75.6703),
            map: map,
            title: 'Gorakhpur',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.1928, 76.6239),
            map: map,
            title: 'Rewari',
            icon: 'img/DPWF_final-41.png'
        });
        // var marker = new google.maps.Marker({
        //     position: new google.maps.LatLng(21.262051, 81.5490332),
        //     map: map,
        //     title: 'Raipur',
        //     icon: 'img/DPWF_final-41.png'
        // });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(31.4660, 75.4075),
            map: map,
            title: 'Subhanpur',
            icon: 'img/DPWF_final-41.png'
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.7739, 71.6673),
            map: map,
            title: 'Surendranagar',
            icon: 'img/DPWF_final-41.png'
        });


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(24.5373, 81.3042),
            map: map,
            title: 'Rewa',
            icon: 'img/DPWF_final-41.png'
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(21.2514, 81.6296),
            map: map,
            title: 'Raipur',
            icon: 'img/DPWF_final-41.png'
        });


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.7711, 73.3234),
            map: map,
            title: 'Pali',
            icon: 'img/DPWF_final-41.png'
        });


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(24.6257, 74.6810),
            map: map,
            title: 'Nimbahera',
            icon: 'img/DPWF_final-41.png'
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(26.1209, 85.3647),
            map: map,
            title: 'Muzaffarpur',
            icon: 'img/DPWF_final-41.png'
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(30.9010, 75.8573),
            map: map,
            title: 'Ludhiana',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(27.7046, 76.2013),
            map: map,
            title: 'Kotputli',
            icon: 'img/DPWF_final-41.png'
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.4167, 86.1294),
            map: map,
            title: 'Begusarai',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(17.5185, 78.3038),
            map: map,
            title: 'Beeramguda',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(20.937424, 77.779549),
            map: map,
            title: 'Amravati',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(27.560932, 76.625015),
            map: map,
            title: 'Alwar',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(30.6050, 74.2558),
            map: map,
            title: 'Jalalabad',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(27.9392, 77.8424),
            map: map,
            title: 'Khair',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(30.6425, 76.8173),
            map: map,
            title: 'Zirakpur',
            icon: 'img/DPWF_final-41.png'
        });


        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.5251, 77.8081),
            map: map,
            title: 'Vidisha',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.7076, 77.6565),
            map: map,
            title: 'Pilkhuwa',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.5941, 85.1376),
            map: map,
            title: 'Patna',
            icon: 'img/DPWF_final-41.png'
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.5324, 77.4052),
            map: map,
            title: 'Noida Extn',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(22.9751, 88.4345),
            map: map,
            title: 'Kalyani',
            icon: 'img/DPWF_final-41.png'
        });
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(26.2183, 78.1828),
            map: map,
            title: 'Gwalior',
            icon: 'img/DPWF_final-41.png'
        });var marker = new google.maps.Marker({
            position: new google.maps.LatLng(28.4744, 77.5040),
            map: map,
            title: 'Greater Noida',
            icon: 'img/DPWF_final-41.png'
        });
        

    }
}


  
     $('input[type="radio"]').click(function(){
        if($(this).attr('class') == 'describe') {
             $(this).parent().parent().next().show();
         }
        else{
             $('.display').hide();   

         }
    });
    

    $(".btn-refresh").click(function(){
  $.ajax({
     type:'GET',
     url:'https://www.delhipublicworldfoundation.org/refresh_captcha',
     success:function(data){
        $(".captcha span").html(data.captcha);
        $(".captcha span img").css({"width": "200px", "height": "50px;"});
     }
  });
});


});




$(document).ready(function(){

    function autoTabs() {
        var pageUrl = window.location.href;
        var split = pageUrl.split("#");
        var id = split[split.length - 1];        

        if(document.getElementById(id)) document.getElementById(id).click();

    };


    if(document.getElementById("ds_auto-tabs")) autoTabs();    
   

  

});



