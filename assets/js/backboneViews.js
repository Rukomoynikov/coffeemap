/**
 * Created by rukomoynikov on 9/20/15.
 */

Parse.initialize("8eYR1jiR5GCi722mW7fgXKmQJNsVPazc9KSBUeNX", "igooTpziLkymzIuKtVnnQzPtGROdJV6t8gj0jCgS");

// Required Views: login screen, add screen, edit screen, list of posts screen, one post screen

var baseView = Backbone.View.extend({
	className: 'content',
	initialize: function(){
		this.render()
	},
	template : _.template($('#baseTemplate').html()),
	render : function(){
		this.$el.append(this.template({user : "Maksim"}))
	},
	rendered : false
})

var baseNavigationView = Backbone.View.extend({
	className : "navigation",
	initialize: function(){
		this.render()
	},
	template : _.template($('#baseNavigationTemplate').html()),
	render : function(){
		user = Parse.User.current() ? Parse.User.current().toJSON() : null;
		this.$el.html(this.template({user: user}));
	},
	rendered : false
})



var loginView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template: _.template($('#loginTemplate').html()),
	render : function(){
		this.$el.append(this.template());
	},
	events :{
		"submit .loginForm" : "login"
	},
	// Events handlers
	login : function(){
		event.preventDefault();

		var emailLogin = $('#emailLogin').val();
		var passwordLogin = $('#passwordLogin').val();
		var self = this;
		Parse.User.logIn(emailLogin, passwordLogin).then(function(result){
			roomRouter.navigate('/#', { trigger: true })
			baseNavigationViewInstance.render();
			self.remove();
		})
	},
	rendered : false
});

var registerView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template: _.template($('#loginTemplate').html()),
	render : function(){
		this.$el.append(this.template());
	},
	rendered : false
})

var postView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template : _.template($('#postTemplate').html()),
	render : function () {
		this.$el.append(this.template(this.model.toJSON()));
	},
	rendered : false
})

var listView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template: _.template("<h1>Войти</h1"),
	render : function(){

	},
	rendered : false
})

var addView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	tagName : 'form',
	className : 'addPost',
	attributes : {
		// "enctype" : "multipart/form-data",
		// "method" : "POST"
	},
	template: _.template($('#addTemplate').html()),
	render: function(){
		this.$el.html(this.template())
	},
	events : {
		'submit .addPost' : "addPost",
		'click [type="submit"]' : 'addPost'
	},
	addPost : function(event){
		console.log("asgasg");
		event.preventDefault();
		var placeObject = Parse.Object.extend("Place");
	    var place = new placeObject();
	    place.set("name", $('[name="placeName"]').val());
	    place.set("description", $('[name="placeDescription"]').val());
	    place.set('user', Parse.User.current());
	    place.save({
	      success : function(){
	        roomRouter.navigate('/#', { trigger: true })
	      },
	      error : function(error){
	        console.log(error)
	      }
		});
		this.remove();
	},
	rendered : false
})

// module.exports = {
// 	addView : addView,
// 	listView : listView,
// 	postView : postView,
// 	registerView : registerView,
// 	loginView : loginView,
// 	baseView : baseView,
// 	baseNavigationView : baseNavigationView
// }
