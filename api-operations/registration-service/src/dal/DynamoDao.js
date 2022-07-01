
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const docClient= new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const tableName = process.env.TABLE_NAME

class dynamoDao{
    async saveRecords(data, timeStamp){
        try {
            let params = {
                TableName: tableName,
                Item: data, 
            }

            docClient.put(params, (err, data)=> {
                if (err) {
                  console.log("Error", err);
                }

                return data
              });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = dynamoDao;