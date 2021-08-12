// Load configuration
const AWS        = require('aws-sdk');
const config      = require('../config/default');

// Basic configuration to connect AWS S3
const S3 = new AWS.S3({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    region: config.aws.region
})

exports.deleteBucket = async function(dir) {

    const listParams = {
        Bucket: config.aws.s3Bucket,
        Prefix: dir
    }

    const listedObjects = await S3.listObjectsV2(listParams).promise()

    if (listedObjects.Contents.length === 0) return

    const deleteParams = {
        Bucket: config.aws.s3Bucket,
        Delete: { Objects: [] }
    }

    listedObjects.Contents.forEach(({ Key }) => { deleteParams.Delete.Objects.push({ Key }) })

    await S3.deleteObjects(deleteParams).promise()

    if (listedObjects.IsTruncated) await deleteBucket(dir)

}

exports.getMedia = async function(dir) {
    try {
        const params = {
            Key: dir,
            Bucket: config.aws.s3Bucket,
        }

        const data = await S3.getObject(params).promise();

        return data.Body;
    } catch (e) {
        throw new Error('Error getting the file');
    }
}

exports.uploadMedia = async function(fileKey,fileData) {
    try {
        const params = {
            Bucket: config.aws.s3Bucket,
            Key: fileKey,
            Body: new Buffer.from(fileData, 'binary') //use a buffer to pass the data over
        }

        const data = await S3.upload(params).promise();

        return data;

    } catch (e) {
        throw new Error('Error uploading the file');
    }
}