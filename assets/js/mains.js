var map; // Javascript объект который содержит в себе карту
var map_dom = document.querySelector("#map"); // DOM объект для карты
var countryRestrict = {'country': 'ru'};
var map_infoWindow = $('.map_infoWindow'); // DOM элемент для информационных окон
var autocomplete; // Сервис автокомплита

function initMap(){

	// Определение местоположения
	if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };

	      infoWindow.setPosition(pos);
	      infoWindow.setContent('Location found.');
	      map.setCenter(pos);
	    }, function() {
			// Создание карты
			if (localStorage.getItem("lat") && localStorage.getItem("lng")) {
				map = new google.maps.Map(map_dom, {
					center: {lat : localStorage.getItem("lat"), lng : localStorage.getItem("lng")},
					zoom: 8
				});
			} else {
				map = new google.maps.Map(map_dom, {
					center: {lat: -34.397, lng: 150.644},
					zoom: 8
				});
			}
	    });
	  }
	// Создание маркера
	var myLatLng = {lat: -25.363, lng: 131.044};

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'Hello World!'
	});

	// По клику на маркер показать информационное окно
	marker.addListener('click', function(){
		$.fancybox( [map_infoWindow] );
	})

	// Сервис автозаполнения названий городов
	autocomplete = new google.maps.places.Autocomplete(
		(document.getElementById('city')),
		{ types: ['(cities)'], componentRestrictions: countryRestrict}
	);

	var places = new google.maps.places.PlacesService(map);

	autocomplete.addListener('place_changed', onPlaceChanged);

	function onPlaceChanged() {

	  var place = autocomplete.getPlace();
	  localStorage.setItem("lat", Number(place.geometry.location.G));
	  localStorage.setItem("lng", Number(place.geometry.location.K));
	  if (place.geometry) {
	    map.panTo(place.geometry.location);
	    map.setZoom(14);
	    // search();
	  } else {
	    document.getElementById('autocomplete').placeholder = 'Enter a city';
	  }
	}

};

// function onPlaceChanged (event){
// 	console.log(this);
// }
