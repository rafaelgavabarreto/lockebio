const Services = require('../../services/upload/getDocument.service')    

async function getDocument(req, res){
    try {
        const documentId = req.params.id;
        const document = await Services.getDocument(documentId);

               res.attachment(document.name)
        return res.send(document.data)

    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = { getDocument: getDocument }