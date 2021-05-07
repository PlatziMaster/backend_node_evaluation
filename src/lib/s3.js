const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const {config} = require('../config');
const {bucketName, region, accessKeyId, secretAccessKey} = config;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path);
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    };
    return s3.upload(uploadParams).promise();
};

module.exports = uploadFile;

