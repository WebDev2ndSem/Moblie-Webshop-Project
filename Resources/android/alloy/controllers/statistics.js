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
    $.__views.statistics = Ti.UI.createWindow({
        id: "statistics"
    });
    $.__views.statistics && $.addTopLevelView($.__views.statistics);
    $.__views.__alloyId38 = Ti.UI.createView({
        id: "__alloyId38"
    });
    $.__views.statistics.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Hello Statistics!",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.statistics.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;