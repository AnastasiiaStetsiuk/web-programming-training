const uid = require('./uid')()

class Ticket {
    constructor(passenger, train, seat) {
        this.id = uid()
        this.passenger = passenger
        this.train = train
        this.seat = seat
    }
}

module.exports = Ticket
