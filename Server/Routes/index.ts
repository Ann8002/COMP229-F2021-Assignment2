import express from 'express';
const router = express.Router();
export default router;

<<<<<<< HEAD
// get a reference to the Inform Model Class
import Inform from '../Models/inform';

=======
>>>>>>> 7f16fe70abff719518a3fcb84ca1de0fed67740c

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayAddressListPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers/index';

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
<<<<<<< HEAD
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Me', page: 'contact'  });
});

/* GET address-list */
router.get('/address-list', function(req, res, next)
{

  // db.address.find()
  Inform.find(function(err, addressCollection)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
      
    res.render('index', { title: 'Address List', page: 'address-list', address: addressCollection  });
    
  });
});
=======
router.get('/contact', DisplayContactPage);

/* GET address-list */
router.get('/address-list', DisplayAddressListPage);
>>>>>>> 7f16fe70abff719518a3fcb84ca1de0fed67740c

//module.exports = router;
