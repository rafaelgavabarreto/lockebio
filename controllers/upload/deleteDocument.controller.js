const Services = require('../../services/upload/deleteDocument.service')    

async function deleteDocument(req, res){
    try {
        const documentId = req.params.id;
        const document = await Services.deleteDocument(documentId);
        return res.status(200).json({ status: 200, data: document });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = { deleteDocument: deleteDocument }