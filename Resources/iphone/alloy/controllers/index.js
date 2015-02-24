function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClick() {
        var win2 = Alloy.createController("win2").getView();
        win2.open();
    }
    function doLogin() {
        Cloud.Users.login({
            login: $.username.value,
            password: $.password.value
        }, function(e) {
            if (e.success) {
                var user = e.users[0];
                var win2 = Alloy.createController("win2").getView();
                win2.open();
                alert("Success:\nid: " + user.id + "\nsessionId: " + Cloud.sessionId + "\nfirst name: " + user.first_name + "\nlast name: " + user.last_name);
            } else alert("Error:\n" + (e.error && e.message || JSON.stringify(e)));
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#0099FF",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "20dp",
        font: {
            fontSize: 12
        },
        text: "Click to open a new window",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.__alloyId0 = Ti.UI.createImageView({
        image: "http://simpleicon.com/wp-content/uploads/lock-2-256x256.png",
        width: "128",
        top: "30",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.username = Ti.UI.createTextField({
        top: "10dp",
        color: "#336699",
        backgroundColor: "#fff",
        height: "60dp",
        width: "300dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "10dp",
        hintText: "Username",
        id: "username"
    });
    $.__views.index.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        top: "10dp",
        color: "#336699",
        backgroundColor: "#fff",
        height: "60dp",
        width: "300dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "10dp",
        passwordMask: true,
        hintText: "Password",
        id: "password"
    });
    $.__views.index.add($.__views.password);
    $.__views.login = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        layout: "horizontal",
        color: "#FFF",
        title: "Login",
        id: "login"
    });
    $.__views.index.add($.__views.login);
    doLogin ? $.__views.login.addEventListener("click", doLogin) : __defers["$.__views.login!click!doLogin"] = true;
    $.__views.signup = Ti.UI.createButton({
        top: "10dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        layout: "horizontal",
        color: "#FFFF66",
        title: "Sign Up",
        id: "signup"
    });
    $.__views.index.add($.__views.signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    var Cloud = require("ti.cloud");
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.login!click!doLogin"] && $.__views.login.addEventListener("click", doLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;