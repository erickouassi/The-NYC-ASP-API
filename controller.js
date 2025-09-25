// Import data files
const data = require("./data_asp_nyc");
const data2022 = require("./data_asp_nyc_2022");
const data2023 = require("./data_asp_nyc_2023");
const data2024 = require("./data_asp_nyc_2024");
const data2025 = require("./data_asp_nyc_2025");

// Logic behind the functionalities
var serverTime = "America/New_York"; // America/New_York timezone

// Get current date and time in New York City (America/New_York)
var d = new Date(); // Current date and time in UTC
// Format date components for New York time
var nyDate = d.toLocaleString("en-US", { timeZone: serverTime });
var nyDateObj = new Date(nyDate); // Create a Date object from New York time string

// Months
var allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthTxt = allMonths[nyDateObj.getMonth()]; // September

// year as (YYYY) format
var year = nyDateObj.getFullYear(); // 2025

// month as (MM) format
var month = ("0" + (nyDateObj.getMonth() + 1)).slice(-2); // 09

// date as (DD) format
var date = ("0" + nyDateObj.getDate()).slice(-2); // 25

// date time in MM/DD/YYYY format
var today = month + "/" + date + "/" + year; // "09/25/2025"
console.log(today);

// Yesterday
var y = new Date(nyDateObj);
console.log(y);
y.setDate(y.getDate() - 1);
var y_dd = String(y.getDate()).padStart(1, '0'); // 24
var y_date = ("0" + y.getDate()).slice(-2); // 24
var y_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][y.getDay()]; // Wednesday
var y_month = allMonths[y.getMonth()]; // September
var y_mm = String(y.getMonth() + 1).padStart(2, '0'); // 09
var y_yyyy = y.getFullYear(); // 2025
var yesterday = y_mm + '/' + y_date + '/' + y_yyyy; // "09/24/2025"
console.log(yesterday);

// Tomorrow
var t = new Date(nyDateObj);
t.setDate(t.getDate() + 1);
var t_dd = String(t.getDate()).padStart(1, '0'); // 26
var t_date = ("0" + t.getDate()).slice(-2); // 26
var t_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][t.getDay()]; // Friday
var t_month = allMonths[t.getMonth()]; // September
var t_mm = String(t.getMonth() + 1).padStart(2, '0'); // 09
var t_yyyy = t.getFullYear(); // 2025
var tomorrow = t_mm + '/' + t_date + '/' + t_yyyy; // "09/26/2025"
console.log(tomorrow);

// Next 7 days start & end
var n = new Date(nyDateObj);
n.setDate(n.getDate() + 7);
var n_dd = String(n.getDate()).padStart(2, '0'); // 02
var n_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][n.getDay()]; // Thursday
var n_month = allMonths[n.getMonth()]; // October
var n_mm = String(n.getMonth() + 1).padStart(2, '0'); // 10
var n_yyyy = n.getFullYear(); // 2025
var end_day = n_mm + '/' + n_dd + '/' + n_yyyy; // "10/02/2025"
console.log(end_day);

// Index for data slicing
var index_start = data.map(i => i.fullDate).indexOf(today);
console.log(index_start);
var index_end = data.map(i => i.fullDate).indexOf(end_day);
// var id_num = index_end + 1;
// console.log(id_num);

// var start_index = data.map(i => i.dateNum).indexOf("01/01");
// console.log(start_index);
// var end_index = data.map(i => i.dateNum).indexOf("12/31");
// console.log(end_index);

class Controller {
  // Get all data for 2022
  async getAllData2022() {
    return new Promise((resolve, _) => resolve(data2022));
  }

  // Get all data for 2023
  async getAllData2023() {
    return new Promise((resolve, _) => resolve(data2023));
  }

  // Get all data for 2024
  async getAllData2024() {
    return new Promise((resolve, _) => resolve(data2024));
  }

  // Get all data for 2025
  async getAllData2025() {
    return new Promise((resolve, _) => resolve(data2025));
  }

  // Get a single data entry by date (MM/DD/YY)
  async getSingleData(X) {
    return new Promise((resolve, reject) => {
      var singleData = data.find((Y) => Y.dateMMDDYY === X);
      if (singleData) {
        resolve(singleData);
      } else {
        reject(`Object with id ${X} not found`);
      }
    });
  }

  // Get the next 7 days of data
  async get7Data() {
    return new Promise((resolve, reject) => {
      var data_7_days = data.slice(index_start, index_end);
      if (data_7_days.length > 0) {
        resolve(data_7_days);
      } else {
        reject(`Object 7 days data not found`);
      }
    });
  }

  // Get today's data
  async getTodayData() {
    return new Promise((resolve, reject) => {
      var todayData = data.filter(function(todayIn) {
        return todayIn.fullDate === today;
      });
      console.log(todayData);
      if (todayData.length > 0) {
        resolve(todayData);
      } else {
        reject(`Today object not found`);
      }
    });
  }

  // Get yesterday's data
  async getYesterdayData() {
    return new Promise((resolve, reject) => {
      var yesterdayData = data.filter(function(yesterdayIn) {
        return yesterdayIn.fullDate === yesterday;
      });
      console.log(yesterdayData);
      if (yesterdayData.length > 0) {
        resolve(yesterdayData);
      } else {
        reject(`Yesterday object not found`);
      }
    });
  }

  // Get tomorrow's data
  async getTomorrowData() {
    return new Promise((resolve, reject) => {
      var tomorrowData = data.filter(function(tomorrowIn) {
        return tomorrowIn.fullDate === tomorrow;
      });
      console.log(tomorrowData);
      if (tomorrowData.length > 0) {
        resolve(tomorrowData);
      } else {
        reject(`Tomorrow object not found`);
      }
    });
  }

  // Get holiday data (where ASP rules are suspended)
  async getHolidayData() {
    return new Promise((resolve, reject) => {
      var holidayData = data.filter(function(holidayIn) {
        return holidayIn.aspRules === "Suspended";
      });
      console.log(holidayData);
      if (holidayData.length > 0) {
        resolve(holidayData);
      } else {
        reject(`Holiday object not found`);
      }
    });
  }
}

module.exports = Controller;