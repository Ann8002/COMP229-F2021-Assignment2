/* <!--COMP229-F2021-SB-P-ASSIGNMENT2 - Sindhu Binil, ID# 301150331 17-10-2021-->  */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
// instantiate an object of type index controller
const index_1 = require("../Controllers/index");
/* GET home page. */
router.get('/', index_1.DisplayHomePage);
/* GET home page. */
router.get('/home', index_1.DisplayHomePage);
/* GET about page. */
router.get('/about', index_1.DisplayAboutPage);
/* GET projects page. */
router.get('/projects', index_1.DisplayProjectsPage);
/* GET services page. */
router.get('/services', index_1.DisplayServicesPage);
/* GET contact page. */
router.get('/contact', index_1.DisplayContactPage);
/* GET address-list */
router.get('/address-list', index_1.DisplayLoginPage);
/* GET display login page */
router.get('/login', index_1.DisplayLoginPage);
/* POST process login page */
router.post('/login', index_1.DisplayAddressListPage);
/* GET display register page */
router.get('/register', index_1.DisplayRegisterPage);
/* POST process register page */
router.post('/register', index_1.ProcessRegisterPage);
/* GET logout page */
router.get('/logout', index_1.ProcessLogoutPage);
module.exports = router;
//# sourceMappingURL=index.js.map

/* GET Route for the Address List page - READ Operation */
router.get('address-list', index_1.DisplayAddressListPage);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('address-list-add', requireAuth, index_1.DisplayAddressListAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('address-list-add', requireAuth, index_1.ProcessAddressListEditPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('address-list-edit/:id', requireAuth, index_1.DisplayAddressListEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/address-list-edit/:id', requireAuth, index_1.ProcessAddressListEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/address-list/:id', requireAuth, index_1.performDelete);