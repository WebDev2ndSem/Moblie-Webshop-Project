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
    this.__controllerPath = "deviceOptions";
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
    $.__views.deviceOptions = Ti.UI.createWindow({
        id: "deviceOptions"
    });
    $.__views.deviceOptions && $.addTopLevelView($.__views.deviceOptions);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.deviceOptions.add($.__views.__alloyId0);
    $.__views.StatsButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "StatsButton",
        title: "buy Paper"
    });
    $.__views.__alloyId0.add($.__views.StatsButton);
    openShop ? $.__views.StatsButton.addEventListener("click", openShop) : __defers["$.__views.StatsButton!click!openShop"] = true;
    $.__views.HelpButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "HelpButton",
        title: "Get Help"
    });
    $.__views.__alloyId0.add($.__views.HelpButton);
    openDeviceHelp ? $.__views.HelpButton.addEventListener("click", openDeviceHelp) : __defers["$.__views.HelpButton!click!openDeviceHelp"] = true;
    $.__views.MyDevButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "MyDevButton",
        title: "Device - statistics"
    });
    $.__views.__alloyId0.add($.__views.MyDevButton);
    openDeviceStats ? $.__views.MyDevButton.addEventListener("click", openDeviceStats) : __defers["$.__views.MyDevButton!click!openDeviceStats"] = true;
    $.__views.closeBtn = Ti.UI.createButton({
        id: "closeBtn",
        title: "Back"
    });
    $.__views.deviceOptions.add($.__views.closeBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.deviceOptions.open();
    __defers["$.__views.StatsButton!click!openShop"] && $.__views.StatsButton.addEventListener("click", openShop);
    __defers["$.__views.HelpButton!click!openDeviceHelp"] && $.__views.HelpButton.addEventListener("click", openDeviceHelp);
    __defers["$.__views.MyDevButton!click!openDeviceStats"] && $.__views.MyDevButton.addEventListener("click", openDeviceStats);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;