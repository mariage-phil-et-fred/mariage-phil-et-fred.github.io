;(function () {

	'use strict';

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 1, 'easeInOutExpo' );
					});

				}, 200);

			}

		} , { offset: '85%' } );
	};


	// Loading page
	var loaderPage = function() {
		$(".mariage-loader").fadeOut("slow");
		$('.image-link').magnificPopup({type:'image'});
	};

	var counterWayPoint = function() {
		if ($('#mariage-counter').length > 0 ) {
			$('#mariage-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 100);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

		$('#mariage-gallery-list').magnificPopup({
		  delegate: 'a', // child items selector, by clicking on it popup will open
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		  // other options
		});
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	$(function(){
		parallax();
		contentWayPoint();
		loaderPage();
		counterWayPoint();
	});


}());