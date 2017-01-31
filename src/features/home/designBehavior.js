import ScrollReveal from 'scrollreveal';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'magnific-popup/dist/magnific-popup.css';
export default function designBehavior() {

	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
    	target: '.navbar-fixed-top',
    	offset: 15
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
       console.log('entra');
    	$('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
    	offset: {
    		top: 100
    	}
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
    	duration: 600,
    	scale: 0.3,
    	distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
    	duration: 1000,
    	delay: 200
    });
    sr.reveal('.sr-contact', {
    	duration: 600,
    	scale: 0.3,
    	distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
    	delegate: 'a',
    	type: 'image',
    	tLoading: 'Loading image #%curr%...',
    	mainClass: 'mfp-img-mobile',
    	gallery: {
    		enabled: true,
    		navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
        	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
};
