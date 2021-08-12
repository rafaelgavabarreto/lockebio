const express = require('express');
const router = express.Router();

const uploadRoutes = require('./upload');


router.use('/upload', uploadRoutes);


/* This home router is created for just health checks */
router.get('/health', function(req, res, next) {
  return res.status(200).json({'msg':'Hello World'});
});

module.exports = router;