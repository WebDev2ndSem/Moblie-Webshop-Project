function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId38(e) {
        if (e && e.fromAdapter) return;
        __alloyId38.opts || {};
        var models = __alloyId37.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId26 = models[i];
            __alloyId26.__transform = {};
            var __alloyId28 = Ti.UI.createTableViewRow({
                layout: "horizontal",
                deviceId: "undefined" != typeof __alloyId26.__transform["deviceId"] ? __alloyId26.__transform["deviceId"] : __alloyId26.get("deviceId")
            });
            rows.push(__alloyId28);
            var __alloyId30 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId26.__transform["deviceImage"] ? __alloyId26.__transform["deviceImage"] : __alloyId26.get("deviceImage"),
                width: "25%"
            });
            __alloyId28.add(__alloyId30);
            var __alloyId32 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId26.__transform["deviceName"] ? __alloyId26.__transform["deviceName"] : __alloyId26.get("deviceName"),
                width: "25%"
            });
            __alloyId28.add(__alloyId32);
            var __alloyId34 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId26.__transform["deviceId"] ? __alloyId26.__transform["deviceId"] : __alloyId26.get("deviceId"),
                width: "25%"
            });
            __alloyId28.add(__alloyId34);
            var __alloyId36 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId26.__transform["devicestatus"] ? __alloyId26.__transform["devicestatus"] : __alloyId26.get("devicestatus"),
                width: "25%"
            });
            __alloyId28.add(__alloyId36);
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
        id: "myDevices"
    });
    $.__views.myDevices && $.addTopLevelView($.__views.myDevices);
    $.__views.myDevicesTable = Ti.UI.createTableView({
        id: "myDevicesTable"
    });
    $.__views.myDevices.add($.__views.myDevicesTable);
    var __alloyId37 = Alloy.Collections["myDevices"] || myDevices;
    __alloyId37.on("fetch destroy change add remove reset", __alloyId38);
    $.__views.closeBtn = Ti.UI.createButton({
        id: "closeBtn",
        title: "Back",
        bottom: "10px"
    });
    $.__views.myDevices.add($.__views.closeBtn);
    exports.destroy = function() {
        __alloyId37.off("fetch destroy change add remove reset", __alloyId38);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var collection = Alloy.Collections.myDevices;
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