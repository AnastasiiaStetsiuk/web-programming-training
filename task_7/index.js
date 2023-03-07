const Collections = require('./Collections')
const Passenger = require('./Passenger')
const Train = require('./Train')

const task_7 = () => {
    const passenger1 = new Passenger('John Smith')
    const passenger2 = new Passenger('Jane Doe')
    const train1 = new Train('A123', 'City 1 to City 2')
    const train2 = new Train('B456', 'City 2 to City 3')

    const collections = new Collections()

    collections.addPassenger(passenger1)
    collections.addPassenger(passenger2)
    collections.addTrain(train1)
    collections.addTrain(train2)

    const tempPassenger =new Passenger('Temp Passenger')
    collections.addPassenger(tempPassenger)
    collections.displayPassengers()
    collections.removePassenger(2)

    collections.purchaseTicket(passenger1, train1, 1)
    collections.purchaseTicket(passenger2, train1, 2)
    collections.purchaseTicket(passenger2, train2, 1)

    console.log(
        collections.changeTicket(train2, train1, collections.getTicketsByPassenger(passenger2)[1])
    )

    collections.displayPassengers()
    collections.displayTrains()
    collections.displaySoldTickets()
}

module.exports = task_7
