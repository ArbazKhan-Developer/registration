
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const docClient= new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
const tableName = process.env.TABLE_NAME || "registration-data"

class dynamoDao{
    async saveRecords(data){
        console.log(data);
        try {
            let params = {
                TableName: tableName,
                Item: data, 
            }

         let response =  await docClient.put(params).promise()
        return response
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = dynamoDao;