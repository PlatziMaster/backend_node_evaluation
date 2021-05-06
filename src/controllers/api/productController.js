const controller = {
    list: (req, res) => {
        res.status(200).json({
            data: 'productos'
        })
    },
    show: (req, res) => {
        const { productId } = req.params

        res.status(200).json({
            data: 'producto'
        })
    },
    store: (req, res) => {
        res.status(201).json({
            data: 'creo producto'
        })
    },
    update: (req, res) => {
        const { productId } = req.params

        res.status(200).json({
            data: 'actualizo prod'
        })
    },
    destroy: (req, res) => {
        const { productId } = req.params

        res.status(200).json({
            data: 'elimino prod'
        })
    }
}

module.exports = controller