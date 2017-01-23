var getJSON = require('get-json');

exports.index = (req, res) => {

  res.render('home', {
    title: 'Home'
  });
};

exports.getFuelPrice = (req, res) => {

  var lat = req.query.lat;
  var lng = req.query.lng;
  var gas = req.query.gas;
  var rad = req.query.radius;

  var tankkoenig = 'https://creativecommons.tankerkoenig.de/json/list.php?lat='+lat+'&lng='+lng+'&rad=5&type='+gas+'&rad='+rad+'&apikey='+process.env.tankerkoenigAPI+'&sort=price';

  getJSON(tankkoenig, function(error, response){

    res.json(response);


  })


};
