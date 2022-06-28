/*
 * Author: beshleyua and ArtStyles (ArtTemplate)
 * Template Name: Vcard
 * Version: 1.0.3
*/

( function( $ ) {
    'use strict';

    /*-----------------------------------------------------------------
      Detect device mobile
    -------------------------------------------------------------------*/
	
    var isMobile = false; 
    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    }
    else {
        $('html').addClass('no-touch');
        isMobile = false;
    }
	
	
    /*-----------------------------------------------------------------
      Loaded
    -------------------------------------------------------------------*/

    anime({
        targets: 'body',
        opacity: 1,
        delay: 400,
        complete: function(anim) {
            progressBar(); //Init progress bar
        }
    });
    
    $('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
	    preloader(); //Init preloader
    });

    function preloader() {
        var tl = anime.timeline({}); 
        tl
        .add({
            targets: '.preloader',
            duration: 1,
            opacity: 1
        })
        .add({
            targets: '.circle-pulse',
            duration: 300,
            //delay: 500,
            opacity: 1,
            zIndex: '-1',
            easing: 'easeInOutQuart'
        },'+=500')
        .add({
            targets: '.preloader__progress span',
            duration: 500,
            width: '100%',
			easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.preloader',
            duration: 500,
            opacity: 0,
            zIndex: '-1',
            easing: 'easeInOutQuart'
        });
    };


    /*-----------------------------------------------------------------
      Hamburger
    -------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
	    $('.inner-menu').toggleClass('is-active');
		$('body').toggleClass('open-menu');
    });

    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 50) {
            $('.circle-menu').addClass('fixed');
        } 
        else {
            $('.circle-menu').removeClass('fixed');
        }
    });
	
	
    /*-----------------------------------------------------------------
      Nav
    -------------------------------------------------------------------*/
    
    var sideNavOpen = $('.hamburger');
    var sideNavTl = anime.timeline({autoplay: false});

    if (window.matchMedia("(max-width: 580px)").matches) {
        $('.js-menu').each(function(i) {
            sideNavTl
            .add({
                targets: '.nav',
                duration: 1000,
                width: ['0', '100%'],
                opacity: [0, 1],
                easing: 'easeInOutBack'
            })
            .add({
                targets: '.nav__item',
                duration: 200,
                delay: anime.stagger(10),
                opacity: [0, 1],
                translateX: [70, 0],
                easing: 'easeInOutBack'
            },'-=500');
        }); 
    } else {
        $('.js-menu').each(function(i) {
            sideNavTl
            .add({
                targets: '.nav',
                duration: 1000,
                width: ['0', '100%'],
                easing: 'easeInOutBack'
            })
            .add({
                targets: '.nav__item',
                duration: 200,
                delay: anime.stagger(10),
                opacity: [0, 1],
                translateX: [70, 0],
                easing: 'easeInOutBack'
            },'-=500');
        });  
    }
    
    $(sideNavOpen).on('click', function(e) {
        e.preventDefault();
        if (sideNavTl.began) {
            sideNavTl.reverse()
			sideNavTl.completed = false;
        }
        if (sideNavTl.paused) {
            sideNavTl.play()
        }
    });

    /* Mobile Menu */
    if ($(window).width() <= 1024 ) {
        $('.nav .dropdown-toggle').prop('data-no-swup', true);
        $('.nav').on('click', '.dropdown-toggle', function(){
            if($(this).hasClass('opened')) {
                $(this).closest('li').find('> .sub-menu').slideUp();
                $(this).removeClass('opened');
            }
            else {
                $(this).closest('li').find('> .sub-menu').slideDown();
                $(this).addClass('opened');
            }
            return false;
        });
        $('.nav').on('click', 'a:not(.dropdown-toggle)', function(){
            if ( $('html').hasClass('swup-enabled') ) {
                $(sideNavOpen).trigger('click');
            }
        });
    } else {
      $('.nav').on('click', 'a', function(){
          if ( $('html').hasClass('swup-enabled') ) {
              $(sideNavOpen).trigger('click');
          }
      });
    }

    
    /*-----------------------------------------------------------------
      Carousel
    -------------------------------------------------------------------*/	
    
	// Testimonials
    var slides_per_view = $('.js-carousel-review').data('swiper-slides-per-view');
    if ( ! slides_per_view ) {
        slides_per_view = 2;
    }
	$('.js-carousel-review').each(function() {
		var carousel = new Swiper('.js-carousel-review', {
            slidesPerView: slides_per_view,
			spaceBetween: 30,
			speed: 300,
			grabCursor: true,
			watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		        clickable: true
            },
			autoplay: {
                delay: 5000,
            },
			breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                580: {
					slidesPerView: 1,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: slides_per_view
                }
            }
		});
	});
	
	// Clients
	$('.js-carousel-clients').each(function() {
		var carousel = new Swiper('.js-carousel-clients', {
            slidesPerView: 5,
			spaceBetween: 30,
			//loop: true,
			grabCursor: true,
			watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		        clickable: true
            },
			breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },				
                580: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },				
                991: {
                    slidesPerView: 5,
                    spaceBetween: 30
                }
            }
		});
	});


    /* Project carousel */
    $('.js-carousel-project').each(function() {
        var projectCarousel = new Swiper('.js-carousel-project', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            speed: 300,
            grabCursor: true,
            watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                580: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                991: {
                    //slidesPerView: 1
                }
            }
        });
    });


    /*-----------------------------------------------------------------
      Magnific Popups
    -------------------------------------------------------------------*/
	
	/*
		Gallery magnific popup
	*/

	if(/\.(?:jpg|jpeg|gif|png)$/i.test($('.blocks-gallery-item:first a').attr('href'))){
		$('.blocks-gallery-item a').magnificPopup({
			gallery: {
				enabled: true
			},
			type: 'image',
			closeBtnInside: false,
			mainClass: 'mfp-fade'
		});
	}

    $('.has-popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'popup-box',
        image: {
            verticalFit: true
        }
    });

    $('.has-popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        preloader: false,
        fixedContentPos: false,
        mainClass: 'popup-box',
        callbacks: {
            markupParse: function(template, values, item) {
                template.find('iframe').attr('allow', 'autoplay');
            }
        }
    });
    
    $('.has-popup-music').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        preloader: false,
        fixedContentPos: false,
        mainClass: 'popup-box',
        callbacks: {
            markupParse: function(template, values, item) {
                template.find('iframe').attr('allow', 'autoplay');
            }
        }
    });

    $('.has-popup-gallery').on('click', function() {
        var gallery = $(this).attr('href');
    
        $(gallery).magnificPopup({
            delegate: 'a',
            type:'image',
            closeOnContentClick: false,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');

        return false;
    });
	
	
    /*-----------------------------------------------------------------
      Sticky sidebar
    -------------------------------------------------------------------*/

    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    };

    //  stop sticky kit
    //  based on your window width

    var screen = 1200;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    // windowSize
    // window resize
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function(){
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));

    if ( ! $('.sidebar.box > *').length ) {
        $('.sticky-parent > .col-xl-3').remove();
        $('.sticky-parent > .col-xl-9').attr( 'class', 'col-12 col-md-12 col-xl-12' );
    }


    /*-----------------------------------------------------------------
      Progress bar
    -------------------------------------------------------------------*/
    
	function progressBar() {
	    $('.progress').each(function() {
		    var ctrl = new ScrollMagic.Controller();
		    new ScrollMagic.Scene({
                triggerElement: '.progress',
	            triggerHook: 'onEnter',
	            duration: 300
            })
            .addTo(ctrl)
		    .on("enter", function (e) {
			    var progressBar = $('.progress-bar');
                progressBar.each(function(indx){
                    $(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
                });
		    });
        });
    }
	
	
    /*-----------------------------------------------------------------
      Scroll indicator
    -------------------------------------------------------------------*/
  
    function scrollIndicator() {
        $(window).on('scroll', function() {
            var wintop = $(window).scrollTop(), docheight = 
            $(document).height(), winheight = $(window).height();
 	        var scrolled = (wintop/(docheight-winheight))*100;
  	        $('.scroll-line').css('width', (scrolled + '%'));
        });
    }
	
	scrollIndicator(); //Init
	
	
    /*-----------------------------------------------------------------
      ScrollTo
    -------------------------------------------------------------------*/
	
    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();
			
        $backToTop.hide();


        $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > $showBackTotop ) {
                $backToTop.fadeIn('slow');
            } else {
                $backToTop.fadeOut('slow');
            }
        });
        
		$backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate( {scrollTop : 0}, 'slow' );
        });
    }
	
	scrollToTop(); //Init


    /*-----------------------------------------------------------------
      Style background image
    -------------------------------------------------------------------*/	
  
    $('.js-image').each(function(){
        var dataImage = $(this).attr('data-image');
        $(this).css('background-image', 'url(' + dataImage + ')');
    });
    
	
    /*-----------------------------------------------------------------
      Autoresize textarea
    -------------------------------------------------------------------*/	

    $('textarea').each(function(){
        autosize(this);
    });


    /*-----------------------------------------------------------------
	  Tabs
    -------------------------------------------------------------------*/	
    
	$('.js-tabs').each(function(){
	    $('.content .tabcontent').hide();
        $('.content .tabcontent:first').show();
        $('.nav .nav__item a').on('click', function () {
            $('.nav .nav__item a').removeClass('active');
            $(this).addClass('active');
            var currentTab = $(this).attr('href');
            $('.content .tabcontent').hide();            
            $(currentTab).show();
            $portfolioMasonry.isotope ({
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true
            });
			$('.js-scroll').getNiceScroll().resize()
            return false;
        });
	    
		// Mobile close menu
	    var screenMobile = 580;
	
	    windowWidth = $(window).width();
        if ((windowWidth < screenMobile)) {	
            $('.nav .nav__item a').on('click', function (e) {
	            e.preventDefault();
                $('.hamburger').removeClass('is-active');
		        $('.inner-menu').removeClass('is-active');
		        $('body').removeClass('open-menu');
		  
                if (sideNavTl.began) {
                    sideNavTl.reverse()
			        sideNavTl.completed = false;
                }
                if (sideNavTl.paused) {
                    sideNavTl.play()
                }
	        });
            
			// autoscroll to content
            $(".nav__item a").click(function(e) {
		        e.preventDefault();
		        var offset = -35;
		
                $('html, body').animate({
                    scrollTop: $("#content").offset().top + offset
                }, 0);
            });			
	    } else {
		
	    }
	});
	
	
    /*-----------------------------------------------------------------
      Tooltip
    -------------------------------------------------------------------*/
	
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    /*-----------------------------------------------------------------
      Switch categories & Filter mobile
    -------------------------------------------------------------------*/	
  
    $('.select').on('click','.placeholder',function(){
      var parent = $(this).closest('.select');
      if ( ! parent.hasClass('is-open')){
          parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
      }else{
          parent.removeClass('is-open');
      }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	
	    $('.filter__item').removeClass('active');
	    $(this).addClass('active');
	    var selector = $(this).attr('data-filter');
		
	    $('.js-filter-container').isotope({
	        filter: selector
	    });
	    return false;	
    });


    /*-----------------------------------------------------------------
      Masonry
    -------------------------------------------------------------------*/	
	
    // Portfolio
    var $portfolioMasonry = $('.js-masonry').isotope({
        itemSelector: '.gallery-grid__item',
	    layoutMode: 'fitRows',
        percentPosition: true,
	    transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },	
        masonry: {
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
  
    $portfolioMasonry.imagesLoaded().progress( function() {
        $portfolioMasonry.isotope ({
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true,
	        layoutMode: 'masonry',
            fitRows: {
                gutter: '.gutter-sizer'
            }
	    });
    });	

    // Blog
    var $blogMasonry = $('.archive-row').isotope({
        itemSelector: '.archive-col',
        layoutMode: 'fitRows',
        percentPosition: true,
        transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }, 
        masonry: {
            columnWidth: '.archive-col',
            isAnimated: true
        }
    });
  
    $blogMasonry.imagesLoaded().progress( function() {
        $blogMasonry.isotope ({
            columnWidth: '.archive-col',
            isAnimated: true,
            layoutMode: 'masonry',
        });
    });

	
    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/		

    $('textarea').niceScroll({
		horizrailenabled:false
	});


    /*-----------------------------------------------------------------
      SimpleBar
    -------------------------------------------------------------------*/       
    if($('.main.theme-style-compact .box .page-wrap').length) {
    new SimpleBar($('.main.theme-style-compact .box .page-wrap')[0]);
    }

    /*-----------------------------------------------------------------
	  mediumZoom
    -------------------------------------------------------------------*/
  
    mediumZoom('[data-zoom]', {
        margin: 30
    });

	
    /*-----------------------------------------------------------------
      Lazyload
    -------------------------------------------------------------------*/

    lazySizes.init();

	
    /*-----------------------------------------------------------------
      Polyfill object-fit
    -------------------------------------------------------------------*/	
	
    var $someImages = $('img.cover');
    objectFitImages($someImages);

    /*-----------------------------------------------------------------
      Footer Change
    -------------------------------------------------------------------*/

    if ( $('.elementor-section-wrap').length ) {
        if ( $('.elementor-section:last').find('.box-inner').length ) {
            $('.footer').removeClass('box-inner');
            $('.footer').removeClass('box-inner--rounded');
        } else {
            if ( ! $('.footer').hasClass( 'box-inner' ) ) {
                $('.footer').addClass('box-inner');
                $('.footer').addClass('box-inner--rounded');
            }
        }
    } else {
        if ( $('.footer').prev('.box-inner').length || $('.footer').prev().find('> .box-inner:last-child').length ) {
            $('.footer').removeClass('box-inner');
            $('.footer').removeClass('box-inner--rounded');
        } else {
            if ( ! $('.footer').hasClass( 'box-inner' ) ) {
                $('.footer').addClass('box-inner');
                $('.footer').addClass('box-inner--rounded');
            }
        }
    }

} )( jQuery );