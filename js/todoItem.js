var TodoItem = Backbone.Model.extend({
	validate: function(){
		if(!attrs.description)
			return "Description is required."
	}
});