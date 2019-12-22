var backButton = $('.back_button')
		var nextButton = $('.next_button')
		var popup_feedback_form = $('.popup_feedback_form')
		var popup = $('.popup');
		var header__phone_btn = $('.header__phone-btn');
		var backButton = `<button class="back_button"></button>`;
		var nextButton = `<button class="next_button"></button>`;
		$('.my-examples__slick').slick({
				arrows: true,
	  			infinite: true,
	  			dots: true,
	    		slidesToShow: 3, 
	  			slidesToScroll: 1,
	  			prevArrow: backButton,
   				nextArrow: nextButton,
	  			responsive: [
				    {
				      breakpoint: 1200,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1,
				      },
				    },
				    {
				      breakpoint: 500,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
				      }
				    }
				]
	 		 })
$(function () {
	$('.show_popup').click(function () {
		popup.show().css("display","flex");
		popup_feedback_form.show();
		$("body").append("<div class='overlay'></div>");
		$('html,body').css('overflow', 'hidden');
		$('.overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		popup.hide();
		popup_feedback_form.hide();
		$('.overlay').remove('.overlay');
		$('html,body').css('overflow','scroll');
		return false;
	});
});

var header__mobile_menu = $('.header__mobile-menu');
var header__services = $('.header__services');
var hamburger = $('.hamburger');

header__mobile_menu.click(function() {
	header__mobile_menu.toggleClass('close1');
		header__services.toggleClass('active');
});

hamburger.click(function() {
	hamburger.toggleClass('close1');
		header__phone_btn.hide();
		header__services.toggleClass('active');
});