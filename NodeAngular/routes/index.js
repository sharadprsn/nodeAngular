exports.index = function(req, res,next){
  res.render('index');
  //next();
};
 
exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};