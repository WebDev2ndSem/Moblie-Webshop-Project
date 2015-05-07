var args = arguments[0] || {};

// getHelp Function
function doGetHelp(e){
	Alloy.Globals.authstr = Titanium.App.Properties.getString('encodedUser');
	Alloy.Globals.problemDeviceId = $.problemDeviceId.value;
	Alloy.Globals.problemDeviceId = $.subject.value;
	Alloy.Globals.problemDeviceId = $.comments.value;

  	var args = arguments[0] || {};
	var collection = Alloy.Collections.getHelp;
	// SETTING THE HEADER PROPERLY
	collection.config.headers.Authorization = Alloy.Globals.authstr;
	collection.config.headers.problemDeviceId = Alloy.Globals.problemDeviceId;
	collection.config.headers.subject = Alloy.Globals.subject;
	collection.config.headers.comments = Alloy.Globals.comments;
	collection.save();
	collection.fetch({ 
	    success : function(){
	        _.each(collection.models, function(element, index, list){
	            /*element.attributes.title = element.attributes.node_title + " for " + element.attributes.productprice;
	            element.attributes.productid = element.cid;
	            element.attributes.description = element.attributes.body;*/
	            // We are looping through the returned models from the remote REST API
	            // Implement your custom logic here
	        });
	    },
	    error : function(){

	    }
	});
};

// Destroy view on close
$.closeBtn.addEventListener('click', function() {
   CloseWindow();
});

function CloseWindow()
{
	 $.getHelp.close();
}

// Free model-view data binding resources when this
// view-controller closes
$.getHelp.addEventListener('close', function() {
    $.destroy();
});


// Open
$.getHelp.open() ;