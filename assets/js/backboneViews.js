/**
 * Created by rukomoynikov on 9/20/15.
 */

Parse.initialize("8eYR1jiR5GCi722mW7fgXKmQJNsVPazc9KSBUeNX", "igooTpziLkymzIuKtVnnQzPtGROdJV6t8gj0jCgS");

// Required Views: login screen, add screen, edit screen, list of posts screen, one post screen

var baseView = Backbone.View.extend({
	initialize: function(){
		this.render()
	},
	template : _.template($('#baseTemplate').html()),
	render : function(){
		this.$el.append(this.template())
	}
})

var loginView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template: _.template($('#loginTemplate').html()),
	render : function(){
		this.$el.append(this.template());
	}
});

var registerView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template: _.template($('#loginTemplate').html()),
	render : function(){
		this.$el.append(this.template());
	}
})

var postView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template : _.template($('#postTemplate').html()),
	render : function () {
		this.$el.append(this.template(this.model.toJSON()));
	}
})

var listView = Backbone.View.extend({
	initialize : function(){
		this.render();
	},
	template: _.template("<h1>Войти</h1"),
	render : function(){

	}
})
