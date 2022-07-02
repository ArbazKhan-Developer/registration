
const RequestDto = require("../model/RequestDto");
const dtoBoTransformer = require('../transformer/UtilityTransformer');
const stageservice = require('../service/StageService');

class RegistrationApiProcessor {


    async process(event, context) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(`event received:: ${JSON.stringify(event)}`);

                let requestDto = new RequestDto(event.header, event.body);
                console.log(`requestDto ${JSON.stringify(requestDto)}}`);

                let requestBo = await dtoBoTransformer.transformToBo(requestDto);
                console.log(`requestBo:: ${JSON.stringify(requestBo)}`);

                let dbResponse = await stageservice.processToDestination(requestBo.toJson())

                resolve(dbResponse);
            } catch (error) {
                console.log(`error occoured in apiLayer:: ${error}`);
                reject('error in api layer');
            }
        })
    }
}

module.exports = RegistrationApiProcessor;