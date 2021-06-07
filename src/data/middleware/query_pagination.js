const get_paginate_params = (req) => {
    if (req.query === null || req.query === {}) {
        return {
            paginate: false,
            page: 1,
            per_page: 10
        }
    }
    const paginate = (req.query.paginate) === 'true'
    const page = (req.query.page) ? parseInt(req.query.page) : 1
    const per_page = (req.query.per_page) ? parseInt(req.query.per_page) : 10

    return { paginate, page, per_page }
}

module.exports = get_paginate_params