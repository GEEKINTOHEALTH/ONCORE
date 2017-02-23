var App = {};
$(document.body).on('click', '.list-group-item', function() {
	App.Events.emit('hide-side-nav');
});

App.Screens = {
	loadedScreens : [],
	get : function(screen_name) {

		if (!this.loadedScreens[screen_name]) {
			this.loadExternal(screen_name);
		}

		return this.loadedScreens[screen_name].layout;
	},

	loadExternal : function(url) {
		var parent = this;
		$.ajax({
			url : url,
			async : false,
			success : function(data) {
				var newScreen = {
					screen : url,
					layout : data
				};
				parent.loadedScreens[url] = newScreen;
			}
		});
	}
};

// Global Event handler
App.Events = {
	emit : function(event_name, event_payload) {
		console.log("PUBED");
		$('body').trigger(event_name, event_payload);
	},
	listen : function(event_name, callback) {
		$('body').bind(event_name, function(e, data) {
			callback(data);
		});
	}
};

App.MenuController = {

	showingMenu : false,
	showSideNav : function() {
		$("#main").velocity({
			left : 250
		}, {
			duration : 300,
			easing : "easeInOut"
		});
		this.showingMenu = true;
	},
	hideSideNav : function() {
		$("#main").velocity({
			left : 0
		}, {
			duration : 300,
			easing : "easeInOut"
		});
		this.showingMenu = false;
	},
	toggleNav : function() {
		if (!this.showingMenu) {
			this.showSideNav();
		} else {
			this.hideSideNav();
		}
	}
};

App.Events.listen("hide-side-nav", function() {
	App.MenuController.hideSideNav();
});
App.Events.listen("show-side-nav", function() {
	App.MenuController.showSideNav();
});

