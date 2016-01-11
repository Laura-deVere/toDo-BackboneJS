var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("change", this.render, this);
	},

	events: {
		"click #toggle": "onClickToggle",
		"click #delete": "onClickDelete"
	},

	onClickDelete: function(){
		this.model.destroy();
	},

		// get the value, invert it, and store it in itself
	onClickToggle: function(){
		this.model.toggle();
		this.model.save();
		console.log(this.model.toJSON());
	},

	render: function(){
		this.$el.attr("id", this.model.id);
		
		this.$el.toggleClass("completed", this.model.get("completed"));

		var template = $("#todoItemTemplate").html();
		var html = Mustache.render(template, this.model.toJSON());
		this.$el.html(html);

		// // when not using a template
		// var checked = this.model.get("completed") ? "checked" : "";
		// // get value of completed property and if checked render checked attribute
		// this.$el.html("<input id='toggle' type='checkbox'" + checked +"></input>" + this.model.escape("title") + "<button id='delete'>'Delete'</button>");

		return this;
	}
})