/* <!--COMP229-F2021-SB-P-ASSIGNMENT2 - Sindhu Binil, ID# 301150331 17-10-2021-->  */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; // alias for mongoose Schema
const InformSchema = new Schema({
    name: String,
    number: String,
    email: String
}, {
    collection: "address"
});
const Model = mongoose_1.default.model("Inform", InformSchema);
exports.default = Model;
//# sourceMappingURL=inform.js.map

/* GET Route for displaying Add page - CREATE Operation */
router.get('/add', (req, res, next) => {
    res.render('address-listadd', {title: "Add Address"})
});

/* GET Route for processing Add page - CREATE Operation */
router.post('/add', (req, res, next) => {
        let newAddress = Address({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Address.create(newAddress, (err, Address) =>{
            if(err)
        {
            console.log(err);
            res.end(err);
        }   
        else
        {
                // refresh the address list
                res.redirect('/address-list');
        } 
    })
});
/* GET Route for displaying Edit page - CREATE Operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Address.findById(id, (err, addressToEdit) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }   
    else{
        //show the edit view
        res.render('address/edit', {title: 'Edit Address', address: addressToEdit})
    }     
    })
});


/* Post Route for processing Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id

    let updateAddress = Address({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    })

    Address.updateOne({_id: id}, updatedAddress, (err) => {
        if(err)
        {
            console.log(err);
            res.ed(err);
        }
        else
        {
            //refresh the address list
            res.redirect('/address-list');
        }
    });
});
/* GET to perform Deletion - DELETE Operation */

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Address.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the address list
            res.redirect('/address-list');
        }
    })
});

module.exports = router;