/**
 * @author vamsik
 */
$('body').bind('home-screen', function(e, data) {
	$("#stage").load("screens/home.html");
});

$('body').bind('details-screen', function(e, data) {
	$("#stage").load("screens/my_cases.html");
	//$("#fullscreen_stage").load("screens/details.html");
	//$('.close').show();
	//showFullScreen();
});

$('body').bind('search-screen', function(e, data) {
	$("#fullscreen_stage").load("screens/search_form2.html");
	$('.close').show();
	showFullScreen();
});

$('body').bind('logout', function(e, data) {
	window.location.href = "#/home";
});

$('body').bind('full_profile_view', function(e, data) {
	$("#stage").load("screens/single_profile.html");
});

