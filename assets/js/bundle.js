(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var map; // Javascript объект который содержит в себе карту
var map_dom = document.querySelector("#map"); // DOM объект для карты
var countryRestrict = {'country': 'ru'};
var map_infoWindow = $('.map__infoWindow'); // DOM элемент для информационных окон
var autocomplete; // Сервис автокомплита


// Начальные данные
// var places = [
// 	{
// 		"name" : "Кофейня на углу Пушкинской",
// 		"description" : "Небольшая кофейня на вынос",
// 		"images" : [
// 			"http://interiorscafe.ru/wp-content/uploads/starbucks-coffee-portland-02.jpg",
// 			"http://www.buro247.ru/images/alisa/3023357-slide-s-new-orleans-08.jpg"
// 		],
// 		"coffeeVariants": [
// 			{
// 				"id": 1,
// 				"price": 60,
// 				"description": "Ничем не примечательный Американо, добавляют в эспрессо воду. На вкус норм."
// 			}
// 		]
// 	}
// ]

// var coffeeVariants = [
// 	{
// 		id: 1,
// 		name : "Американо",
// 		description: "Самый простой и наиболее распространённый кофе.",
// 		image: "http://www.mycoffe.ru/wp-content/uploads/2013/11/americano.jpg"
// 	}
// ]

// Генерация карты
// function initMap(){

// 	// Определение местоположения
// 	if (navigator.geolocation) {
// 	    navigator.geolocation.getCurrentPosition(function(position) {
// 	      var pos = {
// 	        lat: position.coords.latitude,
// 	        lng: position.coords.longitude
// 	      };
// 		map = new google.maps.Map(map_dom, {
// 			center: {pos},
// 			zoom: 2
// 		});
// 	    }, function() {
// 			// Создание карты
// 			if (localStorage.getItem("lat") && localStorage.getItem("lng")) {
// 				map = new google.maps.Map(map_dom, {
// 					center: {lat : Number(localStorage.getItem("lat")), lng : Number(localStorage.getItem("lng"))},
// 					zoom: 2
// 				});
// 			} else {
// 				map = new google.maps.Map(map_dom, {
// 					center: {lat: -34.397, lng: 150.644},
// 					zoom: 2
// 				});
// 			}
// 			autoComplete()
// 			generateMarkers()

// 	    });
// 	};

// };

// function generateMarkers (){
// 	// Создание маркера
// 	console.log(map)
// 	var myLatLng = {lat: -25.363, lng: 131.044};

// 	var marker = new google.maps.Marker({
// 		position: myLatLng,
// 		map: map,
// 		animation: google.maps.Animation.DROP,
// 		title: 'Hello World!'
// 	});

// 	// По клику на маркер показать информационное окно
// 	marker.addListener('click', function(){
// 		$.fancybox(map_infoWindow);
// 	})

// }

// function autoComplete (){

// 	// Сервис автозаполнения названий городов
// 	autocomplete = new google.maps.places.Autocomplete(
// 		(document.getElementById('city')),
// 		{ types: ['(cities)'], componentRestrictions: countryRestrict}
// 	);

// 	var places = new google.maps.places.PlacesService(map);

// 	autocomplete.addListener('place_changed', onPlaceChanged);

// 	function onPlaceChanged() {

// 	  var place = autocomplete.getPlace();
// 	  localStorage.setItem("lat", place.geometry.location.G);
// 	  localStorage.setItem("lng", place.geometry.location.K);
// 	  if (place.geometry) {
// 	    map.panTo(place.geometry.location);
// 	    map.setZoom(14);
// 	    // search();
// 	  } else {
// 	    document.getElementById('autocomplete').placeholder = 'Enter a city';
// 	  }
// 	}
// }

// Информация из старого



    // var placeObject = Parse.Object.extend("Place");
    // var place = new placeObject();
    // place.set("name", "Кофейня на углу Пушкинской");
    // place.set("description", "Такая неприметная кофейня");
    // place.set('user', Parse.User.current());
    // place.save({
    //   success : function(){
    //     alert("Yes")
    //   },
    //   error : function(error){
    //     console.log(error)
    //   }
    // })

// function checkLogin (){
// 	if(Parse.User.current()) {
// 		console.log( Parse.User.current().get("username") );
// 	} else {
// 		console.log("There is no user");
// 	}
// }

// checkLogin();

// var  logouOutButton = document.querySelector('#logouOutButton');
// logouOutButton.addEventListener('click', logOutHandle);

// var  signupForm = document.querySelector('#signUp');
// signupForm.addEventListener('submit', handleSignUp);

// var  signinForm = document.querySelector('#signIn');
// signinForm.addEventListener('submit', handleSignIn);

// function logOutHandle(event){
// 	event.preventDefault();
// 	Parse.User.logOut();
// }

// function handleSignUp(event){
// 	event.preventDefault();
// 	var name = document.getElementById("login").value;
// 	var password = document.getElementById("password").value

// 	var user = new Parse.User()
// 	user.set("username", name);
// 	user.set("password", password)
// 	user.signUp(null, {
// 		success : function(user){
// 			console.log(user);
// 		},
// 		error: function(user, error){

// 		}
// 	})
// }

// function handleSignIn(event){
// 	event.preventDefault();
// 	var name = document.getElementById("loginIn").value;
// 	var password = document.getElementById("passwordIn").value

// 	Parse.User.logIn(name, password, {
// 		success : function(user){
// 			console.log("success");
// 		},
// 		error: function(error){
// 			console.log(error);
// 		}
// 	});
// }

// function getPlaces (){
// 	var query = new Parse.Query(placeObject);
// 	query.find({
// 		success : function(result){
// 			console.log(result);
// 		},
// 		error : function(error){
// 			console.log(error)
// 		}
// 	})
// }

},{}]},{},[1]);
