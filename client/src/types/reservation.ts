type Reservation = {
    id: number,
    movieScreeningId: number,
    seatsId: number[],
    status: string,
    userId: string
}

export default Reservation