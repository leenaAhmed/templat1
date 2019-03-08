$(document).ready(function () {
 $('.carousel').carousel({
        
        interval: 6000
        
    });
	  $(".gear-check").click(function () {
        
        $(".option-color").fadeToggle();
        
    });  
	$("html").niceScroll();
	
	var colorLi = $(".option-color ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#31708f").end()
    
           .eq(1).css("backgroundColor", "#3c763d").end()
    
           .eq(2).css("backgroundColor", "#563d7c").end()
    
           .eq(3).css("backgroundColor", "#E41B17");
	 
	colorLi.click(function () {
        
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
        
    }); 
	    // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
    
});

 
 

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading .sk-folding-cube").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
}); 