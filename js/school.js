
$(document).ready(function(){
	var width   = $(window).width();
	if(width < 768) {
		$(".member").click(function(){
			$(this).children('.answer1').slideToggle();
			$(this).siblings('.member').children('.answer1').hide();
		});

	}
	else{
		$(".member").click(function(){
			var cl = this.id;
			$('.'+cl).slideToggle('slow');
			$('.'+cl).siblings('.answer').hide();  
			$('.'+cl).parent().siblings('.togg').children('.answer').hide();
		});   
	}
});
var owl = $("#banner-slider-demo-1").owlCarousel({
	navigation : false,
	slideSpeed : 500,
	paginationSpeed : 800,
	margin:30,
	rewindSpeed : 1000,
	singleItem: true,
	autoPlay : false,
	
	responsive:{
		0:{
			items:1,
			 // dots: false,
		},
		600:{

			items:3,
		},
		1000:{
			items:3,
		}
	},

});
var owl = $("#banner-slider-demo-2").owlCarousel({
	navigation : false,
	slideSpeed : 500,
	paginationSpeed : 800,
	margin:30,
	rewindSpeed : 1000,
	singleItem: true,
	autoPlay : false,
	responsive:{
		0:{
			items:1,
			  dots: false,
			  margin:0,
		},
		600:{
			items:3,
		},
		1000:{
			items:3,
		}
	},
});
var owl = $("#banner-slider-demo-3").owlCarousel({
	navigation : false,
	slideSpeed : 500,
	paginationSpeed : 800,
	margin:30,
	rewindSpeed : 1000,
	singleItem: true,
	autoPlay : false,
	
	responsive:{
		0:{
			items:1,
			  dots: false,
		},
		600:{

			items:3,
		},
		1000:{
			items:3,
		}
	},

});
var owl = $("#banner-slider-demo-4").owlCarousel({
	navigation : false,
	slideSpeed : 500,
	paginationSpeed : 800,
	margin:30,
	rewindSpeed : 1000,
	singleItem: true,
	autoPlay : false,
	
	responsive:{
		0:{
			items:2,
			  dots: false,
		},
		600:{

			items:3,
		},
		1000:{
			items:3,

		}
	},

});
var owl = $("#banner-slider-demo-5").owlCarousel({
	navigation : false,
	slideSpeed : 500,
	paginationSpeed : 800,
	margin:30,
	rewindSpeed : 1000,
	singleItem: true,
	autoPlay : false,
	
	responsive:{
		0:{
			items:2,
			  dots: false,
		},
		600:{

			items:3,
		},
		1000:{
			items:3,

		}
	},
});
var owl = $("#owl_slider").owlCarousel({
	navigation : false,
	slideSpeed : 500,
	paginationSpeed : 800,
	margin:5,
	rewindSpeed : 1000,
	singleItem: true,
	autoPlay : false,
	items:1,
	nav:true,
	navText: ['<i class="fa fa-angle-left" aria-hidden="true" style="font-size:40px;"></i>', '<i class="fa fa-angle-right" aria-hidden="true" style="font-size:40px;"></i>']

})
