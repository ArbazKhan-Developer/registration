'use strict';

const apiProcessor = require("../../../api-operations/registration-service/src/api/RegistrationApiProcessor")

module.exports.registrationHandler = async (event, context, callback) => {
  try {
   return await new apiProcessor().process(event, context);
  } catch (error) {
    console.log(error);
  }
};
