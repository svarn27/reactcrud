const express = require('express');
const clientRoutes = express.Router();

// Require Business model in our routes module
let Client = require('./client.model');

// Defined store route
clientRoutes.route('/add').post(function (req, res) {
  let client = new Client(req.body);
  client.save()
    .then(client => {
      res.status(200).json({'client': 'client is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
clientRoutes.route('/').get(function (req, res) {
    Client.find(function(err, clients){
    if(err){
      console.log(err);
    }
    else {
      res.json(clients);
    }
  });
});

// Defined edit route
clientRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Client.findById(id, function (err, client){
      res.json(client);
  });
});

//  Defined update route
clientRoutes.route('/update/:id').post(function (req, res) {
    Client.findById(req.params.id, function(err, client) {
    if (!client)
      res.status(404).send("data is not found");
    else {
        client.person_name = req.body.person_name;
        client.business_name = req.body.business_name;
        client.business_gst_number = req.body.business_gst_number;

        client.save().then(client => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
clientRoutes.route('/delete/:id').get(function (req, res) {
    Client.findByIdAndRemove({_id: req.params.id}, function(err, client){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = clientRoutes;
