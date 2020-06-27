'use strict';
// Task 1
String.prototype.isPalindrome = function() {
  return    this.split(' ').join('').toLowerCase() ==
            this.split(' ').join('').split('').reverse().join('').toLowerCase();
};

// Task 2
function getAverageMark(marks) {
    if (marks.length > 0) {
        return Math.round(marks.reduce((previousValue, currentValue) => currentValue += previousValue) / marks.length);
    } else {
        return 0;
    };
};


// Task 3
Date.prototype.getWithoutLeapYears = function(millisecondsInLeapYear, millisecondsInYear) {
    let amountLeapYears = 0
    // Количество високосных годов
    for (let year = new Date(this).getFullYear(); year < new Date().getFullYear(); year ++) {
        if (year % 4 == 0 || year % 100 != 0 && year % 400 == 0) {
            amountLeapYears += 1;
            };
    };
    // Учитываем сложением время високосных годом в следующей разнице текущего времени и даты рождения
    return this.getTime() + (millisecondsInLeapYear - millisecondsInYear) * amountLeapYears;
};

function checkBirthday(birthday) {
    const millisecondsInLeapYear = 31622400000;
    const millisecondsInYear = 31536000000;
    return Math.floor((Date.now() - new Date(birthday).getWithoutLeapYears(millisecondsInLeapYear, millisecondsInYear)) / millisecondsInYear) > 18;
};