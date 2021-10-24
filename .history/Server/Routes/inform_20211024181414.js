let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let informController = require('../controllers/inform');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Address List page - READ Operation */
router.get('/address-list', informController.displayAddressList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/address-list-add', requireAuth, informController.displayAddressListAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/address-list-add', requireAuth, informController.processAddressListAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/address-list-edit/:id', requireAuth, informController.displayAddressListEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/address-list-edit/:id', requireAuth, informController.processAddressListEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, informController.performDelete);

module.exports = router;