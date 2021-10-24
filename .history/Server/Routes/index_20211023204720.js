"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
// get a reference to the Inform Model Class
const inform_1 = __importDefault(require("../Models/inform"));
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
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
});
/* GET address-list */
router.get('/address-list', function (req, res, next) {
    res.render('index', { title: 'Business Contact List', page: 'address-list' });
        
});
//module.exports = router;
//# sourceMappingURL=index.js.map