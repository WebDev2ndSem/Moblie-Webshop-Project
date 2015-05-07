var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        authstr: null,
        URL: "http://old.muranddesign.com/verifone/help",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "getHelp",
            idAttribute: "userId",
            methodMap: "create"
        },
        headers: {
            Accept: "application/json",
            Authorization: null,
            problemDeviceId: null,
            subject: null,
            comments: null
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

model = Alloy.M("getHelp", exports.definition, []);

collection = Alloy.C("getHelp", exports.definition, model);

exports.Model = model;

exports.Collection = collection;