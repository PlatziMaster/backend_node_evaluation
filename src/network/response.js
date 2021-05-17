//estas funciones estan pensadas para estandarizar las respuestas que de el servicio
exports.success = (req, res, message = 'Ok', status = 201) => {
      res.status(status).send({
            error: false,
            status: status,
            body: message,
      })
}

exports.error = (req, res, message = 'Internal Server Error', status = 500) => {
      res.status(status).send({
            error: false,
            status: status,
            body: message,
      })
}