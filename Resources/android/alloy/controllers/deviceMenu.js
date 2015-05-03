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
        $.detailWindow.close();
    }
    function openShop() {
        var statistics = Alloy.createController("statistics").getView();
        statistics.open();
    }
    function openDeviceHelp() {
        var statistics = Alloy.createController("statistics").getView();
        statistics.open();
    }
    function openDeviceStats() {
        var statistics = Alloy.createController("statistics").getView();
        statistics.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "deviceMenu";
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
    $.Device = Alloy.createModel("myDevices");
    $.__views.detailWindow = Ti.UI.createWindow({
        id: "detailWindow",
        model: "$.Device"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    CloseWindow ? $.__views.detailWindow.addEventListener("click", CloseWindow) : __defers["$.__views.detailWindow!click!CloseWindow"] = true;
    $.__views.detailView = Ti.UI.createScrollView({
        id: "detailView",
        layout: "vertical"
    });
    $.__views.detailWindow.add($.__views.detailView);
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
    $.__views.detailView.add($.__views.StatsButton);
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
    $.__views.detailView.add($.__views.HelpButton);
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
    $.__views.detailView.add($.__views.MyDevButton);
    openDeviceStats ? $.__views.MyDevButton.addEventListener("click", openDeviceStats) : __defers["$.__views.MyDevButton!click!openDeviceStats"] = true;
    $.__views.closeBtn = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "closeBtn",
        title: "Back"
    });
    $.__views.detailView.add($.__views.closeBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.detailWindow.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.detailWindow!click!CloseWindow"] && $.__views.detailWindow.addEventListener("click", CloseWindow);
    __defers["$.__views.StatsButton!click!openShop"] && $.__views.StatsButton.addEventListener("click", openShop);
    __defers["$.__views.HelpButton!click!openDeviceHelp"] && $.__views.HelpButton.addEventListener("click", openDeviceHelp);
    __defers["$.__views.MyDevButton!click!openDeviceStats"] && $.__views.MyDevButton.addEventListener("click", openDeviceStats);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;