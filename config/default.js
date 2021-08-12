module.exports = {
    aws:{
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: "us-east-2",
        s3Bucket: process.env.s3Bucket
    },
    server: {
        port: process.env.SERVER_PORT
    }
}