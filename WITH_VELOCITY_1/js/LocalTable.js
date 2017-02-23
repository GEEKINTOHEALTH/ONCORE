function LocalTable(_tableName) {
	// Simple store to deal with arrays
	// Depends on JQUERY & jStorage libs.
	var tableName = _tableName;
	var items = [];
	this.deleteRow = function(_id) {
		for ( i = 0; i < items.length; i++) {
			if (items[i].id == _id) {
				items.splice(i, 1);
				break;
			}
		}
	};
	this.findRow = function(_id) {
		var result = $.grep(items, function(e) {
			return e.id == _id;
		});
		return result[0];
	};
	this.addRow = function(_oneItem) {
		items.push(_oneItem);
	};
	this.getRows = function() {
		return items;
	};
	this.setRows = function(_rows) {
		items = _rows;
	};
	this.load = function() {
		var localTableRows = $.jStorage.get(tableName);
		if (localTableRows != null) {
			items = JSON.parse(localTableRows);
			console.log("Loaded " + items.length + " rows for " + _tableName);
		} else {
			console.log("No records found for table " + _tableName);
		}
	};
	this.save = function() {
		var sf = JSON.stringify(items);
		$.jStorage.set(tableName, sf);
		console.log("Saving table " + _tableName + " with " + items.length + " records.");
	};
	this.drop = function() {
		console.log("Deleting " + items.length + " records from " + _tableName);
		items = [];
		this.save();
	};
	this.truncate = function() {
		console.log("Destroying table " + _tableName + " with " + items.length + " records.");
		items = [];
		$.jStorage.deleteKey(tableName);
	};
}
