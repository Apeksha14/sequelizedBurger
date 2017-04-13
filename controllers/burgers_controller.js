var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res,err) {
  
  models.burgers.findAll({}).then(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function (req, res,err) {
  if(err)
  {
    console.log(err);
  }
  models.burgers.create({burger_name: req.body.name, devoured: req.body.devoured}).then(function() {
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function (req, res) {

  models.burgers.update({ devoured: req.body.devoured }, {where: {id:req.params.id}}).then(function () {
    res.redirect('/burgers');
  });
});

router.delete('/burgers/delete/:id', function (req, res) {

  models.burgers.destroy({where: {id:req.params.id}}).then(function() {
    res.redirect('/burgers');
  });
});

module.exports = router;