const Services = require('../../services/upload/getAllDocuments.service')    

async function getAllDocuments(req, res){
    try {
        const document = await Services.getAllDocuments();
        return res.status(200).json({ status: 200, data: document });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
module.exports = { getAllDocuments: getAllDocuments }