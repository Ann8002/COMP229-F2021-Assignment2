import express from 'express';
const router = express.Router();
export default router;

// get a reference to the Inform Model Class
import Inform from '../Models/inform';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'  });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about'  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Our Projects', page: 'projects'  });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services'  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact'  });
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

    console.log(addressCollection);
  });
});


//module.exports = router;
