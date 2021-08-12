const express         = require('express')
const router          = express.Router()


router.get('/', require('../controllers/upload/getDocument').getDocument)
router.post('/', require('../controllers/upload/uploadDocument').uploadDocument)

router.get('/:id', require('../controllers/upload/getAllDocuments').getAllDocuments)
router.delete('/:id', require('../controllers/upload/deleteDocument').deleteDocument)

module.exports = router