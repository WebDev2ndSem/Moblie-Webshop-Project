
exports.definition = {  
   
    config: {
    	"authstr": null,
        "URL": "https://old.muranddesign.com/verifone/help",
        "debug": 1, 
        "adapter": {
            "type": "restapi",
            "collection_name": "getHelp",
            "idAttribute": "userId",
            "methodMap": "create",
        },
        "headers": { // your custom headers
            "Accept": "application/json",
            "Authorization": null, //"Basic dGVzdDp0ZXN0MQ=="
            "problemDeviceId": null,
            "subject": null,
            "comments": null,
            
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