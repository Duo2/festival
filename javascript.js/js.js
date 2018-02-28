$(".hamburger").click(function() {

	$(this).toggleClass("is-active");
	$(".mobile_menu").toggle();

});

jQuery(document).ready(function(){
    window.onscroll = function() {
        if (window.pageYOffset >= 1){
            jQuery('.mobile_menu').css({position: 'fixed', width: '100%'});
        }
        else {
            jQuery('.mobile_menu').css({position: '', width: ''});
        }
    }
});

$(".hamburger").click(function() {
  $(".mobile_menu" ).toggleClass( "open");
});
