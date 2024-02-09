function tickets(arr, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status
        }

        static sorted(result, criteria) {
            return result.sort((a, b) => {
                return criteria === 'price' ?
                    a[criteria] - b[criteria] :
                    a[criteria].localeCompare(b[criteria])
            })
        }

    }

    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        let newTicket = new Ticket(destination, price, status);
        result.push(newTicket);
    }
    return Ticket.sorted(result, criteria);
}

let res = tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')