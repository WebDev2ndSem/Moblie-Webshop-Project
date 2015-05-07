function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId43(e) {
        if (e && e.fromAdapter) return;
        __alloyId43.opts || {};
        var models = __alloyId42.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId31 = models[i];
            __alloyId31.__transform = {};
            var __alloyId33 = Ti.UI.createTableViewRow({
                layout: "horizontal",
                deviceId: "undefined" != typeof __alloyId31.__transform["deviceId"] ? __alloyId31.__transform["deviceId"] : __alloyId31.get("deviceId")
            });
            rows.push(__alloyId33);
            var __alloyId35 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId31.__transform["deviceImage"] ? __alloyId31.__transform["deviceImage"] : __alloyId31.get("deviceImage"),
                width: "25%"
            });
            __alloyId33.add(__alloyId35);
            var __alloyId37 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId31.__transform["deviceName"] ? __alloyId31.__transform["deviceName"] : __alloyId31.get("deviceName"),
                width: "25%"
            });
            __alloyId33.add(__alloyId37);
            var __alloyId39 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId31.__transform["deviceId"] ? __alloyId31.__transform["deviceId"] : __alloyId31.get("deviceId"),
                width: "25%"
            });
            __alloyId33.add(__alloyId39);
            var __alloyId41 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId31.__transform["devicestatus"] ? __alloyId31.__transform["devicestatus"] : __alloyId31.get("devicestatus"),
                width: "25%"
            });
            __alloyId33.add(__alloyId41);
        }
        $.__views.myDevicesTable.setData(rows);
    }
    function CloseWindow() {
        $.myDevices.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "myDevices";
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
    Alloy.Collections.instance("myDevices");
    $.__views.myDevices = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "myDevices"
    });
    $.__views.myDevices && $.addTopLevelView($.__views.myDevices);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        text: "My Devices",
        top: "10dp",
        id: "__alloyId30"
    });
    $.__views.myDevices.add($.__views.__alloyId30);
    $.__views.mainView = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: "30dp",
        id: "mainView",
        layout: "horizontal"
    });
    $.__views.myDevices.add($.__views.mainView);
    $.__views.myDevicesTable = Ti.UI.createTableView({
        id: "myDevicesTable"
    });
    $.__views.mainView.add($.__views.myDevicesTable);
    var __alloyId42 = Alloy.Collections["myDevices"] || myDevices;
    __alloyId42.on("fetch destroy change add remove reset", __alloyId43);
    $.__views.closeBtn = Ti.UI.createButton({
        width: "100dp",
        height: "40dp",
        backgroundColor: "#00aeef",
        bottom: "10dp",
        id: "closeBtn",
        title: "Back"
    });
    $.__views.myDevices.add($.__views.closeBtn);
    exports.destroy = function() {
        __alloyId42.off("fetch destroy change add remove reset", __alloyId43);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var collection = Alloy.Collections.myDevices;
    Alloy.Globals.authstr = Titanium.App.Properties.getString("encodedUser");
    collection.config.headers.Authorization = Alloy.Globals.authstr;
    collection.fetch({
        success: function() {
            Ti.API.info("success");
            _.each(collection.models, function(element) {
                element.attributes.title = element.attributes.deviceName + " for " + element.attributes.deviceStatus;
                element.attributes.deviceId = element.cid;
                element.attributes.name = element.attributes.deviceName;
                element.attributes.image = element.attributes.deviceImage;
            });
        },
        error: function() {
            Ti.API.info("fail");
        }
    });
    $.myDevicesTable.addEventListener("click", function(_event) {
        var model = Alloy.Collections.myDevices.getByCid(_event.rowData.deviceId);
        var deviceMenuController = Alloy.createController("deviceMenu", {
            data: model
        });
        deviceMenuController.getView().open({
            modal: true
        });
    });
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.myDevices.addEventListener("close", function() {
        $.destroy();
    });
    $.myDevices.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;