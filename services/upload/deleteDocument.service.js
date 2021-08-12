const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { deleteBucket } = require('../../helpers/aws');

async function deleteDocument(id){
    try {
        const document = await prisma.document.delete({ where: { id: +id }});
        await deleteBucket(document.directory);
        return document;
    } catch (e) {
        // Log Errors
        throw Error('Error while deleting your Document')
    }
}
module.exports = { deleteDocument: deleteDocument }