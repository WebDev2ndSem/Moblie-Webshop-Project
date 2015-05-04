var args = arguments[0] || {};
//Ti.API.info(Alloy.Controller.myDevices._byId('deviceName'));
Ti.API.info(args.model);

$.Device.set(args.data.attributes);
//$.Device.set(args.model);
Ti.API.info($.Device);
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
	var statistics=Alloy.createController('statistics').getView();
    statistics.open();
};

function openDeviceHelp(e) {
	var statistics=Alloy.createController('statistics').getView();
    statistics.open();
};

function openDeviceStats(e) {
	var statistics=Alloy.createController('statistics').getView();
    statistics.open();
};
