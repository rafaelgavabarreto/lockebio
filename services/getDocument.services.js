/* prima and aws s3 bucket connection */

function getDocument(req, res){
    try {
        const document = await
        return document;
    } catch (e) {
        // Log Errors
        throw Error('Error while getting your Document')
    }
}
module.exports = { getDocument: getDocument }