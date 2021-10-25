/* <!--COMP229-F2021-SB-P-ASSIGNMENT2 - Sindhu Binil, ID# 301150331 17-10-2021-->  */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayAddressListPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
// create an instance of the User Model
const user_1 = __importDefault(require("../Models/user"));
// get a reference to the Inform Model Class
const inform_1 = __importDefault(require("../Models/inform"));
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'My Projects', page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'My Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayAddressListPage(req, res, next) {
    // db.address.find()
    inform_1.default.find(function (err, addressCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts', page: 'address-list', address: addressCollection });
    });
}
exports.DisplayAddressListPage = DisplayAddressListPage;
/* functions for authentication */
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login' });
    // check if the user is already logged in
    if(!user)
    {
        res.render('login',
        {
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        console.log(user);
        // are there any server errors?
        if (err) 
        {
            return next(err);
        }
        // are there any login errors?
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // are there any db errors?
            if (err) {
                
                return next(err);
            }

            return res.redirect('/address-list');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'Register', page: 'register' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    // instantiate a new User Object
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        // after successful registration - let's login the user
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/address-list');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logOut();
    res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
