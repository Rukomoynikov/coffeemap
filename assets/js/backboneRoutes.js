/**
 * Created by rukomoynikov on 9/20/15.
 */

var Router = Backbone.Router.extend({
	initialize : function(){

	},
	start : function(){
		Backbone.history.start({
			root : '/coffeemap'
			//pushState: true,
		});
	},
	routes : {
		"login" : "login",
		"logout" : "logout",
		"add" : "add",
		"edit/:id" : "edit",
		"detail:/:url" : "detail",
		"*actions" : "main"
	}
});

roomRouter = new Router;

var baseNavigationViewInstance = new baseNavigationView();
var baseViewInstance = new baseView();
var requiredViews = [baseNavigationViewInstance, baseViewInstance];
var loginViewInstance = new loginView();
var addViewInstance = new addView()

function checkRequiredViews (){
	_.each(requiredViews, function(element){
		if (element.rendered == false){
			$('body').prepend(element.el);
		}

	})
}

// Главная страница
roomRouter.on('route:main', function () {

	$('body').prepend(baseViewInstance.el);
	$('body').prepend(baseNavigationViewInstance.el);

	var posts = new Parse.Query("Place");
	posts.find().then(function(results){
		_.each(results, function(onePost){
			var postViewInstance = new postView({model : onePost})
			$('.map').append(postViewInstance.el)
		})
	});
});

roomRouter.on('route:add', function(){
	checkRequiredViews();
	$('body').prepend(addViewInstance.$el);
});

roomRouter.on('route:logout', function(){
	Parse.User.logOut().then(function(){
		// baseNavigationViewInstance.remove();
		baseNavigationViewInstance.render();
		roomRouter.navigate('/', { trigger: true })
	})

});

roomRouter.on('route:login', function () {
	if (Parse.User.current()){
		roomRouter.navigate('/', {trigger: true})
		var user = Parse.User.current().toJSON();
	} else {
		checkRequiredViews();
		// Так как навигация и основной шаблон уже вставлены, необходимо вставить только окно логина
		// но есть проблема, если пользователь открыл эту страницу первой, значит те части шаблона не подгрузились
		$('body').prepend(loginViewInstance.el);
	}

});

roomRouter.on('route:edit', function(postId){
	checkRequiredViews();
	// Проверить принадлежность пользователю этого обьекта
	var places = new Parse.Query('Place');
	places.get(postId).then(function(post){
		if (Parse.User.current() && post.get("user").id == Parse.User.current().id) {
			var EditViewInstance = new editView({model: post})
			$('body').prepend(EditViewInstance.$el);
		} else {
			roomRouter.navigate("/", {trigger: true})
		}
	})
	// var posts = new Parse.Query("Place");

	// baseViewInstance.remove();

	// var EditViewInstance = new addView({model})
	// $('body').prepend(EditViewInstance.$el);
})

roomRouter.start();
// module.exports  = roomRouter;
