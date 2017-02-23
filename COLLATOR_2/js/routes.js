Path.map("#/single-profile").to(function() {
	$("#stage").load("screens/single_profile.html");
});

Path.map("#/home").to(function() {
	$("#stage").load("screens/home.html");
});

Path.root("#/home");
Path.listen();

