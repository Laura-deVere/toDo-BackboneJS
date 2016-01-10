var TodoItem = Backbone.Model.extend({
	defaults: {
		isCompleted: false
	},

	url: "fakeUrl",
	
	validate: function(attrs){
		if (!attrs.description)
			return "Description is required.";
	},

	toggle: function(){
		// get the value, invert it, and store it in itself
		this.set("isCompleted", !this.get("isCompleted"));
	}
});


