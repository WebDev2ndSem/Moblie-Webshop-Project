var args = arguments[0] || {};

alert(args.deviceId);
//$.Device.set(args.data.attributes);
//$.Device.set(args.model);





// Destroy view on close
$.closeBtn.addEventListener('click', function() {
   CloseWindow();
});

function CloseWindow()
{
	 $.deviceHelp.close();
}

// Free model-view data binding resources when this
// view-controller closes
$.deviceHelp.addEventListener('close', function() {
    $.destroy();
});


// Open deviceHelp view
$.deviceHelp.open();
