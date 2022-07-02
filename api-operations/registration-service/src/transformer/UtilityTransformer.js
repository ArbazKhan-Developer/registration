const RequestBo = require('../model/RequestBo');
const Utils = require('../utils/utils');

class utilityTransformer{


    static async transformToBo(requestDto){
        try {
            let body = Utils.parseElement(requestDto.body);
            let header = requestDto.header;
            let address = requestDto.address
            return new RequestBo(header,body,address)
        } catch (error) {
            
        }
    }
};

module.exports = utilityTransformer;