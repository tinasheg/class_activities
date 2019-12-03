days = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
    dayOfWeek : function(d) {
        return this[d];
    }

}

console.log(days.dayOfWeek(4))