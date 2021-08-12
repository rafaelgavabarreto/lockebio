const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { getMedia } = require('../../helpers/aws');

async function getDocument(id){
    try {
        const document = await prisma.document.findUnique({ where: { id: +id }});

        const fileData = await getMedia(document.directory);

        return { data: fileData, name: document.name };
    } catch (e) {
        // Log Errors
        throw Error('Error while getting your Document')
    }
}
module.exports = { getDocument: getDocument }