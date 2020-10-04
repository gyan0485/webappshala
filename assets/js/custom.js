$(document).ready(function(){

    // Back To Top Button
    var backButton = $('.back-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
          backButton.addClass('visible');
        } else {
          backButton.removeClass('visible');
        }
    });
    backButton.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });

    // AOS animation 
    AOS.init({
        easing: 'ease-in-out-back',
        duration: 1200,
        disable: false,
	});
	
	// Testimonials Slider
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		autoplay:true
	});
	$('.slider-nav').slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
			  	breakpoint: 576,
			  	settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
				breakpoint: 400,
			  	settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('#categories-slider3').multislider({
		continuous: true,
		duration: 4000
	});

});

// Partical JS
/* ---- particles.js config ---- */

particlesJS("particles-js", {
  	particles: {
		number: {
			value: 150,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: "#86b6d3"
		},
    	shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#86b6d3"
			},
			polygon: {
				nb_sides: 51
			},
			image: {
				src: "img/github.svg",
				width: 80,
				height: 80
			}
    	},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 5,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 100,
				size_min: 0.1,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#86b6d3",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
  	},
  	interactivity: {
    	detect_on: "canvas",
		events: {
			onhover: {
			enable: true,
			mode: "grab"
		},
		onclick: {
			enable: true,
			mode: "push"
		},
      	resize: true
    },
    modes: {
		grab: {
			distance: 140,
			line_linked: {
				opacity: 1
			}
		},
		bubble: {
			distance: 400,
			size: 60,
			duration: 2,
			opacity: 8,
			speed: 3
		},
		repulse: {
			distance: 200,
			duration: 0.4
		},
		push: {
			particles_nb: 4
		},
		remove: {
			particles_nb: 2
		}
    }
  	},
  	retina_detect: true
});

/* ---- stats.js config ---- */
