const RequestBo = require('../model/RequestBo')

class utilityTransformer{


    static async transformToBo(requestDto){
        try {
            let body = requestDto.body;
            let header = requestDto.header;
            let address = requestDto.address

            return new RequestBo(header,body,address)
        } catch (error) {
            
        }
    }
};

module.exports = utilityTransformer;