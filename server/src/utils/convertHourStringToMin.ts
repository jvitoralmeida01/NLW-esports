export default function convertHourStringToMin (hour : String) {
    const [hours, minutes] = hour.split(':').map(Number)
    return minutes + (hours*60)
}