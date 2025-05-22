function leapYear(year){
    if((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)){
        return alert("Leap Year");
    }
    else return alert("not a leap year");
}
leapYear(1999);