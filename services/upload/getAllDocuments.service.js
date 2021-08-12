const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getAllDocuments(){
    try {
        const document = await prisma.document.findMany();
        return document;
    } catch (e) {
        // Log Errors
        throw Error('Error while getting your Document')
    }
}
module.exports = { getAllDocuments: getAllDocuments }