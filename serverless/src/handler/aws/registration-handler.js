'use strict';

const apiProcessor = require("../../../api-operations/registration-service/src/api/RegistrationApiProcessor")

module.exports.registrationHandler = async (event, context, callback) => {
  try {
   return await new apiProcessor().process(event, context)
    .then(result =>{
      console.log(result);
      callback(null, {
        statusCode: 200,
        "headers":{
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "content-Type, X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Code,Code-Varfier,applicationid",
          "Access-Control-Allow-Methods": "OPTIONS,POST",
          "Access-Control-Allow-Credentials": false,
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "*"
        }
      })
    })
  } catch (error) {
    console.log(error);
  }
};
