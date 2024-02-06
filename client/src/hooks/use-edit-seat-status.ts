import { useMutation, useQueryClient } from "react-query"
import { axiosIntance } from "../interceptors/auth-interceptor"
import SeatForMovieScreening from "../types/seat"

type ValuesForUpdateSeatStatus = {
    screeningId: string,
    seatId: number,
    status: boolean
}

const editSeatStatus = async (valuesForUpdate: ValuesForUpdateSeatStatus) => {
    const screeningId = valuesForUpdate.screeningId
    const seatId = valuesForUpdate.seatId
    const status = valuesForUpdate.status
    const editedSeat = await axiosIntance.patch(`/seatsInMovieScreening/edit/${screeningId}`, { seatId, status });
    return editedSeat.data;
}

const useEditSeatStatus = (movieScreeningId: string) => {
    const client = useQueryClient();


    return useMutation(editSeatStatus, {
        onSuccess: (editedSeat) => {
            const seats: SeatForMovieScreening[] | undefined = client.getQueryData(["seatsForMovieScreening", movieScreeningId]);
            if (seats) {
                const seatsForMovieScreening = seats?.map((seat: SeatForMovieScreening) => {
                    if (seat.id === editedSeat.updatedSeat.id) {
                        return editedSeat.updatedSeat;
                    }
                    return seat;
                });

                client.setQueryData(["seatsForMovieScreening", movieScreeningId], seatsForMovieScreening);
            }
        }
    });
}

export default useEditSeatStatus;