var router = require('express').Router();



// calling main  routes
router.get('/', (req, res) => {
    res.status(200).render('../views/main/index');
});

router.get('/index', (req, res) => {
    res.status(200).render('../views/main/index');

});




router.get('/barmenu', (req, res) => {
    res.status(200).render('../views/main/barmenu');

});

router.get('/foodmenu', (req, res) => {
    res.status(200).render('../views/main/foodmenu');

});
// router.get('/contactus', (req, res) => {
//     res.status(200).render('../views/main/contactus');

// });

router.get('/gallery', (req, res) => {
    res.status(200).render('../views/main/gallery');

});

router.get('/about', (req, res) => {
    res.status(200).render('../views/main/about');

});

router.get('/orderitems', (req, res) => {
    res.status(200).render('../views/main/orderitems');

});
router.get('/ordercard', (req, res) => {
    res.status(200).render('../views/main/ordercard');

});



















module.exports = router;