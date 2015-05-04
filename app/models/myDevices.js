exports.definition = {  
    config: {
    	"authstr": null,
        "URL": "http://old.muranddesign.com/verifone/user/devices",
        "debug": 1, 
        "adapter": {
            "type": "restapi",
            "collection_name": "myDevices",
            "idAttribute": "deviceId"
        },
        "headers": { // your custom headers
            "Accept": "application/json",
            "Authorization": null, //"Basic dGVzdDp0ZXN0MQ=="
            
        },
       // "parentNode": "results" //your root node
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