// const express = require('express');

// const professionalController = require('../controllers/professional');

// const router = express.Router();

// // GET /professional
// router.get('/professional', professionalController.getPosts);

// // POST /professional
// // router.post('/professionalPost', professionalController.postData);


// module.exports = router;

const express = require('express');

const professionalDataController = require('../controllers/professionalData');

const router = express.Router();

router.get('/professional', professionalDataController.getData);

router.post('/professional-data-post', professionalDataController.postData);


module.exports = router;