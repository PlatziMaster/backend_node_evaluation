exports.success = function(req, res, product, status){
  res.status(status || 200). send({
    error: '',
    body: message
  });
};

exports.error = function(req, res, product, status, details){
  console.error(details);
  res.status(status || 500). send({
    error: message,
    body: ''
  });
};