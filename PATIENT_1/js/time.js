var container = document.getElementById('visualization');

var items = new vis.DataSet([]);

// Configuration for the Timeline
var options = {
	editable : false,
	zoomable:false
};

var images = [
	"https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/5-128.png",
 	"https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/12-128.png",
 	"https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/11-128.png",
 	"https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/4-128.png",
 	"https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/8-128.png",
 	"https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/1-128.png"
 ];

function getContent(_image, _title) {
	var content = '<img src="' + images[_image] + '" width="50" /><br/>' + _title;
	return content;
}

var counter = 100;
function addSampleCaseItems(_imageIndex, _items) {
	var moreItems = _items;
	//sample_case.doctor_notes;
	for (var i = 0; i < moreItems.length; i++) {
		var dt = new Date(moreItems[i].date);

		items.add([{
			id : ++counter,
			//content : '<img src="https://cdn2.iconfinder.com/data/icons/medical-icons-6/48/12-128.png" width="50" /><br/>Doctor Notes <br> Found some stains..',
			content : getContent(_imageIndex, moreItems[i].title),
			text : moreItems[i].doctor,
			comments : moreItems[i].comments,
			title : moreItems[i].title,
			start : moment(dt).format('YYYY-MM-DD'),
			attachment : moreItems[i].attachment
		}]);
	}
}

function populateSampleData() {
	addSampleCaseItems(0,sample_case.treatments);
	addSampleCaseItems(1,sample_case.doctor_notes);
	addSampleCaseItems(2,sample_case.pathology);
	addSampleCaseItems(3,sample_case.imaging);
	addSampleCaseItems(4,sample_case.labresults);
	addSampleCaseItems(5,sample_case.misc);
}

populateSampleData();

// Create a Timeline
var container = document.getElementById('docnotes_timeline');
var timeline = new vis.Timeline(container, items, options);

timeline.on('select', function(properties) {
	var itemId = properties.items[0];
	if (itemId === undefined) {
		log("Just a click");
	} else {
		var selectedItem = items.get(itemId);
		log(selectedItem.comments);
		log(selectedItem.title);
		$("#preview_frame").attr('src', selectedItem.attachment);
		$("#myModalLabel").html(selectedItem.title);
		$("#timeline_popup_data").html(selectedItem.comments);
		
		$('#timeline_item').modal('show');
	}
});

