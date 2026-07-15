(function($) {


// Scripts exécutés quand le document est chargé (sauf images)
$(document).ready(function(){

	import Splide from '@splidejs/splide';


	new Splide( '.splide' ).mount();
	
	document.addEventListener( 'DOMContentLoaded', function () {
  		new Splide( '#image-carousel' ).mount();
	} );

});


})( jQuery );