const Utils = require('../utils/utils')

class requestDto {
    constructor(header, body){
        this.header = header
        this.body = body
        this.address = Utils.parseElement(body).Address
    }
}

module.exports = requestDto