var SessionManager = function() {
	this.set = function(key, value) {
		var sf = JSON.stringify(value);
		$.jStorage.set(key, sf);
	};
	this.get = function(key) {
		var val = $.jStorage.get(key);
		var jsObj = JSON.parse(val);
		return jsObj;
	};
	this.delete = function(key) {
		$.jStorage.deleteKey(key);
	};
}; 