exports.success = function(req,res,message,status) 
{
    res.status(status || 200).json(message)
}

exports.error = function(req,res,message,status,details) 
{
    console.log('[response error] ' + details);
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}

exports.delete = function(req,res,bool,status)
{
    res.status(status).send(bool)
}