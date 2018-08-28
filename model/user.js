const Guid = require('./guid');

class user {
    constructor() {
        this.id = Guid.create()
        this.name = ''
    }
}

module.exports = user;