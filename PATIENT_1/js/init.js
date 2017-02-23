var sessionManager=null;
function init() {
	var blW = 100;
	var blH = 50;
	$.blockUI.defaults.message = '<div class="msg"><br/>Loading</div>';

	var blCSS = {
		width : blW + 'px',
		height : blH + 'px',
		top : '50%',
		left : '50%',
		margin : (-blW / 2) + 'px 0 0 ' + (-blH / 2) + 'px',
	};
	$.blockUI.defaults.css = blCSS;
	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
	
	
	// Global session manager.
	sessionManager = new SessionManager();
}
