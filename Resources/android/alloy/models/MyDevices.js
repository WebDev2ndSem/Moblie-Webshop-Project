var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        authstr: null,
        URL: "http://old.muranddesign.com/verifone/user/devices",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "myDevices",
            idAttribute: "deviceId"
        },
        headers: {
            Accept: "application/json",
            Authorization: null
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("myDevices", exports.definition, []);

collection = Alloy.C("myDevices", exports.definition, model);

exports.Model = model;

exports.Collection = collection;