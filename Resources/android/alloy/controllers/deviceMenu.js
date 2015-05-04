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
    $.__views.__alloyId0 = Ti.UI.createImageView({
        width: "99%",
        height: "40%",
        id: "__alloyId0"
    });
    $.__views.detailView.add($.__views.__alloyId0);
    $.__views.description = Ti.UI.createLabel({
        id: "description"
    });
    $.__views.detailView.add($.__views.description);
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
    var __alloyId1 = function() {
        $.__alloyId0.image = _.isFunction($.Device.transform) ? $.Device.transform()["image"] : _.template("<%=Device.image%>", {
            Device: $.Device.toJSON()
        });
        $.description.text = _.isFunction($.Device.transform) ? $.Device.transform()["name"] : _.template("<%=Device.name%>", {
            Device: $.Device.toJSON()
        });
    };
    $.Device.on("fetch change destroy", __alloyId1);
    exports.destroy = function() {
        $.Device.off("fetch change destroy", __alloyId1);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info(args.model);
    $.Device.set(args.data.attributes);
    Ti.API.info($.Device);
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