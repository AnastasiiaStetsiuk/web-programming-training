const uid = require('./uid')()

class Train {
    constructor(trainNumber, route) {
        this.id = uid()
        this.trainNumber = trainNumber
        this.route = route
        this.ticketsSold = []
    }

    sellTicket(ticket) {
        this.ticketsSold.push(ticket)
    }
}

module.exports = Train
