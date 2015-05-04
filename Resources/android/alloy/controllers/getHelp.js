function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function CloseWindow() {
        $.getHelp.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "getHelp";
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
    $.__views.getHelp = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "getHelp"
    });
    $.__views.getHelp && $.addTopLevelView($.__views.getHelp);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.getHelp.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "Let us help you",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTextField({
        widht: "60%",
        height: "20dp",
        top: "5dp",
        borderColor: "#bbbbbb",
        hintText: "device",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTextField({
        widht: "60%",
        height: "20dp",
        top: "5dp",
        borderColor: "#bbbbbb",
        hintText: "subject",
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTextArea({
        widht: "60%",
        height: "60dp",
        top: "5dp",
        borderColor: "#bbbbbb",
        hintText: "comments",
        id: "__alloyId11"
    });
    $.__views.__alloyId7.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "horizontal",
        width: "100%",
        height: "50dp",
        top: "5dp",
        id: "__alloyId12"
    });
    $.__views.__alloyId7.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        width: "30%",
        height: "50dp",
        top: "5dp",
        right: "5dp",
        bottom: "5dp",
        left: "5dp",
        borderRadius: "3dp",
        backgroundColor: "#62C462",
        bordercolor: "#bbbbbb",
        borderColor: "#62C462",
        title: "CALL ME",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.closeBtn = Ti.UI.createButton({
        width: "30%",
        height: "50dp",
        top: "5dp",
        right: "5dp",
        bottom: "5dp",
        left: "5dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "closeBtn",
        title: "Back"
    });
    $.__views.__alloyId12.add($.__views.closeBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.getHelp.addEventListener("close", function() {
        $.destroy();
    });
    $.getHelp.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;