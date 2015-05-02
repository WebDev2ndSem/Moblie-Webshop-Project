function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.getHelp.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Let us help you",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createTextField({
        widht: "60%",
        height: "20dp",
        top: "5dp",
        borderColor: "#bbbbbb",
        hintText: "device",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTextField({
        widht: "60%",
        height: "20dp",
        top: "5dp",
        borderColor: "#bbbbbb",
        hintText: "subject",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createTextArea({
        widht: "60%",
        height: "60dp",
        top: "5dp",
        borderColor: "#bbbbbb",
        hintText: "comments",
        id: "__alloyId6"
    });
    $.__views.__alloyId2.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        width: "100dp",
        height: "100dp",
        borderRadius: "45dp",
        border: "solid",
        borderColor: "#bbbbbb",
        backgroundColor: "#00aeef",
        color: "white",
        title: "CALL ME",
        id: "__alloyId7"
    });
    $.__views.__alloyId2.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.getHelp.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;