import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import {DisplayAboutPage, DisplayContactPage, DisplayAddressListPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage, DisplayAddressListAddPage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET address-list */
router.get('/address-list', DisplayAddressListPage);

/* GET display login page */
router.get('/login', DisplayLoginPage);

/* POST process login page */
router.post('/login', ProcessLoginPage);

/* GET display register page */
router.get('/register', DisplayRegisterPage);

/* POST process register page */
router.post('/register', ProcessRegisterPage);

/* GET logout page */
router.get('/logout', ProcessLogoutPage);

/* GET address-list-add */
router.get('/address-list-add', DisplayAddressListAddPage);

//module.exports = router;
