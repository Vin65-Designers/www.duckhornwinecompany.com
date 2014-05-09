var v65 = {
	global : {
		init : function(){
			v65.global.addButtonListener();
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		}
	},
	mediaPage : {
		init: function(){
			v65.mediaPage.scrollBrandNav();
			v65.mediaPage.equalizeBrandMedia();
			v65.mediaPage.formatProductMedia();
			v65.mediaPage.unwrapEmptyMediaLinks();
		},
		scrollBrandNav : function(){
			var startingLocation = $(".mediaBrandNav").offset().top;

			if ('ontouchstart' in document.documentElement) {
				$(window).bind('touchmove touchstart touchend', function(){
					if($(".mediaBrandNav").offset().top - $(window).scrollTop() < 1){
						$(".mediaBrandNav").addClass('stickyNav');
					}

					if($(".mediaBrandNav").hasClass('stickyNav') && $(".mediaBrandNav").offset().top <= startingLocation){
						$(".mediaBrandNav").removeClass('stickyNav');
					}
				});
			} else{
				$(window).scroll(function(){
					if($(".mediaBrandNav").offset().top - $(window).scrollTop() < 1){
						$(".mediaBrandNav").addClass('stickyNav');
					}

					if($(".mediaBrandNav").hasClass('stickyNav') && $(".mediaBrandNav").offset().top <= startingLocation){
						$(".mediaBrandNav").removeClass('stickyNav');
					}
				});
			}
		},
		equalizeBrandMedia : function(windowSize){
			$(".media").each(function(){
				if(windowSize >= 450 || windowSize <= 640){
					$(this).find('.brandMedia').removeAttr('style').equalize(2);
				}

				if(windowSize >= 641 || windowSize <= 850){
					$(this).find('.brandMedia').removeAttr('style').equalize(3);
				}

				if(windowSize >= 851){
					$(this).find('.brandMedia').removeAttr('style').equalize(4);
				}
			});
		},
		formatProductMedia : function(){
			$(".media").each(function(){
				var brandMedia = $(this).find('.brandMedia');
				for(var i = 1; i <= brandMedia.length; i++){
					if(i % 4 == 0){
						brandMedia.eq(i-1).after("<div class='v65-group clear4Up'></div>");
					} else if(i % 3 == 0){
						brandMedia.eq(i-1).after("<div class='v65-group clear3Up'></div>");
					} else if(i % 2 == 0){
						brandMedia.eq(i-1).after("<div class='v65-group clear2Up'></div>");
					}
				}
			});
		},
		unwrapEmptyMediaLinks : function(){
			$(".productMedia a").each(function(){
				var link = $(this);
				if(link.attr('href').length > 0 && link.attr('href').split('/files/')[1].length == 0){
					link.contents().unwrap();
				}
			});
		}
	},
	page : {
		init : function(){
			v65.page.scrollToBottom();
			v65.page.scrollToTop();
		},
		scrollToBottom : function(){
			$('.footerMenuLink').click(function() {
				$("html, body").animate({ scrollTop: ($("a[name='footerMenu']").offset().top - 20) }, 400);
				return false;
			});
		},
		scrollToTop : function(){
			$(window).scroll(function() {
				if($(document).scrollTop() > 150 && $(window).width() < 580){
					$(".backToTop").css("display", "block");
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
					$("footer").css("margin-bottom", $('.v65-productAddToCart-drilldownActivate').outerHeight())

				} else{
					$(".backToTop").css("display", "none");
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
					$("footer").removeAttr('style');
				}
			});

			$('.backToTop').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		}
	}
}

;(function($,undefined){
  $.fn.equalize = function(length){
		for(var i = 0; i < this.length; i+=length) {
			var elems = this.slice(i, i+length),
			    equalizeArray = [];
			for(j = 0; j < length; j++){
				equalizeArray.push(elems.eq(j).outerHeight());
			}
			var height = Math.max.apply( Math, equalizeArray);
			elems.css('min-height', height);
		}
		return this;
	}
})(jQuery);

v65.global.init();
v65.mediaPage.init();
v65.page.init();

$(window).load(function(){
	v65.mediaPage.equalizeBrandMedia($("body").width());
});

var resize = false, windowSize = 0;
setInterval(function(){
	$(window).resize(function() {
		resize = true;
		windowSize = $("body").width();
	});

	if(resize){
		v65.mediaPage.equalizeBrandMedia(windowSize);
		resize = false;
	}
}, 500);