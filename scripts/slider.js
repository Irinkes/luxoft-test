 var marquee = $("#slider ul");
		  var images = $(".slide"); 	  
		  				
		  var slideCount = $('.slider-list').children().length;
		  var slideInterval = 1000;
		
		  var step = 0;
					 
		       	function nextSlide() {
		       	
       				$(marquee).css('left', -step + 'px');
       				$(marquee).css('left', '0px');
       				$('.slider-list > li:first').remove().appendTo('.slider-list');
       				step = 158;

		       	}
				 $(document).ready(function () {
				    var switchInterval = setInterval(nextSlide, slideInterval);

				    $('#slider').hover(function(){
				        clearInterval(switchInterval);
				    },function() {
				        switchInterval = setInterval(nextSlide, slideInterval);
				    });
				  });
