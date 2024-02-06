type Reservation = {
    id: number,
    movieScreeningId: number,
    userId: string,
    status: string,
    seatsId: number[]
}

export default Reservation;