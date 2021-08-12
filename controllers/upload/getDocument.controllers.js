const Services = require('../services/getDocument.service')    

function getDocument(req, res){
    try {
        var document = await Services.GetDocument({});
        return res.status(200).json({ status: 200, data: document });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = { getDocuments: getDocument }