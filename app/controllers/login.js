/* 
 	If the user has logged in successfully and encodedUser is saved we bypass the login screen. The encodedUser can be only removed if 
	a) the user logs out via the application
	b) the user clears the data on the application via settings->apps
	c) the user uninstalls the application
 */ 
if (Titanium.App.Properties.hasProperty('encodedUser')){
//	Ti.API.info(Titanium.App.Properties.getString('encodedUser'));
	$.login.visible = false;
	$.menu.visible = true;
	$.loginError.visible = false;
} else {
	$.login.visible = true;
	$.menu.visible = false;
}

// MENU REDIRECTS

function openStats(e) {
	var statistics=Alloy.createController('statistics').getView();
    statistics.open();
};
function openHelp(e) {
	var getHelp=Alloy.createController('getHelp').getView();
    getHelp.open();
};
function openMyDev(e) {
	var myDevices=Alloy.createController('myDevices').getView();
    myDevices.open();
};

function logoutBut(e) {
	Ti.App.Properties.removeProperty('encodedUser');
	var index=Alloy.createController('index').getView();
    index.open();
};

// INITIAL Login FUNCTION
function doLogin(e){
	
	Alloy.Globals.authstr = 'Basic ' + Titanium.Utils.base64encode($.username.value + ':' + $.password.value);

  	var args = arguments[0] || {};
	var collection = Alloy.Collections.login;
	// SETTING THE HEADER PROPERLY
	collection.config.headers.Authorization = Alloy.Globals.authstr;
	collection.fetch({ 
	    success : function(){
	    	Ti.App.Properties.setString('encodedUser', 'Basic ' + Titanium.Utils.base64encode($.username.value + ':' + $.password.value));
	    	$.login.visible = false;
	    	$.menu.visible = true;
	    	$.loginError.visible = false;
	        _.each(collection.models, function(element, index, list){
	            /*element.attributes.title = element.attributes.node_title + " for " + element.attributes.productprice;
	            element.attributes.productid = element.cid;
	            element.attributes.description = element.attributes.body;*/
	            // We are looping through the returned models from the remote REST API
	            // Implement your custom logic here
	        });
	    },
	    error : function(){
		    $.login.visible = true;
		    $.loginError.visible = true;

   

	    }
	});
};