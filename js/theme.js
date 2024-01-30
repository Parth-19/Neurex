jQuery(document).ready(function($) {
	'use strict';

	// -- START: Theme Preview Only JS -- //

	var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};

	var blogStyle = getUrlParameter('style'); // mag, stretch, classic
	var blogMode = getUrlParameter('mode'); // light, dark
	var blogSidebar = getUrlParameter('sidebar'); // left, right, none

	// Blog Dark Mode or not

	if ( blogMode == 'dark' ) {
		$( 'body' ).addClass( 'pa-dark-mode' );
		$( '.dark-sensitive' ).addClass( 'pa-dark-mode' );
		// Rucno upisujem funkciju darkReactors (jer ce se ovo brisati u delivery-ju)
		$( '.pa-dark-reactor' ).each(function() {
			var $back_color = $( this ).css( 'background-color' );
			var $dark_color = $( this ).data( 'dark-reactor-color' );
			$( this ).css( 'background-color', $dark_color );
			$( this ).data( 'dark-reactor-color', $back_color );
		});
	}
	if ( blogMode == 'light' ) {
		$( 'body' ).removeClass( 'pa-dark-mode' );
		$( '.dark-sensitive' ).removeClass( 'pa-dark-mode' );
	}

	// Blog Style 

	if ( blogStyle == 'mag' ) {
		$( 'span.pa-feed-styler.pa-fs-magazine' ).addClass( 'active' );
		$( 'span.pa-feed-styler.pa-fs-magazine' ).siblings().removeClass( 'active' );
		$( 'section[class*="pa-blog-style-v"]' ).removeClass (function ( index, css ) {
			return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
		});
		$( '.pa-blog-content' ).addClass( 'pa-blog-style-v1-magazine' );
	}

	if ( blogStyle == 'stretch' ) {
		$( 'span.pa-feed-styler.pa-fs-stretched' ).addClass( 'active' );
		$( 'span.pa-feed-styler.pa-fs-stretched' ).siblings().removeClass( 'active' );
		$( 'section[class*="pa-blog-style-v"]' ).removeClass (function ( index, css ) {
			return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
		});
		$( '.pa-blog-content' ).addClass( 'pa-blog-style-v2-stretched' );
	}

	if ( blogStyle == 'classic' ) {
		$( 'span.pa-feed-styler.pa-fs-classic' ).addClass( 'active' );
		$( 'span.pa-feed-styler.pa-fs-classic' ).siblings().removeClass( 'active' );
		$( 'section[class*="pa-blog-style-v"]' ).removeClass (function ( index, css ) {
			return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join(' ');
		});
		$( '.pa-blog-content' ).addClass( 'pa-blog-style-v3-classic' );
	}

	// Blog Sidebar

	if ( blogSidebar == 'left' ) {
		$( '.pa-feed-col' ).addClass( 'order-md-2' );
	}

	if ( blogSidebar == 'none' ) {
		$( 'aside' ).detach();
		$( '.pa-feed-col' ).removeClass( 'col-md-8' );
		$( '.pa-feed-col' ).removeClass( 'col-xl-9' );
		$( 'section.pa-blog-main-content' ).addClass( 'no_sidebar' );
	}

	/**
	 * Main menu anchor links, adjust according to homepage version
	 * 
	 * ORIGINAL: home-hero-image-light-demo
	 * Ones to change: 
	 *  home-video-light-demo 
	 *  home-hero-image-dark-demo 
	 *  home-video-dark-demo
	 */
	function fixMainMenuAnchorsBasedOnHomeVersion( $url ) {
		// if URL contains $url string
		if ( window.location.href.indexOf( $url ) > -1 ) {
			// find all links with homepage V1, which have a hash (#)
			$( 'a[href*="home-hero-image-light-demo/#"]' ).each(function(){
				// replace the url
				this.href = this.href.replace('home-hero-image-light-demo', $url);
			});
		}
	}
	// run once for each homepage version, other than V1
	fixMainMenuAnchorsBasedOnHomeVersion( 'home-video-light-demo' );
	fixMainMenuAnchorsBasedOnHomeVersion( 'home-hero-image-dark-demo' );
	fixMainMenuAnchorsBasedOnHomeVersion( 'home-video-dark-demo' );

	if ( $( 'body' ).hasClass( 'pa-page-is-homepage' ) ) {
		$( 'a[href*="home-hero-image-light-demo/#"]' ).each(function(){
			// replace the url
			this.href = this.href.replace('home-hero-image-light-demo/', '' );
		});
		$( 'a[href*="home-video-light-demo/#"]' ).each(function(){
			// replace the url
			this.href = this.href.replace('home-video-light-demo/', '' );
		});
		$( 'a[href*="home-hero-image-dark-demo/#"]' ).each(function(){
			// replace the url
			this.href = this.href.replace('home-hero-image-dark-demo/', '' );
		});
		$( 'a[href*="home-video-dark-demo/#"]' ).each(function(){
			// replace the url
			this.href = this.href.replace('home-video-dark-demo/', '' );
		});
	}

	// -- END: Theme Preview Only JS -- //
	

	/**
	 * Now show mobile menu stuff
	 * Hidden in particle-priority.css
	 */
	setTimeout(function(){
		$( 'nav' ).css( 'opacity', '1' );
		$( '.pa-mobile-main-logo' ).css( 'opacity', '1' );
		$( '.pa-menu-protector' ).css( 'opacity', '1' );
	}, 1000);
	

	/**
	 * Reusable function that assigns classes to an element based on
	 * its own width so it could be used as css media query with css
	 * element as the base.
	 * 
	 * also known as skilltechDynamicThumbnails()
	 * 
	 * For each element you wish to run it, it should be run on
	 * document ready and again on window resize function
	 * 
	 * class names meaning:
	 * mn = min-width
	 * mx = max-width
	 * number = pixels
	 */
	function skilltechDynamicWidth( $wrapper_class ) {

		"use strict";

		var $wrap_class = $wrapper_class;
		var $responsiveElementWidth = $($wrap_class).outerWidth();

		if ( $responsiveElementWidth >= 3505 ) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-3505'); // 8 cols
		}
		else if (( $responsiveElementWidth >= 3327 ) && ( $responsiveElementWidth <= 3504 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-3327-mx-3504'); // 6 cols
		}
		else if (( $responsiveElementWidth >= 2921 ) && ( $responsiveElementWidth <= 3326 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-2921-mx-3326'); // 6 cols
		}
		else if (( $responsiveElementWidth >= 2561 ) && ( $responsiveElementWidth <= 2920 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-2561-mx-2920'); // 5 cols
		}
		else if (( $responsiveElementWidth >= 2337 ) && ( $responsiveElementWidth <= 2560 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-2337-mx-2560'); // 4 cols
		}
		else if (( $responsiveElementWidth >= 1921 ) && ( $responsiveElementWidth <= 2336 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1921-mx-2336'); // 4 cols
		}
		else if (( $responsiveElementWidth >= 1600 ) && ( $responsiveElementWidth <= 1920 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1600-mx-1920'); // 4 cols
		}
		else if (( $responsiveElementWidth >= 1461 ) && ( $responsiveElementWidth <= 1599 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1461-mx-1599'); // 4 cols
		}
		else if (( $responsiveElementWidth >= 1216 ) && ( $responsiveElementWidth <= 1460 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1216-mx-1460');
		}
		else if (( $responsiveElementWidth >= 1200 ) && ( $responsiveElementWidth <= 1215 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1200-mx-1215');
		}
		else if (( $responsiveElementWidth >= 1179 ) && ( $responsiveElementWidth <= 1199 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1179-mx-1199');
		}
		else if (( $responsiveElementWidth >= 1125 ) && ( $responsiveElementWidth <= 1178 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-1125-mx-1178');
		}
		else if (( $responsiveElementWidth >= 992 ) && ( $responsiveElementWidth <= 1124 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-992-mx-1124');
		}
		else if (( $responsiveElementWidth >= 895 ) && ( $responsiveElementWidth <= 991 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-895-mx-991');
		}
		else if (( $responsiveElementWidth >= 836 ) && ( $responsiveElementWidth <= 894 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-836-mx-894');
		}
		else if (( $responsiveElementWidth >= 768 ) && ( $responsiveElementWidth <= 835 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-768-mx-835');
		}
		else if (( $responsiveElementWidth >= 683 ) && ( $responsiveElementWidth <= 767 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-683-mx-767');
		}
		else if (( $responsiveElementWidth >= 616 ) && ( $responsiveElementWidth <= 682 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-616-mx-682');
		}
		else if (( $responsiveElementWidth >= 601 ) && ( $responsiveElementWidth <= 615 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-601-mx-615');
		}
		else if (( $responsiveElementWidth >= 576 ) && ( $responsiveElementWidth <= 600 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-576-mx-600');
		}
		else if (( $responsiveElementWidth >= 501 ) && ( $responsiveElementWidth <= 575 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-501-mx-575');
		}
		else if (( $responsiveElementWidth >= 481 ) && ( $responsiveElementWidth <= 500 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-481-mx-500');
		}
		else if (( $responsiveElementWidth >= 401 ) && ( $responsiveElementWidth <= 480 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-401-mx-480');
		}
		else if (( $responsiveElementWidth >= 381 ) && ( $responsiveElementWidth <= 400 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-381-mx-400');
		}
		else if (( $responsiveElementWidth >= 326 ) && ( $responsiveElementWidth <= 380 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-326-mx-380');
		}
		else if (( $responsiveElementWidth >= 301 ) && ( $responsiveElementWidth <= 325 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-301-mx-325');
		} 
		else if (( $responsiveElementWidth >= 0 ) && ( $responsiveElementWidth <= 300 )) {
			$($wrap_class).removeClass (function (index, className) {
				return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
			});
			$($wrap_class).addClass('dw-mn-0-mx-300');
		} else {

		}
	}

	// -- START: Page Transitions and Preloader -- //

	// Page Transitions - Part 1
	function particleRemovePageTransitionElements() {
		setTimeout(function(){
			$( '.pa-overlay' ).detach();
		}, 340);
		setTimeout(function(){
			$( '.pa-page-transition-1' ).removeClass( 'is-active' );
		}, 420);

		// Page Preloader - Part 2
		setTimeout(function(){
			$( '.warper' ).addClass( 'is-inactive' );
			$( '.pa-loader' ).addClass( 'is-inactive' );
		}, 3000);
		setTimeout(function(){
			$( '.pa-loader' ).detach();
		}, 4410);
	}
	particleRemovePageTransitionElements();

	// Page Transitions - Part 2
	window.onload = () => {

		// if page transitions HTML exists
		if( $( '.pa-page-transition' ).length > 0 ) {

			// On Load
			// const anchors = document.querySelectorAll( 'a:not([href^="#"])' );
			const anchors = document.querySelectorAll( 'a:not([href^="#"]):not([target="_blank"])' );

			// Wait 350ms AND
			// Make .pa-page-transitions (black overlay) INVISIBLE
			const transition_el = document.querySelector( '.pa-page-transition' );
			setTimeout(() => {
				$( '.pa-page-transition' ).removeClass( 'is-active' );
			}, 350);

			for ( let i = 0; i < anchors.length; i++ ) {
				const anchor = anchors[i];

				// On normal link click
				anchor.addEventListener( 'click', e => {
					e.preventDefault();

					var target = anchor.href;
					var split_target = target.split( '#' );
					var hashless_target = split_target[0];

					var current_url = window.location.href;
					var split_url = current_url.split( '#' );
					var hashless_url = split_url[0];

					if ( hashless_target !== hashless_url ) { // Don't apply page transition on the same page

						// Make .pa-page-transition (black overlay) visible
						transition_el.classList.add( 'is-active' );
						// $( transition_el ).addClass( 'is-active' );

						// Wait for .pa-page-transition.is-active transition and update URL
						setTimeout(function(){ // changing setInterval (caused issues) to setTimeout
							window.location.href = target;
						}, 500); // time equal to .pa-page-transition-1.is-active {transition: all EQUALms ease 0s;}

					} else { // Same page - do normal URL update
						window.location.href = target;
					}
				});
			}

		}
	};

	// /**
	//  * Page Transitions - Part 3
	//  * If back button has been pressed
	//  */
	// if (window.history && window.history.pushState) {

	// 	window.history.pushState('forward', null, './#forward');

	// 	$(window).on('popstate', function() {
	// 		particleRemovePageTransitionElements();
	// 	});

	// }

	// -- END: Page Transitions and Preloader -- //


	/** 
	 * Smooth Anchor Scrolling
	 * https://css-tricks.com/snippets/jquery/smooth-scrolling/
	 */

	// Select all links with hashes BUT NOT the links that don't actually link to anything
	$( 'a[href*="#"]' ).not( '[href="#"]' ).not( '[href="#0"]' ).on( 'click', function() {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $( this.hash );
			target = target.length ? target : $( '[name=' + this.hash.slice(1) + ']' );

			const anchors = document.querySelectorAll( 'a:not([href^="#"]):not([target="_blank"])' );

			var targethref = this.href;
			var split_targethref = targethref.split( '#' );
			var hashless_targethref = split_targethref[0];

			var current_url = window.location.href;
			var split_url = current_url.split( '#' );
			var hashless_url = split_url[0];

			// Does a scroll target exist?
			if ( target.length ) {
				// Only prevent default if animation is actually gonna happen
				if ( hashless_targethref === hashless_url ) {
					// Only prevent default (run) if the target is on the same page
					event.preventDefault();
					$( 'html, body' ).animate({
						scrollTop: target.offset().top
					}, 800, 'easeInOutQuad',
					function(){
						// Callback after animation
						// Must change focus!
						var $target = $( target );
						$target.focus();
						if ( $target.is( ':focus' ) ) { // Checking if the target was focused
							return false;
						} else {
							$target.attr( 'tabindex', '-1' ); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					});
				}
					
			}
		}
	});

	/**
	 * Desktop Menu Dropdown V2.0
	 */
	// When clicked on 'li' element (so :before dropdown icon would also work)
	$( '.navbar-nav > li > ul > li.menu-item-has-children' ).on( 'click', function(e) {
		if (e.target !== this) {
			return;
		} else {
			event.preventDefault();
			$( this ).siblings().removeClass( 'pa-expand-children' );
			$( this ).toggleClass( 'pa-expand-children' );
		}
	});
	// When clicked on 'a' element
	$( '.navbar-nav > li > ul > li.menu-item-has-children > a' ).on( 'click', function() {
		event.preventDefault();
		$( this ).parent().siblings().removeClass( 'pa-expand-children' );
		$( this ).parent().toggleClass( 'pa-expand-children' );
	});

	/**
	 * Initiate Off-canvas Menu JS only if Main Menu is assigned
	 * Part 1/2
	 */

	var isMainMenuAssigned = particleDynamics.isMainMenuAssigned;

	if ( isMainMenuAssigned == 'yes' ) {

		/**
		 * Initiate Off Canvas Menu
		 * aka Mobile Menu
		 * 
		 * Options available at: https://github.com/somewebmedia/hc-offcanvas-nav#options
		 * But options should not be changed
		 * 
		 * Note: The disableAt option, it specifies when mobile menu changes to desktop.
		 * This option is matched with the value in main theme CSS file (particle-theme.css).
		 */

		$( '#main-nav' ).hcOffcanvasNav({
			disableAt: 1410,
			insertClose: false,
			insertBack: true,
			labelBack: 'Back', // what it says on the back button
			levelTitleAsBack: false,
			pushContent: '.pushable-content', // CSS selector, in this case <section>
			position: 'right',
			swipeGestures: true,
			levelSpacing: 17, // in pixels
		});

		/**
		 * Fix for Off Canvas Menu when browser is resized
		 * with mobile menu opened (auto-close) PART1/2
		 */

		var $nav = $( '#main-nav' ).hcOffcanvasNav();
		var Nav = $nav.data( 'hcOffcanvasNav' );

	}

	/**
	 * Dark Mode Switch
	 */

	function darkReactors() {
		$( '.pa-dark-reactor' ).each(function() {
			var $back_color = $( this ).css( 'background-color' );
			var $dark_color = $( this ).data( 'dark-reactor-color' );
			$( this ).css( 'background-color', $dark_color );
			$( this ).data( 'dark-reactor-color', $back_color );
		});
	}

	$( 'span.lm-button' ).on( 'click', function() {
		event.preventDefault();
		$( 'body' ).toggleClass( 'pa-dark-mode' );
		$( '.dark-sensitive' ).toggleClass( 'pa-dark-mode' );
		darkReactors();
	});

	/**
	 * Fix alignfull issues when sidebar is present
	 * PART 1/3 (part 3 in particle-theme.css)
	 */
	function alignFullFix() {
		$( ':not(.no_sidebar) .alignfull' ).each( function() {
			var element = $( this );
			$( element ).css( 'margin-left', '0' ); // clear it first!
			var position = element.offset();
			if ( position.left > 0 ) {
				$( element ).css( 'margin-left', '-' + position.left + 'px' );
			}
			if ( position.left < 0 ) {
				$( element ).css( 'margin-left', position.left + 'px' );
			}
		});
	}
	alignFullFix();

	/**
	 * Contact form 7 red asterisk *
	 */

	jQuery( '.wpcf7 label' ).each( function() {
		jQuery( this ).html( jQuery( this ).html().replace( '*', '<span style="color:red;">*</span>' ));
	});


	/**
	 * Contact form 7 - restructure HTML
	 */

	function restructureCF7HTML() {
		$( '.wpcf7-form > p > label' ).wrap( '<div class="form-group"></div>' );
		$( '.wpcf7-form > p > .form-group' ).unwrap();
		jQuery( '.wpcf7-form > .form-group > label > span' ).each( function() {
			var $el = $( this );
			$($el).parent( 'label' ).parent( '.form-group' ).append($el);
		});
		$( '.wpcf7-form input[type="submit"]' ).addClass( 'hvr-sweep-to-right' );
	}
	restructureCF7HTML();


	/**
	 * Hide widget title if magic word is used
	 */

	$( '.widget_title:contains("!hideme")' ).detach();


	/**
	 * Sidebar menu
	 */

	// Add dropdown icon to menus with sub-items

	var menu_link = $( '.widget_nav_menu .menu .menu-item-has-children > a' );
	var sub_menu = $( '.widget_nav_menu .menu > li > .sub-menu' );
	$( menu_link ).prepend( '<i class="fa fa-chevron-down pa-sidebarmenu-trigger pa-standardwidget"></i>' );

	// same for elementor version
	var elementor_menu_link = $( '.elementor-widget-wp-widget-nav_menu .menu .menu-item-has-children > a' );
	var elementor_sub_menu = $( '.elementor-widget-wp-widget-nav_menu .menu > li > .sub-menu' );
	$( elementor_menu_link ).prepend( '<i class="fa fa-chevron-down pa-sidebarmenu-trigger pa-elementorwidget"></i>' );

	// control sub-menu flyouts
	$( '.pa-standardwidget' ).on( 'click', function() {
		event.preventDefault();
		if ( !$( this ).parent().hasClass( 'active' ) ) {
			sub_menu.slideUp( 300, 'swing' );
			$( this ).parent().next().stop( true, true ).slideToggle( 300 );
			menu_link.removeClass( 'active' );
			$( this ).parent().addClass( 'active' );
		} else {
			sub_menu.slideUp( 300 );
			menu_link.removeClass( 'active' );
		}
	});

	// control sub-menu flyouts for elementor version
	$( '.pa-elementorwidget' ).on( 'click', function() {
		event.preventDefault();
		if ( !$( this ).parent().hasClass( 'active' ) ) {
			elementor_sub_menu.slideUp( 300, 'swing' );
			$( this ).parent().next().stop( true, true ).slideToggle( 300 );
			elementor_menu_link.removeClass( 'active' );
			$( this ).parent().addClass( 'active' );
		} else {
			elementor_sub_menu.slideUp( 300 );
			elementor_menu_link.removeClass( 'active' );
		}
	});


	/**
	 * Configue WOW.js and animate.css elements (animations)
	 */

	// Before initialization
	$( '.counterskills').addClass( 'wow fadeIn' );
	$( '.fadeInDelay00Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInDelay03Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInDelay04Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInDelay05Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInDelay06Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInDelay10Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInDelay15Duration10' ).addClass( 'wow fadeIn' );
	$( '.fadeInLeftDelay03Duration10' ).addClass( 'wow fadeInLeft' );
	$( '.fadeInLeftDelay05Duration10' ).addClass( 'wow fadeInLeft' );
	$( '.fadeInRightDelay05Duration10' ).addClass( 'wow fadeInRight' );
	$( '.fadeInRightDelay11Duration10' ).addClass( 'wow fadeInRight' );
	$( '.fadeInRight--Custom' ).addClass( 'wow fadeInRightCustom' );
	$( '.fadeInLeft--Custom' ).addClass( 'wow fadeInLeftCustom' );
	$( '.progressBar' ).addClass( 'wow progressBar' );
	$( '.slideup' ).addClass( 'wow slideInUp' );
	$( '.slideUp' ).addClass( 'wow slideInUp' );
	$( '.slideDownDelay10Duration10' ).addClass( 'wow slideInDown' );
	$( '.slideDownDelay07Duration10' ).addClass( 'wow slideInDown' );
	$( '.slideinRightDelay03Duration10' ).addClass( 'wow slideInRight' );
	$( '.bounceDelay35Duration12' ).addClass( 'wow bounce' );

	// Innitiate WOW.js for animations
	new WOW().init();

	// After initialization
	$( '.counterskills' ).attr({'data-wow-delay':'1.0s'});
	$( '.fadeInDelay00Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.0s'});
	$( '.fadeInDelay03Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$( '.fadeInDelay04Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.4s'});
	$( '.fadeInDelay05Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$( '.fadeInDelay06Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.6s'});
	$( '.fadeInDelay10Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'1.0s'});
	$( '.fadeInDelay15Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'1.5s'});
	$( '.fadeInLeftDelay03Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$( '.fadeInLeftDelay05Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$( '.fadeInRightDelay05Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.5s'});
	$( '.fadeInRightDelay11Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'1.1s'});
	$( '.fadeInRight--Custom, .fadeInLeft--Custom' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.7s'});
	$( '.fadeInRightDelay11Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'1.1s'});
	$( '.slideup' ).attr({'data-wow-duration':'0.9s'});
	$( '.slideDownDelay10Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'1.0s'});
	$( '.slideDownDelay07Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.7s'});
	$( '.slideinRightDelay03Duration10' ).attr({'data-wow-duration':'1.0s','data-wow-delay':'0.3s'});
	$( '.bounceDelay35Duration12' ).attr({'data-wow-duration':'1.2s','data-wow-delay':'3.5s'});


	/**
	 * Back to top button
	 */

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if ( scroll >= 1200 ) {
			$( '.pa-back-to-top-wrap' ).addClass( 'pa-backtotop-visible' );
		} else {
			$( '.pa-back-to-top-wrap' ).removeClass( 'pa-backtotop-visible' );
		}
	});


	/**
	 * Widget - Categories - Insert "bullet" icon
	 */

	$( '.widget_categories .cat-item' ).prepend( '<i class="fa fa-play"></i>' );

	/**
	 * Blog Page custom and dynamic JS
	 */

	var isBlog = particleDynamics.isBlog;

	if ( isBlog == 'yes' ) {

		/**
		 * Initialize typed.js on Blog Page
		 */

		var useTyped = particleDynamics.useTyped;
		var blogTitle1 = particleDynamics.blogTitle1;
		var blogTitle2 = particleDynamics.blogTitle2;
		var blogTitle3 = particleDynamics.blogTitle3;

		if ( useTyped == '1' ) {

			// Initiate typed.js text effect (done custom for each typed text effect)
			$(".pa-blog-hero-typed > .animated-text-effect").typed({
				strings: [blogTitle1, blogTitle2, blogTitle3],
				contentType: "text", 
				typeSpeed: 30, 
				loop: true, 
				backDelay: 1200, 
				showCursor: true, 
				cursorChar: "|" 
			});

			// fix for doubled cursor
			$('.pa-blog-hero-typed span.typed-cursor:first-child').css('display', 'none');

		}
			

		/**
		 * BLOG - Feed Styler UI (changes feed layout)
		 */

		$( 'span.pa-feed-styler' ).on( 'click', function() {
			event.preventDefault();
			$( this ).siblings().removeClass( 'active' );
			$( this ).toggleClass( 'active' );
			var ovo = $( this );
			if ( $( '.pa-blog-featured' ).length) {
				$( '.pa-blog-featured' ).addClass( 'temp-hidden' );
				setTimeout(function(){ // 500
					$( '.pa-articles-wrapper' ).css( 'transform', 'translateX(100%)' );
					setTimeout(function(){
						$( 'section[class*="pa-blog-style-v"]' ).removeClass (function ( index, css ) {
							return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join( ' ' );
						});
						if ( $(ovo).hasClass( 'pa-fs-magazine' ) ) {
							$( '.pa-blog-content' ).addClass( 'pa-blog-style-v1-magazine' );
						}
						if ( $(ovo).hasClass( 'pa-fs-stretched' ) ) {
							$( '.pa-blog-content' ).addClass( 'pa-blog-style-v2-stretched' );
						}
						if ( $(ovo).hasClass( 'pa-fs-classic' ) ) {
							$( '.pa-blog-content' ).addClass( 'pa-blog-style-v3-classic' );
						}
						$( '.pa-articles-wrapper' ).css( 'transition', 'all 0s linear 0s' );
						$( '.pa-articles-wrapper' ).css( 'opacity', '0' );
						$( '.pa-articles-wrapper' ).css( 'transform', 'translateX(-100%)' );
						$( '.pa-articles-wrapper' ).css( 'opacity', '1' );

						setTimeout(function(){
							$( '.pa-articles-wrapper' ).css( 'transition', 'all 0.3s ease 0s' );
							$( '.pa-articles-wrapper' ).css( 'transform', 'translateX(0)' );
						}, 15);
					}, 300);
					setTimeout(function(){
						$( '.pa-blog-featured' ).removeClass( 'temp-hidden' );
					}, 850);
				}, 500);
			} else {
				$( this ).siblings().removeClass( 'active' );
				$( this ).toggleClass( 'active' );
				$( '.pa-articles-wrapper' ).css( 'transform', 'translateX(100%)' );
				setTimeout(function(){
					$( 'section[class*="pa-blog-style-v"]' ).removeClass (function ( index, css ) {
						return (css.match (/(^|\s)pa-blog-style-v\S+/g) || []).join( ' ' );
					});
					if ( $(ovo).hasClass( 'pa-fs-magazine' ) ) {
						$( '.pa-blog-content' ).addClass( 'pa-blog-style-v1-magazine' );
					}
					if ( $(ovo).hasClass( 'pa-fs-stretched' ) ) {
						$( '.pa-blog-content' ).addClass( 'pa-blog-style-v2-stretched' );
					}
					if ( $(ovo).hasClass( 'pa-fs-classic' ) ) {
						$( '.pa-blog-content' ).addClass( 'pa-blog-style-v3-classic' );
					}
					$( '.pa-articles-wrapper' ).css( 'transition', 'all 0s linear 0s' );
					$( '.pa-articles-wrapper' ).css( 'opacity', '0' );
					$( '.pa-articles-wrapper' ).css( 'transform', 'translateX(-100%)' );
					$( '.pa-articles-wrapper' ).css( 'opacity', '1' );

					setTimeout(function(){
						$( '.pa-articles-wrapper' ).css( 'transition', 'all 0.3s ease 0s' );
						$( '.pa-articles-wrapper' ).css( 'transform', 'translateX(0)' );
					}, 15);
				}, 300);
			}
		});

	}

	/**
	 * Post Page custom and dynamic JS
	 */

	var isSingularPost = particleDynamics.isSingularPost;

	if ( isSingularPost == 'yes' ) {

		/**
		 * Initiate Owl Carousel
		 * Related posts big version
		 */

		$( '.pa-big-related' ).owlCarousel({
			// autoWidth mustn't be true so that dotsEach could be used (to be able to shift by X items at once instad of one item at a time)
			// autoWidth:true,
			autoplay: true,
			autoplayTimeout: 15000,
			autoplayHoverPause: true,
			responsiveBaseElement:".pa-related-posts",
			navContainer:".owl-nav",
			responsive : {
				0:{ // from 0 and up
					items:1,
					nav:true,
					dots:false,
					slideBy: 1
				},
				460:{ // from 460 and up
					items:2,
					nav:true,
					margin: 3,
					dots:false,
					slideBy: 2
				},
				817:{ // from 817 and up
					items:3,
					// dotsEach: 3,
					nav: true,
					dots: false,
					margin: 3,
					slideBy: 3
				},
				1080:{ // from 1080 and up
					items: 4,
					nav: true,
					dots: false,
					margin: 3,
					slideBy: 4
				},
				1440:{ // from 1440 and up
					items: 6,
					nav: true,
					dots: false,
					margin: 3,
					slideBy: 6
				},
				1880:{ // from 1880 and up
					items: 8,
					nav: true,
					dots: false,
					margin: 3,
					slideBy: 8
				}
			}
		});

	}

	/**
	 * Post Page custom and dynamic JS
	 */

	var isPostTypeProject = particleDynamics.isPostTypeProject;

	if ( isPostTypeProject == 'yes' ) {

		/**
		 * Typed text effect - typed js
		 */
		var projTyped = $( '#typed-text-onproj' );
		var projTypeHead  = projTyped.data( 'first-heading' );
		$('#typed-text-onproj > .animated-text-effect').typed({
			strings: [projTypeHead],
			contentType: "text", 
			typeSpeed: 30, // def 0
			loop: false, 
			backDelay: 1200, 
			showCursor: true, 
			cursorChar: "|"
		});

		/**
		 * Particles effect - particles js
		 */
		particlesJS("particles-js", {
				"particles": {
				"number": {
					"value": 123,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "FFFFFF"
				},
				"shape": {
					"type": "circle",
					"stroke": {
						"width": 0,
						"color": "#FFFFFF"
					},
					"polygon": {
						"nb_sides": 5
					},
					"image": {
						"src": "img/github.svg",
						"width": 100,
						"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "FFFFFF",
					"opacity": 0.5,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 4,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
		    },
		    "interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"onclick": {
						"enable": true,
						"mode": "repulse"
					},
					"resize": true
				},
				"modes": {
					"grab": {
						"distance": 231,
						"line_linked": {
							"opacity": 1
						}
					},
					"bubble": {
						"distance": 231,
						"size": 12,
						"duration": 1.542946703372556,
						"opacity": 0.9,
						"speed": 3
					},
					"repulse": {
						"distance": 231,
						"duration": 0.4
					},
					"push": {
						"particles_nb": 4
					},
					"remove": {
						"particles_nb": 2
					}
				}
			},
			"retina_detect": true
		});

	}

	/**
	 * Launch dynamic widths JS for particular elements (PART1/2)
	 * ------
	 * Widget - Categories
	 * Fix jerky look when block is too narrow (PART1/3)
	 * See also in particle-theme.css
	 * ------
	 * Block - Categories
	 * Fix jerky look when block is too narrow (PART1/3)
	 * See also in particle-theme.css
	 * ------
	 * Block - RSS
	 * Fix jerky grid look when block is too narrow (PART1/3)
	 * See also in particle-theme.css
	 */	

	skilltechDynamicWidth( '.wp-block-categories, .is-grid.wp-block-rss, .widget_categories .pa-widget-inner > ul' );	

	/**
	 * Window Resize JS
	 */

	$(window).on( 'resize', function() {

		/**
		 * Initiate Off-canvas Menu JS only if Main Menu is assigned
		 * Part 2/2
		 */

		var isMainMenuAssigned = particleDynamics.isMainMenuAssigned;

		if ( isMainMenuAssigned == 'yes' ) {

			/**
			 * Fix for Off Canvas Menu when browser is resized
			 * with mobile menu opened (auto-close) PART2/2
			 */

			if ( $( 'body' ).hasClass( 'hc-nav-open' ) ) {
				Nav.close();
			}

		}

		/**
		 * Launch dynamic widths JS for particular elements (PART2/2)
		 * ------
		 * Widget - Categories
		 * Fix jerky look when block is too narrow (PART2/3)
		 * See also in particle-theme.css
		 * ------
		 * Block - Categories
		 * Fix jerky look when block is too narrow (PART2/3)
		 * See also in particle-theme.css
		 * ------
		 * Block - RSS
		 * Fix jerky grid look when block is too narrow (PART2/3)
		 * See also in particle-theme.css
		 */	

		skilltechDynamicWidth( '.wp-block-categories, .is-grid.wp-block-rss, .widget_categories .pa-widget-inner > ul' );

		/**
		 * Fix alignfull issues when sidebar is present
		 * PART 2/3 (part 3 in particle-theme.css)
		 */
		alignFullFix();

	});

	// -- END

});
