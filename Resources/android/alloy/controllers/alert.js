function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function alert(message, title, callback) {
        var dialog = Ti.UI.createAlertDialog({
            title: title || "Alert",
            message: message,
            ok: "ok"
        });
        callback && dialog.addEventListener("click", callback);
        dialog.show();
        return;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "alert";
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
    $.__views.alert = Ti.UI.createView({
        id: "alert"
    });
    $.__views.alert && $.addTopLevelView($.__views.alert);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if ("undefined" != typeof exports) {
        "undefined" != typeof module && module.exports && (exports = module.exports = alert);
        exports.alert = alert;
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;