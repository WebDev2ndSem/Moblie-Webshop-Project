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
        id: "detailView"
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
    $.__views.closeBtn = Ti.UI.createButton({
        id: "closeBtn",
        title: "Back"
    });
    $.__views.detailView.add($.__views.closeBtn);
    var __alloyId1 = function() {
        $.__alloyId0.image = _.isFunction($.Device.transform) ? $.Device.transform()["deviceImage"] : _.template("<%=Device.deviceImage%>", {
            Device: $.Device.toJSON()
        });
        $.description.text = _.isFunction($.Device.transform) ? $.Device.transform()["deviceName"] : _.template("<%=Device.deviceName%>", {
            Device: $.Device.toJSON()
        });
    };
    $.Device.on("fetch change destroy", __alloyId1);
    exports.destroy = function() {
        $.Device.off("fetch change destroy", __alloyId1);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.detailWindow.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.detailWindow!click!CloseWindow"] && $.__views.detailWindow.addEventListener("click", CloseWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;