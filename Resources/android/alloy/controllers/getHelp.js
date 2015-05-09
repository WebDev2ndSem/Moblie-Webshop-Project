function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doGetHelp() {
        Alloy.Globals.authstr = Titanium.App.Properties.getString("encodedUser");
        Alloy.Globals.problemDeviceId = $.problemDeviceId.value;
        Alloy.Globals.subject = $.subject.value;
        Alloy.Globals.comments = $.comments.value;
        arguments[0] || {};
        var collection = Alloy.Collections.getHelp;
        collection.config.headers.Authorization = Alloy.Globals.authstr;
        collection.config.headers.problemDeviceId = Alloy.Globals.problemDeviceId;
        collection.config.headers.subject = Alloy.Globals.subject;
        collection.config.headers.comments = Alloy.Globals.comments;
        collection.fetch({
            success: function() {
                alert("We will contact you as soon as possible.", "Success!", function() {
                    CloseWindow();
                });
                _.each(collection.models, function() {});
            },
            error: function() {
                alert("Please try again later.", "Error!", function() {
                    CloseWindow();
                });
            }
        });
    }
    function CloseWindow() {
        $.getHelp.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "getHelp";
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
    Alloy.Collections.instance("getHelp");
    $.__views.getHelp = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "getHelp"
    });
    $.__views.getHelp && $.addTopLevelView($.__views.getHelp);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId9"
    });
    $.__views.getHelp.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Report problem",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.problemDeviceId = Ti.UI.createTextField({
        width: "80%",
        height: "60dp",
        top: "20dp",
        borderColor: "#bbbbbb",
        id: "problemDeviceId",
        hintText: "device"
    });
    $.__views.__alloyId9.add($.__views.problemDeviceId);
    $.__views.subject = Ti.UI.createTextField({
        width: "80%",
        height: "60dp",
        top: "20dp",
        borderColor: "#bbbbbb",
        id: "subject",
        hintText: "subject"
    });
    $.__views.__alloyId9.add($.__views.subject);
    $.__views.comments = Ti.UI.createTextArea({
        width: "80%",
        height: "100dp",
        top: "20dp",
        borderColor: "#bbbbbb",
        id: "comments",
        hintText: "comments"
    });
    $.__views.__alloyId9.add($.__views.comments);
    $.__views.__alloyId11 = Ti.UI.createButton({
        backgroundColor: "#00aeef",
        top: "20dp",
        title: "CALL ME",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    doGetHelp ? $.__views.__alloyId11.addEventListener("click", doGetHelp) : __defers["$.__views.__alloyId11!click!doGetHelp"] = true;
    $.__views.closeBtn = Ti.UI.createButton({
        width: "100dp",
        height: "40dp",
        backgroundColor: "#00aeef",
        bottom: "10dp",
        id: "closeBtn",
        title: "Back",
        layout: "horizontal"
    });
    $.__views.getHelp.add($.__views.closeBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    alert = require("alert");
    $.closeBtn.addEventListener("click", function() {
        CloseWindow();
    });
    $.getHelp.addEventListener("close", function() {
        $.destroy();
    });
    $.getHelp.open();
    __defers["$.__views.__alloyId11!click!doGetHelp"] && $.__views.__alloyId11.addEventListener("click", doGetHelp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;