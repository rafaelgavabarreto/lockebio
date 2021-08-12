const Services = require('../../services/upload/uploadDocument.service')    

async function uploadDocument(req, res){
    try {
        const fileData = req.files['file'];

        const document = await Services.uploadDocument(fileData);
        return res.status(200).json({ status: 200, data: document });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = { uploadDocument: uploadDocument }