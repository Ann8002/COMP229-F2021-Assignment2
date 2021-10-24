"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
// get a reference to the Address Model Class
const address_1 = __importDefault(require("../Models/address"));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
});
/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'My Services', page: 'services' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
});
/* GET address-list */
router.get('/address-list', function (req, res, next) {
    // db.address.find()
    address_1.default.find(function (err, addressCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(addressCollection);
    });
});
//module.exports = router;
//# sourceMappingURL=index.js.map