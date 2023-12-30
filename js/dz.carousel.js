/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	/* image-carousel function by = owl.carousel.js */
	jQuery('.blog-list-carousel').owlCarousel({
		loop:true,
		margin:25,
		nav:true,
		dots: false,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:2,
				margin:10
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			},
			1400:{
				items:5
			}
		}
	})
	
	/* image-carousel function by = owl.carousel.js */
	jQuery('.header-blog-carousel').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1,
				margin:10,
				center: true,
				stagePadding: 30
			},
			480:{
				items:1,
				margin:10,
				center: true,
				stagePadding: 30
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			},
			1400:{
				items:5
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.fashion-gallery').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:false,
		dots: false,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:3
			},
			480:{
				items:3
			},			
			991:{
				items:4
			},
			1000:{
				items:6
			}
		}
	})
	/* testimonial */
	jQuery('.testimonial-style-1').owlCarousel({
		loop:true,
		autoplay:false,
		margin:0,
		nav:true,
		dots: false,
		navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			991:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	jQuery('.testimonial-style-2').owlCarousel({
		loop:true,
		autoplay:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="flaticon-back"></i>', '<i class="flaticon-next"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			991:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})
	
	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel-dots').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots:true,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			1024:{
				items:2
			},
			1200:{
				items:2
			}
		}
	})
	
	jQuery('.team-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:false,
		dots:false,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.client-logo-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})	
	
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.tag-carousel').owlCarousel({
		margin:10,
		loop:true,
		autoWidth:true,
		nav:true,
		navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>']
	})
	
	
	
	
});
/* Document .ready END */