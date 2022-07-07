const DynamoDao = require('../dal/DynamoDao')

class stageService {

    static async processToDestination(requestBo){
        console.log(`inside stage service`);
        return new DynamoDao().saveRecords(requestBo)
    }
}

module.exports = stageService;