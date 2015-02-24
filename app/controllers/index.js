function doClick(e) {
    //alert($.label.text);
    var win2=Alloy.createController('win2').getView();
    win2.open();
}

$.index.open();

var Cloud = require('ti.cloud');

function doLogin(e)
{
	Cloud.Users.login({
	    login: $.username.value,
	    password: $.password.value
	}, function (e) {
	    if (e.success) {
	        var user = e.users[0];
	        
	        var win2=Alloy.createController('win2').getView();
    		win2.open();
	        
	        alert('Success:\n' +
	            'id: ' + user.id + '\n' +
	            'sessionId: ' + Cloud.sessionId + '\n' +
	            'first name: ' + user.first_name + '\n' +
	            'last name: ' + user.last_name);
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
};