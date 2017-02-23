function log(msg) {
	console.log(msg);
}

function logs(msg) {
	console.log(JSON.stringify(msg));
}

function setupRoutes(_land) {

	Path.map("#/test").to(function() {
		$("#stage").hide().load("screens/horizontal_timeline.html").fadeIn('slow');
	});

	Path.map("#/all_experts").to(function() {
		$("#stage").hide().load("screens/all_experts.html").fadeIn('slow');
	});

	Path.map("#/expert_inbox").to(function() {
		$("#stage").hide().load("screens/provider_inbox.html").fadeIn('slow');
	});

	Path.map("#/home").to(function() {
		$("#stage").hide().load("screens/landing.html").fadeIn('slow');
		$('body').css('background-color', 'white');
	});
	Path.map("#/contact").to(function() {
		$("#stage").hide().load("screens/contact.html").fadeIn('slow');
	});

	Path.map("#/login").to(function() {
		$("#stage").hide().load("screens/login.html").fadeIn('slow');
		$("#my_account_link").hide();
	});

	Path.map("#/signup").to(function() {
		$("#stage").hide().load("screens/signup.html").fadeIn('slow');
	});

	Path.map("#/profile").to(function() {
		$("#stage").hide().load("screens/profile_settings.html").fadeIn('slow');
	});

	Path.map("#/my_cases").to(function() {
		$("#stage").hide().load("screens/my_cases.html").fadeIn('slow');
	});

	Path.map("#/logout").to(function() {
		$("#stage").hide().load("screens/landing.html").fadeIn('slow');
		$("#my_account_link").hide();
		$("#login_link").show();
	});

	Path.map("#/details/:name").to(function() {
		currentSelectionIndex = this.params['name'];
		$("#stage").hide().load("screens/details.html").fadeIn('slow');
	});

	// Case related
	Path.map("#/case").to(function() {
		$("#stage").hide().load("screens/case.html").fadeIn('slow');
	});
	Path.map("#/treatments").to(function() {
		$("#stage").hide().load("screens/treatments.html").fadeIn('slow');
	});
	Path.map("#/doctornotes").to(function() {
		$("#stage").hide().load("screens/doctornotes.html").fadeIn('slow');
	});
	Path.map("#/pathology").to(function() {
		$("#stage").hide().load("screens/pathology.html").fadeIn('slow');
	});
	Path.map("#/imaging_reports").to(function() {
		$("#stage").hide().load("screens/imaging_reports.html").fadeIn('slow');
	});
	Path.map("#/lab_reports").to(function() {
		$("#stage").hide().load("screens/lab_reports.html").fadeIn('slow');
	});
	Path.map("#/misc_reports").to(function() {
		$("#stage").hide().load("screens/misc_reports.html").fadeIn('slow');
	});

	Path.map("#/case_wizard").to(function() {
		$("#stage").hide().load("screens/vtab.html").fadeIn('slow');
	});
	Path.map("#/singlepageview").to(function() {
		$("#stage").hide().load("screens/single_page_view.html").fadeIn('slow');
	});
	Path.map("#/caseview").to(function() {
		$("#stage").hide().load("screens/case_view.html").fadeIn('slow');
	});

	Path.map("#/vertical_timeline").to(function() {
		$("#stage").hide().load("screens/fullscreen_timeline.html").fadeIn('slow');
	});

	Path.map("#/chatmessages").to(function() {
		$("#case_screen_stage").hide().load("screens/chatmessages.html").fadeIn('slow');
	});

	if (_land) {
		Path.root(_land);
	} else {
		Path.root("#/home");
	}

	Path.map("#/working").to(function() {
		$("#stage").hide().load("screens/single_page_header.html").fadeIn('slow');
	});

	Path.listen();
}
