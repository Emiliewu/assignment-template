/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const convertDay = function (day) {
  if (day[0] === "1") {
    return day + "th";
  }
  if (day[1] === "1") {
    return day + "st";
  }
  if (day[1] === "2") {
    return day + "nd";
  }
  if (day[1] === "3") {
    return day + "rd";
  }
  return day + "th";
};

const talkingCalendar = function (date) {
  // Your code here
  const dateArr = date.split("/");
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthStr = months[month - 1];
  let dayStr = convertDay(day);
  dayStr = dayStr[0] === "0" ? dayStr.substring(1) : dayStr;
  return monthStr + " " + dayStr + ", " + year;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
