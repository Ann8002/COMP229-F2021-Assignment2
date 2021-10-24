let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Inform = require('../models/inform');

module.exports.displayInformList = (req, res, next) => {
    Inform.find((err, InformList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(InformList);

            res.render('address-list', 
            {title: 'Address', 
            AddressList: AddressList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddressListAddPage = (req, res, next) => {
    res.render('address-list-add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
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
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, ContactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('address-list-edit', {title: 'Edit', address: AddressToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedAddress = Address({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Address.updateOne({_id: id}, updatedAddress, (err) => {
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
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Address.remove({_id: id}, (err) => {
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
    });
}