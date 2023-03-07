const uid = require('./uid')()

class Passenger {
    constructor(name) {
        this.id = uid()
        this.name = name
    }
}

module.exports = Passenger
