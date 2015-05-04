var args = arguments[0] || {};



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