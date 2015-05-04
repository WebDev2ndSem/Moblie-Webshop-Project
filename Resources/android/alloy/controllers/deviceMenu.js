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
        var orderPaper = Alloy.createController("orderPaper").getView();
        orderPaper.open();
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
    $.__views.detailView = Ti.UI.createScrollView({
        id: "detailView",
        layout: "vertical"
    });
    $.__views.detailWindow.add($.__views.detailView);
    $.__views.__alloyId5 = Ti.UI.createImageView({
        width: "99%",
        height: "40%",
        id: "__alloyId5"
    });
    $.__views.detailView.add($.__views.__alloyId5);
    $.__views.description = Ti.UI.createLabel({
        id: "description"
    });
    $.__views.detailView.add($.__views.description);
    $.__views.shopButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "shopButton",
        title: "Order Paper"
    });
    $.__views.detailView.add($.__views.shopButton);
    openShop ? $.__views.shopButton.addEventListener("click", openShop) : __defers["$.__views.shopButton!click!openShop"] = true;
    $.__views.helpButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "helpButton",
        title: "Get Help"
    });
    $.__views.detailView.add($.__views.helpButton);
    $.__views.statsButton = Ti.UI.createButton({
        width: "60%",
        height: "50dp",
        top: "10dp",
        borderRadius: "3dp",
        backgroundColor: "#00aeef",
        bordercolor: "#bbbbbb",
        id: "statsButton",
        title: "Device Statistics"
    });
    $.__views.detailView.add($.__views.statsButton);
    openDeviceStats ? $.__views.statsButton.addEventListener("click", openDeviceStats) : __defers["$.__views.statsButton!click!openDeviceStats"] = true;
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
    var __alloyId6 = function() {
        $.__alloyId5.image = _.isFunction($.Device.transform) ? $.Device.transform()["image"] : _.template("<%=Device.image%>", {
            Device: $.Device.toJSON()
        });
        $.description.text = _.isFunction($.Device.transform) ? $.Device.transform()["name"] : _.template("<%=Device.name%>", {
            Device: $.Device.toJSON()
        });
    };
    $.Device.on("fetch change destroy", __alloyId6);
    exports.destroy = function() {
        $.Device.off("fetch change destroy", __alloyId6);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.Device.set(args.data.attributes);
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.detailWindow.addEventListener("close", function() {
        $.destroy();
    });
    $.helpButton.addEventListener("click", function() {
        var model = Alloy.Collections.myDevices.getByCid("deviceId");
        var deviceHelpController = Alloy.createController("deviceHelp", {
            data: model
        });
        deviceHelpController.getView().open({
            modal: true
        });
    });
    __defers["$.__views.shopButton!click!openShop"] && $.__views.shopButton.addEventListener("click", openShop);
    __defers["$.__views.statsButton!click!openDeviceStats"] && $.__views.statsButton.addEventListener("click", openDeviceStats);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;