const Guid = require('./guid');
const moment = require('../utils/moment');
class order {
    constructor() {
        this.id = Guid.create()
        this.date = moment().format('YYYY-MM-DD')
        this.participants = []
        this.payer = []
    }
}

module.exports = order;