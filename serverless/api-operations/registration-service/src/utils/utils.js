class utils{

    static  parseElement(event){
        try {
            return JSON.parse(event)
        } catch (error) {
            return event
            console.log(error);
        }
        
    }
}

module.exports = utils