var args = arguments[0] || {};


//$.Device.set(args.data.attributes);

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