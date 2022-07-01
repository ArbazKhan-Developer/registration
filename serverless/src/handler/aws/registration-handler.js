'use strict';

const apiProcessor = require('registration-service').apiProcessor

module.exports.registrationHandler = async (event, context, callback) => {
  try {
   return await new apiProcessor().process(event, context);
  } catch (error) {
    console.log(error);
  }
};
