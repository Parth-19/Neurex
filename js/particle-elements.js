;(function($) {
    "use strict";

    /**
     * Portfolio
     */

    var paPortfolio = function( $scope, $ ) {

        var $_this = $scope.find( '.pa-portfolio-el-widget' );
        var $currentID          = '#'+$_this.attr( 'id' ),
            $autoplay           = $_this.data( 'autoplay' ),
            $autoplayDuration   = $_this.data( 'autoplay-duration' ),
            $autoPauseHover     = $_this.data( 'autoplay-pause-hover' ),
            $navigation         = $_this.data( 'navigation' ),
            $loop               = $_this.data( 'loop' ),
            $rewind             = $_this.data( 'rewind' ),
            $mouseDrag          = $_this.data( 'mouse-drag' ),
            $touchDrag          = $_this.data( 'touch-drag' );

        // For slick entrance animation
        $($currentID).closest('.elementor-widget-wrap').css('overflow', 'hidden');

        /**
         * Dynamic Widths, not needed when carousel is active
         */
        function skilltechDynamicThumbnails($wrapper_class) {

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
            else if (( $responsiveElementWidth >= 0 ) && ( $responsiveElementWidth <= 380 )) {
                $($wrap_class).removeClass (function (index, className) {
                    return (className.match (/(^|\s)dw-\S+/g) || []).join(' ');
                });
                $($wrap_class).addClass('dw-mn-0-mx-380');
            } else {

            }
        }
        skilltechDynamicThumbnails($currentID);
        $(window).resize(function() {
            skilltechDynamicThumbnails($currentID);
        });

        // Prepare vars for Owl Carousel

        var $ppAutoplay;
        var $ppAutoPauseHover;
        var $ppLoop;
        var $ppRewind;
        var $ppMouseDrag;
        var $ppTouchDrag;

        // bools
        if ( $autoplay == 'yes' ) { $ppAutoplay = true; } else { $ppAutoplay = false; }
        if ( $autoPauseHover == 'yes' ) { $ppAutoPauseHover = true; } else { $ppAutoPauseHover = false; }
        if ( $loop == 'yes' ) { $ppLoop = true; } else { $ppLoop = false; }
        if ( $rewind == 'yes' ) { $ppRewind = true; } else { $ppRewind = false; }
        if ( $mouseDrag == 'yes' ) { $ppMouseDrag = true; } else { $ppMouseDrag = false; }
        if ( $touchDrag == 'yes' ) { $ppTouchDrag = true; } else { $ppTouchDrag = false; }

        // complexes
        var $ppDots;
        var $ppNav;
        var $ppDotsEach1;
        var $ppDotsEach2;
        var $ppDotsEach3;
        var $ppDotsEach4;
        var $ppDotsEach5;
        var $ppDotsEach6;
        if ( $navigation == 'none' ) {
            $ppNav = false;
            $ppDots = false;
            $ppDotsEach1 = false;
            $ppDotsEach2 = false;
            $ppDotsEach3 = false;
            $ppDotsEach4 = false;
            $ppDotsEach5 = false;
            $ppDotsEach6 = false;
        } else if ( $navigation == 'arrows' ) {
            $ppNav = true;
            $ppDots = false;
            $ppDotsEach1 = false;
            $ppDotsEach2 = false;
            $ppDotsEach3 = false;
            $ppDotsEach4 = false;
            $ppDotsEach5 = false;
            $ppDotsEach6 = false;
        } else if ( $navigation == 'dots' ) {
            $ppNav = false;
            $ppDots = true;
            $ppDotsEach1 = 1;
            $ppDotsEach2 = 2;
            $ppDotsEach3 = 3;
            $ppDotsEach4 = 4;
            $ppDotsEach5 = 5;
            $ppDotsEach6 = 8;
        } else { // both
            $ppNav = true;
            $ppDots = true;
            $ppDotsEach1 = 1;
            $ppDotsEach2 = 2;
            $ppDotsEach3 = 3;
            $ppDotsEach4 = 4;
            $ppDotsEach5 = 5;
            $ppDotsEach6 = 8;
        }

        /* Owl Carousel Init */

        $($currentID + ' .pa-portfolio-master-row').owlCarousel({
            autoplay: $ppAutoplay,
            autoplayTimeout: $autoplayDuration,
            autoplayHoverPause: $ppAutoPauseHover,
            responsiveBaseElement:".pa-portfolio",
            navContainer:".pawl-nav",
            dotsContainer:".pawl-dots",
            loop: $ppLoop,
            mouseDrag: $ppMouseDrag,
            touchDrag: $ppTouchDrag,
            rewind: $ppRewind,
            nav:$ppNav,
            dots:$ppDots,
            responsive : {
                0:{ // from 0 and up
                    items:1,
                    // nav:$ppNav,
                    // dots:$ppDots,
                    dotsEach: $ppDotsEach1,
                    // margin: 3,
                    slideBy: 1
                },
                576:{ // from 576 and up
                    items:2,
                    // nav:$ppNav,
                    // dots:$ppDots,
                    dotsEach: $ppDotsEach2,
                    slideBy: 2
                },
                992:{ // from 992 and up
                    items:3,
                    // nav:$ppNav,
                    // dots:$ppDots,
                    dotsEach: $ppDotsEach3,
                    slideBy: 2
                },
                1200:{ // from 1200 and up
                    items:4,
                    // nav:$ppNav,
                    // dots:$ppDots,
                    dotsEach: $ppDotsEach4,
                    slideBy: 4
                },
                1921:{ // from 1921 and up
                    items:5,
                    // nav:$ppNav,
                    // dots:$ppDots,
                    dotsEach: $ppDotsEach5,
                    slideBy: 4
                },
                3505:{ // from 3505 and up
                    items:8,
                    // nav:$ppNav,
                    // dots:$ppDots,
                    dotsEach: $ppDotsEach6,
                    slideBy: 8
                },
                    
            }
        });

    } // end paPortfolio


    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/particle-ee-portfolio.default', paPortfolio);
    }); // Portfolio Section Widget end



    /**
     * Typed text effect
     */

    var typedTextEffect = function( $scope, $ ) {

        var $_this = $scope.find( '.typed-text' );

        $($_this).closest('.elementor-container').addClass('typedfix');

        var currentID  = '#'+$_this.attr( 'id' ),
            loop       = $_this.data( 'loop' ),
            numOfHeads = $_this.data( 'number-of-headings' ),
            typeHead1  = $_this.data( 'first-heading' ),
            typeHead2  = $_this.data( 'second-heading' ),
            typeHead3  = $_this.data( 'third-heading' );

        var loopBool = true;

        if ( loop == 'yes' ) {
            loopBool = true;
        } else {
            loopBool = false;
        }

        // Initiate typed.js text effect (done custom for each typed text effect)

        if ( numOfHeads == 'one' ) {
            $(currentID + ' > .animated-text-effect').typed({
                strings: [typeHead1],
                contentType: "text", 
                typeSpeed: 30, // def 0
                loop: loopBool, 
                backDelay: 1200, 
                showCursor: true, 
                cursorChar: "|"
            });
        } else if ( numOfHeads == 'two' ) {
            $(currentID + ' > .animated-text-effect').typed({
                strings: [typeHead1, typeHead2],
                contentType: "text", 
                typeSpeed: 30, // def 0
                loop: loopBool, 
                backDelay: 1200, 
                showCursor: true, 
                cursorChar: "|"
            });
        } else {
            $(currentID + ' > .animated-text-effect').typed({
                strings: [typeHead1, typeHead2, typeHead3],
                contentType: "text", 
                typeSpeed: 30, // def 0
                loop: loopBool, 
                backDelay: 1200, 
                showCursor: true, 
                cursorChar: "|"
            });
        }

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/particle-ee-typed-text-effect.default', typedTextEffect);
    }); // Typed Text Widget end




    /**
     * Service Hero
     */

    var serviceHero = function( $scope, $ ) {

        var $_this = $scope.find( '.typed-text' );

        $($_this).closest('.elementor-container').addClass('typedfix');

        var currentID  = '#'+$_this.attr( 'id' ),
            loop       = $_this.data( 'loop' ),
            numOfHeads = $_this.data( 'number-of-headings' ),
            typeHead1  = $_this.data( 'first-heading' ),
            typeHead2  = $_this.data( 'second-heading' ),
            typeHead3  = $_this.data( 'third-heading' );

        var loopBool = true;

        if ( loop == 'yes' ) {
            loopBool = true;
        } else {
            loopBool = false;
        }

        // Initiate typed.js text effect

        if ( numOfHeads == 'one' ) {
            $(currentID + ' > .animated-text-effect').typed({
                strings: [typeHead1],
                contentType: "text", 
                typeSpeed: 30, // def 0
                loop: loopBool, 
                backDelay: 1200, 
                showCursor: true, 
                cursorChar: "|"
            });
        } else if ( numOfHeads == 'two' ) {
            $(currentID + ' > .animated-text-effect').typed({
                strings: [typeHead1, typeHead2],
                contentType: "text", 
                typeSpeed: 30, // def 0
                loop: loopBool, 
                backDelay: 1200, 
                showCursor: true, 
                cursorChar: "|"
            });
        } else {
            $(currentID + ' > .animated-text-effect').typed({
                strings: [typeHead1, typeHead2, typeHead3],
                contentType: "text", 
                typeSpeed: 30, // def 0
                loop: loopBool, 
                backDelay: 1200, 
                showCursor: true, 
                cursorChar: "|"
            });
        }

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/particle-ee-service-hero.default', serviceHero);
    }); // Service Hero Widget end




    /**
     * Particles effect
     */

    var particleParticles = function( $scope, $ ) {

        var $_this = $scope.find( '.particles-js' );

        var currentID = '#'+$_this.attr( 'id' ),
            iwpSpeed = $_this.data( 'animation-speed' ),
            iwpArea = $_this.data( 'area' ),
            iwpNumOfParticles = $_this.data( 'number-of-particles' ),
            iwpParicleColor = $_this.data( 'particle-color' ),

            iwpParticleOpacity = $_this.data( 'particle-opacity' ),
            iwpShape = $_this.data( 'shape' ),
            iwpStrokeThickness = $_this.data( 'stroke-thickness' ),
            iwpStrokeColor = $_this.data( 'stroke-color' ),
            
            iwpParticleSize = $_this.data( 'particle-size' ),
            iwpDirection = $_this.data( 'direction' ),
            iwpLineColor = $_this.data( 'lines-color' ),
            
            iwpLineThickness = $_this.data( 'lines-thickness' ),
            iwpLineOpacity = $_this.data( 'lines-opacity' ),
            iwpOnHover = $_this.data( 'onhover' ),
            iwpOnClick = $_this.data( 'onclick' ),
            iwpGrabbedOpacity = $_this.data( 'grabbed-line-opacity' ),
            iwpBubbleOpacity = $_this.data( 'bubble-opacity' ),
            iwpBubbleSize = $_this.data( 'bubble-size' ),
            iwpBubbleDuration = $_this.data( 'bubble-duration' ),
            iwpRepulseDuration = $_this.data( 'repulse-duration' );
            
        iwpParicleColor = iwpParicleColor.substring(1, iwpParicleColor.length);
        iwpStrokeColor = iwpStrokeColor.substring(1, iwpStrokeColor.length);
        iwpLineColor = iwpLineColor.substring(1, iwpLineColor.length);

        // Initiate and customize particles.js effect
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": iwpNumOfParticles, // number
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": iwpParicleColor // color
                },
                "shape": {
                    "type": iwpShape, // particle shape
                    "stroke": {
                        "width": iwpStrokeThickness, // DOT stroke thickness
                        "color": iwpStrokeColor // stroke color
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
                    "value": iwpParticleOpacity, // particle opacity
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": .1,
                        "sync": false
                    }
                },
                "size": {
                    "value": iwpParticleSize, // particles size
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": .1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": iwpLineColor, // line color
                    "opacity": iwpLineOpacity, // line opacity
                    "width": iwpLineThickness // line thickness
                },
                "move": {
                    "enable": true,
                    "speed": iwpSpeed, // particles speed
                    "direction": iwpDirection, // particles direction
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
                        "mode": iwpOnHover // "on hover" effect
                    },
                    "onclick": {
                        "enable": true,
                        "mode": iwpOnClick // "on click" effect
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": iwpArea, // Area of effect
                        "line_linked": {
                            "opacity": iwpGrabbedOpacity // grabbed lines opacity
                        }
                    },
                    "bubble": {
                        "distance": iwpArea, // Area of effect
                        "size": iwpBubbleSize, // bubbles size
                        "duration": iwpBubbleDuration, // duration
                        "opacity": iwpBubbleOpacity, // bubbles opacity
                        "speed": 3
                    },
                    "repulse": {
                        "distance": iwpArea, // Area of effect
                        "duration": iwpRepulseDuration // iwpRepulseDuration // duration (PAZI)
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
        }); // particles init end
           
    } // particles end

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/particle-ee-image-with-particles.default', particleParticles);
    }); // Image With Particles Widget end




    /**
     * Particles Background effect
     */
    var particleParticlesBackground = function( $scope, $ ) {

        var $_this = $scope.find( '.particles-js' );

        var toTransport = $scope.find( '.pa-particles-background' );
        var roditelj = $scope.find( '.pa-particles-background' ).closest( '.elementor-section' );
        $( roditelj ).prepend( toTransport );
        var pbgZindex = $_this.data( 'zindex' );
        $( toTransport ).css( 'z-index', pbgZindex );

        var currentID = '#'+$_this.attr( 'id' ),
            pbgSpeed = $_this.data( 'animation-speed' ),
            pbgArea = $_this.data( 'area' ),
            pbgNumOfParticles = $_this.data( 'number-of-particles' ),
            pbgParicleColor = $_this.data( 'particle-color' ),

            pbgParticleOpacity = $_this.data( 'particle-opacity' ),
            pbgShape = $_this.data( 'shape' ),
            pbgStrokeThickness = $_this.data( 'stroke-thickness' ),
            pbgStrokeColor = $_this.data( 'stroke-color' ),
            
            pbgParticleSize = $_this.data( 'particle-size' ),
            pbgDirection = $_this.data( 'direction' ),
            pbgLineColor = $_this.data( 'lines-color' ),
            
            pbgLineThickness = $_this.data( 'lines-thickness' ),
            pbgLineOpacity = $_this.data( 'lines-opacity' ),
            pbgOnHover = $_this.data( 'onhover' ),
            pbgOnClick = $_this.data( 'onclick' ),
            pbgGrabbedOpacity = $_this.data( 'grabbed-line-opacity' ),
            pbgBubbleOpacity = $_this.data( 'bubble-opacity' ),
            pbgBubbleSize = $_this.data( 'bubble-size' ),
            pbgBubbleDuration = $_this.data( 'bubble-duration' ),
            pbgRepulseDuration = $_this.data( 'repulse-duration' );
            
        pbgParicleColor = pbgParicleColor.substring(1, pbgParicleColor.length);
        pbgStrokeColor = pbgStrokeColor.substring(1, pbgStrokeColor.length);
        pbgLineColor = pbgLineColor.substring(1, pbgLineColor.length);

        // Initiate and customize particles.js effect
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": pbgNumOfParticles, // number
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": pbgParicleColor // color
                },
                "shape": {
                    "type": pbgShape, // particle shape
                    "stroke": {
                        "width": pbgStrokeThickness, // DOT stroke thickness
                        "color": pbgStrokeColor // stroke color
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
                    "value": pbgParticleOpacity, // particle opacity
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": .1,
                        "sync": false
                    }
                },
                "size": {
                    "value": pbgParticleSize, // particles size
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": .1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": pbgLineColor, // line color
                    "opacity": pbgLineOpacity, // line opacity
                    "width": pbgLineThickness // line thickness
                },
                "move": {
                    "enable": true,
                    "speed": pbgSpeed, // particles speed
                    "direction": pbgDirection, // particles direction
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
                        "mode": pbgOnHover // "on hover" effect
                    },
                    "onclick": {
                        "enable": true,
                        "mode": pbgOnClick // "on click" effect
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": pbgArea, // Area of effect
                        "line_linked": {
                            "opacity": pbgGrabbedOpacity // grabbed lines opacity
                        }
                    },
                    "bubble": {
                        "distance": pbgArea, // Area of effect
                        "size": pbgBubbleSize, // bubbles size
                        "duration": pbgBubbleDuration, // duration
                        "opacity": pbgBubbleOpacity, // bubbles opacity
                        "speed": 3
                    },
                    "repulse": {
                        "distance": pbgArea, // Area of effect
                        "duration": pbgRepulseDuration // pbgRepulseDuration // duration (PAZI)
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
        }); // particles init end
           
    } // Particles Background end

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/particle-ee-particles-background.default', particleParticlesBackground);
    }); // Particles Background Widget end




    /**
     * Skill Bars
     */
    var skillBars = function( $scope, $ ) {
        
        // Initiate counters effect
        $(".pa-counterskills").counterUp({ delay: 20, time: 2200 });

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/particle-ee-skills-section.default', skillBars);
    }); // Skill Bars Widget end
    

})(jQuery);