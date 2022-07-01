const DynamoDao = require('../dal/DynamoDao')

class stageService {

    static async processToDestination(requestBo){
        return new DynamoDao().saveRecords(requestBo, timeStamp)
    }
}

module.exports = stageService;