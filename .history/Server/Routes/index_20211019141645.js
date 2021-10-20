"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home'  });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home'  });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', page: 'about'  });
});
/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'  });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services'  });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'  });
});
//module.exports = router;
//# sourceMappingURL=index.js.map