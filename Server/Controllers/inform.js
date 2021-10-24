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
            InformList: InformList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('address-list-add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newInform = Inform({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Inform.create(newInform, (err, Inform) =>{
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

    Inform.findById(id, (err, InformToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('address-list-edit', {title: 'Edit', inform: InformToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedInform = Inform({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });

    Inform.updateOne({_id: id}, updatedInform, (err) => {
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

    Inform.remove({_id: id}, (err) => {
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