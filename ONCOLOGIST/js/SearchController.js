App.SearchController = {
	data : [],
	handleActions : function(action) {
		alert("Fired");
	},
	bindListener : function() {
		App.Events.listen("SEARCH_ACTIONS", this.handleActions);
	},
	render : function() {
		var screen = App.Screens.get("screens/search.html");
		$("#stage").html(screen);
	}
};
