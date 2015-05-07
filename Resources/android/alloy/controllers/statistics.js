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
    this.__controllerPath = "statistics";
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
    $.__views.statistics = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "statistics"
    });
    $.__views.statistics && $.addTopLevelView($.__views.statistics);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        text: "Statistics",
        top: "10dp",
        id: "__alloyId44"
    });
    $.__views.statistics.add($.__views.__alloyId44);
    $.__views.mainView = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "20dp",
        id: "mainView",
        layout: "horizontal"
    });
    $.__views.statistics.add($.__views.mainView);
    $.__views.__alloyId45 = Ti.UI.createView({
        width: "80%",
        height: "25%",
        top: "20dp",
        borderColor: "#bbbbbb",
        layout: "vertical",
        id: "__alloyId45"
    });
    $.__views.mainView.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        text: "Daily payments:",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        width: "80%",
        height: "25%",
        top: "20dp",
        borderColor: "#bbbbbb",
        layout: "vertical",
        id: "__alloyId47"
    });
    $.__views.mainView.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        text: "Weekly payments:",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        width: "80%",
        height: "25%",
        top: "20dp",
        borderColor: "#bbbbbb",
        layout: "vertical",
        id: "__alloyId49"
    });
    $.__views.mainView.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        text: "Monthly payments:",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.closeBtn = Ti.UI.createButton({
        width: "100dp",
        height: "40dp",
        backgroundColor: "#00aeef",
        bottom: "10dp",
        id: "closeBtn",
        title: "Back"
    });
    $.__views.statistics.add($.__views.closeBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.statistics.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;