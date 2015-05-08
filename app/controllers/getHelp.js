var args = arguments[0] || {};
alert = require('alert');

// getHelp Function
function doGetHelp(e){
	Alloy.Globals.authstr = Titanium.App.Properties.getString('encodedUser');
	Alloy.Globals.problemDeviceId = $.problemDeviceId.value;
	Alloy.Globals.subject = $.subject.value;
	Alloy.Globals.comments = $.comments.value;
	
  	var args = arguments[0] || {};
	var collection = Alloy.Collections.getHelp;
	// SETTING THE HEADER PROPERLY
	collection.config.headers.Authorization = Alloy.Globals.authstr;
	collection.config.headers.problemDeviceId = Alloy.Globals.problemDeviceId;
	collection.config.headers.subject = Alloy.Globals.subject;
	collection.config.headers.comments = Alloy.Globals.comments;
//	collection.save();
	collection.fetch({ 
	    success : function(){
	    	alert('We will contact you as soon as possible.', 'Success!', function () { CloseWindow(); });
	        _.each(collection.models, function(element, index, list){
	            /*element.attributes.title = element.attributes.node_title + " for " + element.attributes.productprice;
	            element.attributes.productid = element.cid;
	            element.attributes.description = element.attributes.body;*/
	            // We are looping through the returned models from the remote REST API
	            // Implement your custom logic here
	            //alert('Thank you for informing us! We will return to you soon!');

				

				//CloseWindow();
	        });
	    },
	    error : function(){
				alert('There seems to be a problem. please try again later!');
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