	    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });

	$(document).ready(function(){
		$('#menu-btn').on('click', function(){
	    	$('.top-menu').toggleClass('active');
		});

		$("a[href='#top']").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, "slow");
		  return false;
		});
		$("a[href='#how-work']").click(function(){
		    $("html, body").animate({ scrollTop: 780 }, 600);
		    return false;
		});
	$('.product-box').on('click', function(){
	    $(this).toggleClass('active');
	 });

		    var wow = new WOW(
      {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       250,
        mobile:       true,
        live:         true,
        callback:     function(box) {
        },
        scrollContainer: null
      }
    );
    wow.init(); 
});