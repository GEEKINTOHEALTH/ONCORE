var vitals = {};

vitals.pulse = vitals.pulse || 1;
vitals.glucose = vitals.glucose || 1;
vitals.oxygen = vitals.oxygen || 1;
vitals.ecg = vitals.ecg || 1;
vitals.airflow = vitals.airflow || 1;
vitals.temp = vitals.temp || 1;
vitals.conductance = vitals.conductance || 1;
vitals.resistance = vitals.resistance || 1;
vitals.emg = vitals.emg || 1;
vitals.systolic_bp = vitals.systolic_bp || 1;
vitals.diastolic_bp = vitals.diastolic_bp || 1;
vitals.height = vitals.height || 1;
vitals.weight = vitals.weight || 1;
vitals.bmi = vitals.bmi || 1;

function fixScrolling() {
	var stuff = {};
	$('#center-body').on('touchstart', stuff, function(e) {
		e.data.max = this.scrollHeight - this.offsetHeight;
		e.data.y = e.originalEvent.pageY;
	}).on('touchmove', stuff, function(e) {
		var dy = e.data.y - e.originalEvent.pageY;
		// if scrolling up and at the top, or down and at the bottom
		if ((dy < 0 && this.scrollTop < 1) || (dy > 0 && this.scrollTop >= e.data.max)) {
			e.preventDefault();
		};
	});
}


$(document).ajaxStart(function() {
	NProgress.start();
});

$(document).ajaxStop(function() {
	NProgress.done();
});

$('body').bind('logged_out', function(e, data) {
	logout();
});

$('body').bind('search-by-string', function(e, data) {
	$.ajax({
		type : 'GET',
		url : base + '/search/patient/' + data,
		success : function(response) {
			if (response.ack == "success") {
				$('#fullscreenElement').removeClass('open');
				localStorage.PATIENT_DATA = JSON.stringify(response.data[0]);
				window.location.href = "#/new_patient_profile";
			} else {
				$('#error').text('no patient info found..');
			}
		},
		error : function(failure) {
			console.log(failure);
		}
	});
});

function showFullScreen() {
	$('#fullscreenElement').addClass('open');
};

$('.close').on('click', function(event) {
	$('#fullscreenElement').removeClass('open');
});

function logout() {
	$.getJSON(base + '/logout/' + localStorage.SESSION_TOKEN, function(response) {//$.jStorage.get('SESSION_TOKEN')
		if (response.ack == 'success') {
			localStorage.SESSION_TOKEN = "";
			localStorage.PROFILEID = "";
		} else {
			alert('no session found..redirecting to login page');
		}
		window.location.href = '#/login';
	});
}

function showManualCaptureScreen() {
	$("#fullscreen_stage").load("screens/manual_capture.html");
	showFullScreen();
}

function showSearchScreen() {
	$("#fullscreen_stage").load("screens/search.html");
	showFullScreen();
}

// TIMELINE STUFF HERE

var options = {
	width : "100%",
	height : "99%",
	editable : true,
	margin : {
		item : 20,
		axis : 40
	},
	showCurrentTime : false,
	onAdd : function(item, callback) {
		if (item.content) {
			console.log("onadd");
		} else {
			callback(null);
		}
	},
	onUpdate : function(item, callback) {
		if (item) {
			edit(item.id);
		} else {
			callback(null);
		}
	},
	onRemove : function(item, callback) {
		prettyConfirm('Remove item', 'Do you really want to remove item ' + item.content + '?', function(ok) {
			if (ok) {
				destroy(item.id);
				callback(item);
			} else {
				callback(null);
			}
		});
	},
	template : function(item) {
		return Mustache.to_html(template, item);
	}
};
function prettyConfirm(title, text, callback) {
	swal({
		title : title,
		text : text,
		type : 'warning',
		showCancelButton : true,
		confirmButtonColor : "#DD6B55"
	}, callback);
}

var timeline = undefined;
var items = undefined;
var lastSelection = -1;

// SCREEN TRIGGERS.
$('body').bind('search-screen', function(e, data) {
	$("#fullscreen_stage").load("screens/search_form.html");
	showFullScreen();
});

$('body').bind('full_profile_view', function(e, data) {
	$("#stage").load("screens/single_profile.html");
});

$('body').bind('image-details-screen', function(e, data) {
	$("#fullscreen_stage").load("screens/image_details.html");
	showFullScreen();
});

// NEW SCREENS FOR UCSF.
$('body').bind('clinical-info-screen', function(e, data) {
	$("#stage").load("screens/exported/clinical_info.html");
});

$('body').bind('tcell-summary-screen', function(e, data) {
	$("#stage").load("screens/exported/TCR.html");
});

$('body').bind('rna-sequence-screen', function(e, data) {
	$("#stage").load("screens/exported/Protoaray.html");
});

$('body').bind('tcell-panel-screen', function(e, data) {
	$("#stage").load("screens/exported/tcell_panel.html");
});


