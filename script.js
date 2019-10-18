$(function() {
    /**
    * Scroll fluide, code trouvé sur https://wprock.fr/blog/javascript-jquery-smooth-scrolling/
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1000);
            }
        }
    });
});

/** 
 * Arrivée en cascade lorsqu'on scroll, 
 * code trouvé sur http://www.ems-tricks.com/tricks/css-js-e-monsite/faire-apparaitre-elements-page-scroll.html 
 * */

$(document).ready(function(){
    $(window).on('scroll', function () {
    
    var elmt   = $('.from-left, .from-right');
    var topImg = $('.from-left, .from-right').offset().top;
    var scroll = $(window).scrollTop();
    
        $(elmt).each(function() {
            
            var topImg = $(this).offset().top - 600;
            
                if ( topImg < scroll ) {
                
                $(this).css("transform", "translate(0,0)");
                $(this).css("opacity", "1");
                
                };
        });
    });
});
