'use strict';

module.exports = function(Category) {
    Category.getCategorySameName= function (name, cb){
        Category.find({
            where:{
                name:{
                    eq: name
                 }
            }
        }, cb);
    
    };


    Category.remoteMethod("getCategorySameName", {
        accepts: {
            arg: "name",
            type: "string"
        },
        returns: {
            arg: "Categories",
            type: "array"
        },
        http: {
            path: "/get-category-same-name",
            verb: "get"

        }}
    
    
    )

    Category.getCategorySameTrequest= function (trequest, cb){
        Category.find({
            where:{
                trequest:{
                    eq: trequest
                    }
            }
        }, cb);
    
    };
    
    /* Por tsolicitud venta o alquiler */
    Category.remoteMethod("getCategorySameTrequest", {
        accepts: {
            arg: "trequest",
            type: "string"
        },
        returns: {
            arg: "Categories",
            type: "array"
        },
        http: {
            path: "/get-category-same-trequest",
            verb: "get"
    
        }}
    
    
    )


};
