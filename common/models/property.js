"use strict";
module.exports = function (Property) {
  Property.getProductsSameAvailable = function (available, cb) {
    Property.find(
      {
        where: {
          available: {
            eq: available,
          },
        },
      },
      cb
    );
  };

  Property.remoteMethod("getProductsSameAvailable", {
    accepts: {
      arg: "available",
      type: "boolean",
    },
    returns: {
      arg: "properties",
      type: "array",
    },
    http: {
      path: "/get-product-same-available",
      verb: "get",
    },
  });

  /* inmubles de igual categoria */
  Property.ProductsSamecategory = function (category, cb) {
    Property.find(
      {
        where: {
          category: {
            eq: category,
          },
        },
      },
      cb
    );
  };

  Property.remoteMethod("ProductsSamecategory", {
    accepts: {
      arg: "category",
      type: "string",
    },
    returns: {
      arg: "properties",
      type: "array",
    },
    http: {
      path: "/get-product-same-category",
      verb: "get",
    },
  });
};

/* 
module.exports = function(Property) {
    Property.getProductsSamecategory= function (category, cb){
        Property.find({
            where:{
                category:{
                    eq: category
                 }
            }
        }, cb);
    
    };


    Property.remoteMethod("getProductsSamecategory", {
        accepts: {
            arg: "category",
            type: "string"
        },
        returns: {
            arg: "properties",
            type: "array"
        },
        http: {
            path: "/get-product-same-category",
            verb: "get"

        }}
    
    
    )

    



};

 */
