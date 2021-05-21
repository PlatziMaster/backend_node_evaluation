exports.success = (req, res, msg, status = 200) => {
  res.status(status).send({
    error: '',
    body: msg
  });
}

exports.error = (req, res, msg, error, status = 500) => {
  if (error) {
    console.log('[error]',  error);
  }
  res.status(status).send({
    error: msg,
    body: ''
});
}