// Ti.API.info(Titanium.App.Properties.getString('encodedUser'));
	var args = arguments[0] || {};
	var collection = Alloy.Collections.statistics;
	// SETTING THE HEADER PROPERLY
	Alloy.Globals.authstr = Titanium.App.Properties.getString('encodedUser');
	collection.config.headers.Authorization = Alloy.Globals.authstr;
	collection.fetch({ 
	    success : function(){
	    	Ti.API.info('success');
	    	
	        _.each(collection.models, function(element, index, list){

	            // We are looping through the returned models from the remote REST API
	            // Implement your custom logic here
	        });
	    },
	    error : function(){
		    Ti.API.info('fail');

   

	    }
	});
	


// close the window when button is clicked
$.closeBtn.addEventListener('click', function() {
   CloseWindow();
});

function CloseWindow()
{
	 $.statistics.close();
}

// Free model-view data binding resources when this
// view-controller closes
$.statistics.addEventListener('close', function() {
    $.destroy();
});




$.statistics.open() ;