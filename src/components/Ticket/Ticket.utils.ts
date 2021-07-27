export const getTicketInfoToDisplay = (date: string, duration: number) => {
    const getHoursAndMinutesString: (date: Date) => string = (date) =>
    date.toTimeString().slice(0, 5);

    const originalDepartureTime: Date = new Date(date);
    const originalArrivalTime: Date = new Date(
        originalDepartureTime.getTime() + duration * 60000
    );

    const departureTime: string = getHoursAndMinutesString(originalDepartureTime);
    const arrivalTime: string = getHoursAndMinutesString(originalArrivalTime);
    const hoursDuration: number = Math.trunc(duration / 60);
    const minutesDuration: number = duration % 60;
    return {
        departureTime,
        arrivalTime,
        hoursDuration,
        minutesDuration
    }
}