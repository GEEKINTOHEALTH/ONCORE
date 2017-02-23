Path.map("#/dashboard").to(function() {
	var screen = App.Screens.get("screens/vtab.html");
	//$("#stage").load("screens/vtab.html");
	$("#stage").html(screen);
	$("#title_text").html("STEPS");
});

Path.map("#/singlepageview").to(function() {
	$("#stage").load("screens/single_page_view.html");
	//var screen = App.Screens.get("screens/single_page_view.html");
	//$("#stage").html(screen);
	$("#title_text").html("HEALTH REPORT");
});

Path.map("#/myusers").to(function() {
	var screen = App.Screens.get("screens/myusers.html");
	$("#stage").html(screen);
	$("#title_text").html("MY USER");
});
Path.map("#/profile").to(function() {
	var screen = App.Screens.get("screens/profile.html");
	$("#stage").html(screen);
	$("#title_text").html("PROFILE");
});
Path.map("#/single").to(function() {
	$("#stage").load("screens/single_profile.html");
	$("#title_text").html("SEARCh");
});
Path.root("#/home");
Path.listen();

