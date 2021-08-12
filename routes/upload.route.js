const express         = require('express')
const router          = express.Router()


router.get('/', require('../controllers/upload/getAllDocuments.controller').getAllDocuments)
router.post('/', require('../controllers/upload/uploadDocument.controller').uploadDocument)

router.get('/:id', require('../controllers/upload/getDocument.controller').getDocument)
router.delete('/:id', require('../controllers/upload/deleteDocument.controller').deleteDocument)

module.exports = router