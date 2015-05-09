function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId67(e) {
        if (e && e.fromAdapter) return;
        __alloyId67.opts || {};
        var models = __alloyId66.models;
        var len = models.length;
        var children = $.__views.mainView.children;
        for (var d = children.length - 1; d >= 0; d--) $.__views.mainView.remove(children[d]);
        for (var i = 0; len > i; i++) {
            var __alloyId47 = models[i];
            __alloyId47.__transform = {};
            var __alloyId49 = Ti.UI.createView({
                width: "80%",
                height: "25%",
                top: "20dp",
                borderColor: "#bbbbbb",
                layout: "vertical"
            });
            $.__views.mainView.add(__alloyId49);
            var __alloyId51 = Ti.UI.createLabel({
                text: "Daily payments:"
            });
            __alloyId49.add(__alloyId51);
            var __alloyId53 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId47.__transform["incomePerDay"] ? __alloyId47.__transform["incomePerDay"] : __alloyId47.get("incomePerDay")
            });
            __alloyId49.add(__alloyId53);
            var __alloyId55 = Ti.UI.createView({
                width: "80%",
                height: "25%",
                top: "20dp",
                borderColor: "#bbbbbb",
                layout: "vertical"
            });
            $.__views.mainView.add(__alloyId55);
            var __alloyId57 = Ti.UI.createLabel({
                text: "Weekly payments:"
            });
            __alloyId55.add(__alloyId57);
            var __alloyId59 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId47.__transform["incomePerWeek"] ? __alloyId47.__transform["incomePerWeek"] : __alloyId47.get("incomePerWeek")
            });
            __alloyId55.add(__alloyId59);
            var __alloyId61 = Ti.UI.createView({
                width: "80%",
                height: "25%",
                top: "20dp",
                borderColor: "#bbbbbb",
                layout: "vertical"
            });
            $.__views.mainView.add(__alloyId61);
            var __alloyId63 = Ti.UI.createLabel({
                text: "Monthly payments:"
            });
            __alloyId61.add(__alloyId63);
            var __alloyId65 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId47.__transform["incomePerMonth"] ? __alloyId47.__transform["incomePerMonth"] : __alloyId47.get("incomePerMonth")
            });
            __alloyId61.add(__alloyId65);
        }
    }
    function CloseWindow() {
        $.statistics.close();
    }
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
    Alloy.Collections.instance("statistics");
    $.__views.statistics = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "statistics"
    });
    $.__views.statistics && $.addTopLevelView($.__views.statistics);
    $.__views.__alloyId46 = Ti.UI.createLabel({
        text: "Statistics",
        top: "10dp",
        id: "__alloyId46"
    });
    $.__views.statistics.add($.__views.__alloyId46);
    $.__views.mainView = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "20dp",
        id: "mainView",
        layout: "horizontal"
    });
    $.__views.statistics.add($.__views.mainView);
    var __alloyId66 = Alloy.Collections["statistics"] || statistics;
    __alloyId66.on("fetch destroy change add remove reset", __alloyId67);
    $.__views.closeBtn = Ti.UI.createButton({
        width: "100dp",
        height: "40dp",
        backgroundColor: "#00aeef",
        bottom: "10dp",
        id: "closeBtn",
        title: "Back"
    });
    $.__views.statistics.add($.__views.closeBtn);
    exports.destroy = function() {
        __alloyId66.off("fetch destroy change add remove reset", __alloyId67);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var collection = Alloy.Collections.statistics;
    Alloy.Globals.authstr = Titanium.App.Properties.getString("encodedUser");
    collection.config.headers.Authorization = Alloy.Globals.authstr;
    collection.fetch({
        success: function() {
            Ti.API.info("success");
            _.each(collection.models, function() {});
        },
        error: function() {
            Ti.API.info("fail");
        }
    });
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.statistics.addEventListener("close", function() {
        $.destroy();
    });
    $.statistics.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;