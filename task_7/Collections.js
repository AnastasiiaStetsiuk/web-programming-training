const Ticket = require('./Ticket')
const SoldTickets = require('./SoldTickets')

class Collections {
    constructor() {
        this.passengers = []
        this.trains = []
        this.soldTickets = new SoldTickets()
    }

    // пасажири
    addPassenger(passenger) {
        this.passengers.push(passenger)
    }

    editPassenger(index, passenger) {
        this.passengers[index] = passenger
    }

    removePassenger(index) {
        this.passengers = this.passengers.filter (p=>p.id!== this.passengers[index].id)
        this.soldTickets.tickets = this.soldTickets.tickets.filter(
           t=>t.passenger.id!==this.passengers[index].id
        )
        console.log('-=Ticket removed=-')
    }

    searchPassenger(id) {
        return this.passengers.find(p => p.id === id)
    } 

    // потяги
    addTrain(train) {
        this.trains.push(train)
    }

    editTrain(index, train) {
        this.trains[index] = train
    }

    removeTrain(index) {
        this.trains = this.trains.splice(index, 1)
    }

    searchTrain(trainNumber) {
        return this.trains.find(t => t.trainNumber === trainNumber)
    }

    getTrainWithMostSoldTickets() {
        let mostSold = 0
        let mostSoldTrain = null
        this.trains.forEach(train => {
            if (train.ticketsSold.length > mostSold) {
                mostSold = train.ticketsSold.length
                mostSoldTrain = train
            }
        })
        return mostSoldTrain
    }

    getTrainWithLeastSoldTickets() {
        let leastSold = Number.MAX_SAFE_INTEGER
        let leastSoldTrain = null
        this.trains.forEach(train => {
            if (train.ticketsSold.length < leastSold) {
                leastSold = train.ticketsSold.length
                leastSoldTrain = train
            }
        })
        return leastSoldTrain
    }

    // квитки
    getTicketsByPassenger(passenger) {
        return this.soldTickets.tickets.filter(t => t.passenger.id === passenger.id)
    }

    purchaseTicket(passenger, train, seat) {
        const ticket = new Ticket(passenger, train, seat)
        train.sellTicket(ticket)
        this.soldTickets.addTicket(ticket)
    }

    changeTicket(oldTrain, newTrain, ticket) {
        const index = oldTrain.ticketsSold.findIndex(
            t => t.seat === ticket.seat && t.passenger.id === ticket.passenger.id
        )
        if (index !== -1) {
            oldTrain.ticketsSold.splice(index, 1)
            newTrain.sellTicket(ticket)
            return '-= Ticket changed =-'
        }
        return '-= Can`t change ticket =-'
    }

    cancelTicket(train, ticket) {
        const index = train.ticketsSold.findIndex(
            t => t.seat === ticket.seat && t.passenger.id === ticket.passenger.id
        )
        if (index !== -1) {
            train.ticketsSold.splice(index, 1)
        }
    }

    // консоль
    displayPassengers() {
        console.log('-= Passengers: =-')
        // this.passengers.forEach(p => {
        //     console.log(`Name: ${p.name}, ID: ${p.id}`)
        // })
        console.table(this.passengers)
    }

    displayTrains() {
        console.log('-= Trains: =-')
        // this.trains.forEach(t => {
        //     console.log(`Train Number: ${t.trainNumber}, Route: ${t.route}`)
        // })
        console.table(this.trains)
    }

    displaySoldTickets() {
        console.log('-= Sold Tickets: =-')
        // this.soldTickets.tickets.forEach(t => {
        //     console.log(
        //         `Passenger: ${t.passenger.name}, Train Number: ${t.train.trainNumber}, Seat: ${t.seat}`
        //     )
        // })
        console.table(this.soldTickets.tickets)
    }
}

module.exports = Collections
