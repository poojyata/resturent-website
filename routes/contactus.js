const express = require('express');
const router = express.Router();
var Contactus = require('../controllers/contactusdatacontroller');
var contactus = new Contactus();
var multer = require('multer');
var bodyparser = require('body-parser');








//for body parser and json data
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/1', (req, res) => res.send('working'))
router.get('/', (req, res) => {
    res.status(200).render('../views/main/contactus');

});
//Send and save to database
router.post('/', (req, res) => {
    console.log(req.body);
    contactus.SaveContactus(req.body, (CBData) => {
        if (CBData.Status == "err") {
            // req.flash("error", "Some Issue in data ");
            res.status(500).redirect('/contactus');
        } else {
            // req.flash("success", " Detail Saved");
            res.status(200).redirect('/index');
        }

    });
});

module.exports = router;