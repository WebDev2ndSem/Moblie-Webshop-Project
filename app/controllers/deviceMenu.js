var args = arguments[0] || {};
//Ti.API.info(Alloy.Controller.myDevices._byId('deviceName'));


$.Device.set(args.data.attributes);
//$.Device.set(args.model);

//Ti.API.info(name);

// close the window when button is clicked
$.closeBtn.addEventListener('click', function() {
   CloseWindow();
});

function CloseWindow()
{
	 $.detailWindow.close();
}

// Free model-view data binding resources when this
// view-controller closes
$.detailWindow.addEventListener('close', function() {
    $.destroy();
});

function openShop(e) {
	var orderPaper=Alloy.createController('orderPaper').getView();
    orderPaper.open();
};

/*function openDeviceHelp(e) {
	var statistics=Alloy.createController('statistics').getView();
    statistics.open();
};*/

function openDeviceStats(e) {
	var statistics=Alloy.createController('statistics').getView();
    statistics.open();
};

$.helpButton.addEventListener('click', function(deviceId) {
    // get the correct model
    var model =
        Alloy.Collections.myDevices.getByCid('deviceId');
    // create the controller and pass in the model
    var deviceHelpController = Alloy.createController('deviceHelp', {
        data : model
    });
    // get view returns the root view when no view ID is provided
    deviceHelpController.getView().open({
        modal : true
    });
});
