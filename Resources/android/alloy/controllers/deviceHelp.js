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
        $.deviceHelp.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "deviceHelp";
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
    $.Device = Alloy.createModel("myDevices");
    $.__views.detailWindow = Ti.UI.createWindow({
        id: "detailWindow",
        model: "$.Device"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.detailView = Ti.UI.createView({
        layout: "vertical",
        id: "detailView"
    });
    $.__views.detailWindow.add($.__views.detailView);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Let us help you",
        id: "__alloyId0"
    });
    $.__views.detailView.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createTextField({
        hintText: "device",
        id: "__alloyId1"
    });
    $.__views.detailView.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createTextField({
        hintText: "subject",
        id: "__alloyId2"
    });
    $.__views.detailView.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTextArea({
        hintText: "comments",
        id: "__alloyId3"
    });
    $.__views.detailView.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        title: "CALL ME",
        id: "__alloyId4"
    });
    $.__views.detailView.add($.__views.__alloyId4);
    $.__views.closeBtn = Ti.UI.createButton({
        id: "closeBtn",
        title: "Back"
    });
    $.__views.detailView.add($.__views.closeBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    alert(args.deviceId);
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.deviceHelp.addEventListener("close", function() {
        $.destroy();
    });
    $.deviceHelp.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;