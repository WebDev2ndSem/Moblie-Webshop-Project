var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        authstr: null,
        URL: "http://old.muranddesign.com/verifone/user/income",
        debug: 1,
        adapter: {
            type: "restapi",
            collection_name: "statistics",
            idAttribute: ""
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

model = Alloy.M("statistics", exports.definition, []);

collection = Alloy.C("statistics", exports.definition, model);

exports.Model = model;

exports.Collection = collection;