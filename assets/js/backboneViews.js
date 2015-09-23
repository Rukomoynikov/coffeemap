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
		this.$el.append(this.template({user: user}));
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
		var user = Parse.User.logIn(emailLogin, passwordLogin).then(function(result){
			roomRouter.navigate('/#', { trigger: true })
			this.render();
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
	attributes : {
		"enctype" : "multipart/form-data"
	},
	template: _.template($('#addTemplate').html()),
	render: function(){
		this.$el.append(this.template())
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
