const ClinicController = require('../controllers/ClinicController');
const express = require('express');

var router = express.Router();
var guard = require('express-jwt-permissions')();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get('/api/clinics/search' , ClinicController.getAll);

module.exports = router