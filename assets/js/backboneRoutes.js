/**
 * Created by rukomoynikov on 9/20/15.
 */

var Router = Backbone.Router.extend({
	initialize : function(){

	},
	start : function(){
		Backbone.history.start({
			//pushState: true,
		});
	},
	routes : {
		"login" : "login",
		"add" : "add",
		"edit/:url" : "edit",
		"detail:/:url" : "detail",
		"*actions" : "main"
	}
});

roomRouter = new Router;

// Главная страница
roomRouter.on('route:main', function () {
	var baseViewInstance = new baseView();
	console.log(_.template($('#baseNavigationTemplate').html())());
	$('body').prepend(_.template($('#baseNavigationTemplate'))());

	var posts = new Parse.Query("Place");
	posts.find().then(function(results){
		_.each(results, function(onePost){
			var postViewInstance = new postView({model : onePost})

			$('.map').append(postViewInstance.el)
		})
	});
});

roomRouter.on('route:login', function () {
	if (Parse.User.current()){
		roomRouter.navigate('/', {trigger: true})
		var user = Parse.User.current().toJSON();
	}

	var baseViewInstance = new baseView();
	$('body').prepend(baseViewInstance.el);

	var loginViewInstance = new loginView();
	$('body').prepend(loginViewInstance.el);


	$('.loginForm').on('submit', function(event){
		event.preventDefault();

		var emailLogin = $('#emailLogin').val();
		var passwordLogin = $('#passwordLogin').val();

		var user = Parse.User.logIn(emailLogin, passwordLogin).then(function(result){
			if (Parse.User.current()){
				$('.navigation__menu--profile').html("<a href='#' class='navigation__link'>" + Parse.User.current().get("username") + "</a>" );
			}
		})

	})

	//console.log(Parse.User.current());


});

roomRouter.start();
