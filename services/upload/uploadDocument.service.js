const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { uploadMedia } = require('../../helpers/aws');

async function uploadDocument(fileData){
    try {
        const fileName = fileData.name;
        
        // create the file on database
        const document = await prisma.document.create({ data: { name: fileName, directory: 'uploading' }});
        
        // upload file to s3 bucket
        const dirName = `${document.id}/${fileData.name}`;

        const file = fileData.data;
        uploadMedia(dirName, file);

        await prisma.document.update({ where: { id: document.id }, data: { directory: dirName }});
        
        return;
    } catch (e) {
        // Log Errors
        throw Error('Error while getting your Document');
    }
}
module.exports = { uploadDocument: uploadDocument }