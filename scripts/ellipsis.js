$(window).on('load',function() {	   
			    
    var ellipsestext = "...";
    var moretext = "Show >";			     
    var lesstext = "Hide";
    var maxHeight = 127;			    

    $('.more').each(function() {			       
        var contentHeight = $(this).height();
        var ellipse = '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span>'	   
 		
        if(contentHeight > maxHeight) {
 			$(this).addClass('more-max-height');
            $(this).append(ellipse);
            $(this).after('<a href="" class="morelink">' + moretext + '</a></span>')		            
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {			        	
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).prev().children().toggle();
        $(this).prev().toggleClass('more-max-height');
        return false;
    });
});