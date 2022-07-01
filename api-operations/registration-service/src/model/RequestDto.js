class requestDto {
    constructor(header, body){
        this.header = header
        this.body = body
        this.address = body.Address
    }
}

module.exports = requestDto