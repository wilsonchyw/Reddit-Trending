export default function formatDate(days) {
    // If days is not provided or is not a number, default to 0
    if (days === undefined || isNaN(days)) {
        days = 0;
    }

    // Create a new Date object for today's date
    var date = new Date();

    // Subtract the specified number of days from the date
    date.setDate(date.getDate() - days);

    // Get the day of the month
    var day = date.getDate();

    // Get the month name
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthIndex = date.getMonth();
    var monthName = monthNames[monthIndex];

    // Combine the day and month name into a string
    var formattedDate = monthName + '-' + day;

    // Return the formatted date string
    return formattedDate;
}
