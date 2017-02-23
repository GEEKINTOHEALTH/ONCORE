Path.map("#/home").to(function() {
	$("#stage").load("screens/home.html");
	$("#title_text").html("HOME");
});
Path.map("#/dashboard").to(function() {
	var screen = App.Screens.get("screens/dashboard.html");
	$("#stage").html(screen);
	$("#title_text").html("DASHBOARD");
});
Path.map("#/mypatients").to(function() {
	var screen = App.Screens.get("screens/mypatients.html");
	$("#stage").html(screen);
	$("#title_text").html("MY PATIENTS");
});
Path.map("#/profile").to(function() {
	var screen = App.Screens.get("screens/profile.html");
	$("#stage").html(screen);
	$("#title_text").html("PROFILE");
});
Path.map("#/search").to(function() {
	App.SearchController.render();
	$("#title_text").html("SEARCh");
});

Path.map("#/onepatient").to(function() {
	$("#stage").load("screens/onepatient.html");
	$("#title_text").html("Patient View");
});

Path.root("#/home");
Path.listen();

