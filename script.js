function getWeekNumber(d) {
    // Set to the nearest Thursday (required for week number calculation)
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 3 - ((d.getUTCDay() + 1) % 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

function getStartEndOfWeek(date) {
    // Adjusting so that Saturday is the first day of the week
    var weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 1) % 7));

    var weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    return {
        start: formatDateToUS(weekStart),
        end: formatDateToUS(weekEnd)
    };
}

function formatDateToUS(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

document.getElementById('datePicker').addEventListener('change', function() {
    var selectedDate = new Date(this.value);
    var weekNumber = getWeekNumber(selectedDate);
    var weekRange = getStartEndOfWeek(selectedDate);
    
    document.getElementById('dateDisplay').textContent = 
        weekRange.start + ' - ' + weekRange.end + ' (week ' + weekNumber + ')';
});
