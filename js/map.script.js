	/* google map 3 */
	if(jQuery('#map3').length){
		function myMap3() {
			  var mapCanvas = document.getElementById("map3");
			  var mapOptions = {
				center: new google.maps.LatLng(45.434046,12.340284),
				zoom:11,
				mapTypeId:google.maps.MapTypeId.TERRAIN,
				styles:[{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
			  };
			  var map = new google.maps.Map(mapCanvas,mapOptions);
			}
		google.maps.event.addDomListener(window, 'load', myMap3);
		
	}
