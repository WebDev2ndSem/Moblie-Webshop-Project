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
    this.__controllerPath = "orderPaper";
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
    $.__views.orderPaper = Ti.UI.createWindow({
        id: "orderPaper",
        modal: "true"
    });
    $.__views.orderPaper && $.addTopLevelView($.__views.orderPaper);
    $.__views.verifonePaperSection = Ti.UI.createWebView({
        id: "verifonePaperSection",
        url: "https://shop.verifone.dk/produkt/bonruller/terminalrulle-thermo-57mm-17m"
    });
    $.__views.orderPaper.add($.__views.verifonePaperSection);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;