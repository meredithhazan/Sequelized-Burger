var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  console.log(req.body);
  db.burger.create({
    burger_name: req.body.burger_name
  }).then(function(data) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  db.burger.update({
    devoured: req.body.devoured
   }, {
    where: {
      id: req.params.id
    }
   }).then(function(result) {
      res.redirect("/");
   });
});    






module.exports = router;