// Ti.API.info(Titanium.App.Properties.getString('encodedUser'));
	var args = arguments[0] || {};
	var collection = Alloy.Collections.myDevices;
	// SETTING THE HEADER PROPERLY
	Alloy.Globals.authstr = Titanium.App.Properties.getString('encodedUser');
	collection.config.headers.Authorization = Alloy.Globals.authstr;
	collection.fetch({ 
	    success : function(){
	    	Ti.API.info('success');
	    	
	        _.each(collection.models, function(element, index, list){
	            element.attributes.title = element.attributes.deviceName + " for " + element.attributes.deviceStatus;
	            element.attributes.deviceId = element.cid;
	            element.attributes.name = element.attributes.deviceName;
	            element.attributes.image = element.attributes.deviceImage;
	            // We are looping through the returned models from the remote REST API
	            // Implement your custom logic here
	        });
	    },
	    error : function(){
		    Ti.API.info('fail');

   

	    }
	});
	
$.myDevicesTable.addEventListener('click', function(_event) {
    // get the correct model
    var model =
        Alloy.Collections.myDevices.getByCid(_event.rowData.deviceId);
    // create the controller and pass in the model
    var deviceMenuController = Alloy.createController('deviceMenu', {
        data : model
    });
    // get view returns the root view when no view ID is provided
    deviceMenuController.getView().open({
        modal : true
    });
});

// close the window when button is clicked
$.closeBtn.addEventListener('click', function() {
   CloseWindow();
});

function CloseWindow()
{
	 $.myDevices.close();
}

// Free model-view data binding resources when this
// view-controller closes
$.myDevices.addEventListener('close', function() {
    $.destroy();
});




$.myDevices.open() ;