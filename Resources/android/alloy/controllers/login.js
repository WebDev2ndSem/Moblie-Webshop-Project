function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId24(e) {
        if (e && e.fromAdapter) return;
        __alloyId24.opts || {};
        var models = __alloyId23.models;
        var len = models.length;
        var children = $.__views.__alloyId15.children;
        for (var d = children.length - 1; d >= 0; d--) $.__views.__alloyId15.remove(children[d]);
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = Ti.UI.createView({
                layout: "horizontal"
            });
            $.__views.__alloyId15.add(__alloyId18);
            var __alloyId20 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                text: "Hello, "
            });
            __alloyId18.add(__alloyId20);
            var __alloyId22 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                text: "undefined" != typeof __alloyId16.__transform["firstName"] ? __alloyId16.__transform["firstName"] : __alloyId16.get("firstName")
            });
            __alloyId18.add(__alloyId22);
        }
    }
    function openStats() {
        var statistics = Alloy.createController("statistics").getView();
        statistics.open();
    }
    function openHelp() {
        var getHelp = Alloy.createController("getHelp").getView();
        getHelp.open();
    }
    function openMyDev() {
        var myDevices = Alloy.createController("myDevices").getView();
        myDevices.open();
    }
    function logoutBut() {
        Ti.App.Properties.removeProperty("encodedUser");
        var index = Alloy.createController("index").getView();
        index.open();
    }
    function doLogin() {
        Alloy.Globals.authstr = "Basic " + Titanium.Utils.base64encode($.username.value + ":" + $.password.value);
        arguments[0] || {};
        var collection = Alloy.Collections.login;
        collection.config.headers.Authorization = Alloy.Globals.authstr;
        collection.fetch({
            success: function() {
                Ti.App.Properties.setString("encodedUser", "Basic " + Titanium.Utils.base64encode($.username.value + ":" + $.password.value));
                $.login.visible = false;
                $.menu.visible = true;
                $.loginError.visible = false;
                _.each(collection.models, function() {});
            },
            error: function() {
                $.login.visible = true;
                $.loginError.visible = true;
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("login");
    $.__views.loginView = Ti.UI.createView({
        backgroundColor: "white",
        id: "loginView"
    });
    $.__views.loginView && $.addTopLevelView($.__views.loginView);
    $.__views.__alloyId15 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId15"
    });
    $.__views.loginView.add($.__views.__alloyId15);
    var __alloyId23 = Alloy.Collections["login"] || login;
    __alloyId23.on("fetch destroy change add remove reset", __alloyId24);
    $.__views.login = Ti.UI.createView({
        layout: "vertical",
        id: "login",
        visible: "true"
    });
    $.__views.loginView.add($.__views.login);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        width: "300",
        height: "auto",
        image: "/logo.png",
        id: "__alloyId25"
    });
    $.__views.login.add($.__views.__alloyId25);
    $.__views.username = Ti.UI.createTextField({
        width: "60%",
        height: "40dp",
        borderRadius: "3dp",
        margin: "5dp",
        top: "10dp",
        borderColor: "#00aeef",
        textAlign: "center",
        color: "#000000",
        id: "username",
        hintText: "Username"
    });
    $.__views.login.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        width: "60%",
        height: "40dp",
        borderRadius: "3dp",
        margin: "5dp",
        top: "10dp",
        borderColor: "#00aeef",
        textAlign: "center",
        color: "#000000",
        id: "password",
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.login.add($.__views.password);
    $.__views.loginButton = Ti.UI.createButton({
        id: "loginButton",
        title: "Log In"
    });
    $.__views.login.add($.__views.loginButton);
    doLogin ? $.__views.loginButton.addEventListener("click", doLogin) : __defers["$.__views.loginButton!click!doLogin"] = true;
    $.__views.loginError = Ti.UI.createView({
        id: "loginError",
        visible: "false"
    });
    $.__views.loginView.add($.__views.loginError);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: "300",
        height: "50",
        color: "#000",
        text: "Please enter the correct username and password.",
        top: "10",
        backgroundColor: "grey",
        id: "__alloyId26"
    });
    $.__views.loginError.add($.__views.__alloyId26);
    $.__views.menu = Ti.UI.createView({
        layout: "vertical",
        id: "menu",
        visible: "false"
    });
    $.__views.loginView.add($.__views.menu);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        width: "300",
        height: "auto",
        image: "/logo.png",
        id: "__alloyId27"
    });
    $.__views.menu.add($.__views.__alloyId27);
    $.__views.StatsButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "StatsButton",
        title: "Statistics"
    });
    $.__views.menu.add($.__views.StatsButton);
    openStats ? $.__views.StatsButton.addEventListener("click", openStats) : __defers["$.__views.StatsButton!click!openStats"] = true;
    $.__views.HelpButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "HelpButton",
        title: "Get help"
    });
    $.__views.menu.add($.__views.HelpButton);
    openHelp ? $.__views.HelpButton.addEventListener("click", openHelp) : __defers["$.__views.HelpButton!click!openHelp"] = true;
    $.__views.MyDevButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "MyDevButton",
        title: "My Devices"
    });
    $.__views.menu.add($.__views.MyDevButton);
    openMyDev ? $.__views.MyDevButton.addEventListener("click", openMyDev) : __defers["$.__views.MyDevButton!click!openMyDev"] = true;
    $.__views.logoutBut = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "logoutBut",
        title: "Logout"
    });
    $.__views.menu.add($.__views.logoutBut);
    logoutBut ? $.__views.logoutBut.addEventListener("click", logoutBut) : __defers["$.__views.logoutBut!click!logoutBut"] = true;
    exports.destroy = function() {
        __alloyId23.off("fetch destroy change add remove reset", __alloyId24);
    };
    _.extend($, $.__views);
    if (Titanium.App.Properties.hasProperty("encodedUser")) {
        $.login.visible = false;
        $.menu.visible = true;
        $.loginError.visible = false;
    } else {
        $.login.visible = true;
        $.menu.visible = false;
    }
    __defers["$.__views.loginButton!click!doLogin"] && $.__views.loginButton.addEventListener("click", doLogin);
    __defers["$.__views.StatsButton!click!openStats"] && $.__views.StatsButton.addEventListener("click", openStats);
    __defers["$.__views.HelpButton!click!openHelp"] && $.__views.HelpButton.addEventListener("click", openHelp);
    __defers["$.__views.MyDevButton!click!openMyDev"] && $.__views.MyDevButton.addEventListener("click", openMyDev);
    __defers["$.__views.logoutBut!click!logoutBut"] && $.__views.logoutBut.addEventListener("click", logoutBut);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;