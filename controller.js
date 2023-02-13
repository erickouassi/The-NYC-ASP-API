// Logic behind the functionalities
var serverTime = "America/New_York";  // America/New_York /

// current datetime string inAmerica/New_York timezone
let local_datetime_str = new Date().toLocaleString("en-US", { timeZone: serverTime });

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);

// Months
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthTxt = allMonths[d.getMonth()];  // May

// year as (YYYY) format
let year = d.getFullYear();

// month as (MM) format
let month = ("0" + (d.getMonth() + 1)).slice(-2);

// date as (DD) format
let date = ("0" + d.getDate()).slice(-2);

// date time in YYYY-MM-DD format
//let date_time = year + "-" + month + "-" + date;
let today = month + "/" + date + "/" + year; // "11/13/2022"
//console.log(today);



//
// Yesterday
const y = new Date(d);
//console.log(y);
y.setDate(y.getDate() - 1);
//let y_dd = String(y.getDate()).padStart(1, '0'); // 17
// date as (DD) format
let y_date = ("0" + y.getDate()).slice(-2);
//let y_day = weekday[y.getDay()];   // Tuesday
//let y_month = allMonths[y.getMonth()];  // May
let y_mm = String(y.getMonth() + 1).padStart(2, '0'); // 11
let y_yyyy = y.getFullYear();  // 2022

let yesterday = y_mm +'/'+ y_date +'/'+ y_yyyy;   //  -> 11/12/2022
//console.log(yesterday);


// Tomorrow
const t = new Date(d);
t.setDate(t.getDate() + 1);
//let t_dd = String(t.getDate()).padStart(1, '0'); // 19
// date as (DD) format
let t_date = ("0" + t.getDate()).slice(-2);
//let t_day = weekday[t.getDay()];   // Thursday
//let t_month = allMonths[t.getMonth()];  // May
let t_mm = String(t.getMonth() + 1).padStart(2, '0'); // 11
let t_yyyy = t.getFullYear();  // 2022

let tomorrow = t_mm +'/'+ t_date +'/'+ t_yyyy;   //  -> 11/14/2022
//console.log(tomorrow);

// Next 7 days start & end
const n = new Date(d);
n.setDate(n.getDate() + 7);
let n_dd = String(n.getDate()).padStart(2, '0'); // 19
//let n_day = weekday[n.getDay()];   // Thursday
//let n_month = allMonths[n.getMonth()];  // May
let n_mm = String(n.getMonth() + 1).padStart(2, '0'); // 11
let n_yyyy = n.getFullYear();  // 2022

let end_day = n_mm +'/'+ n_dd +'/'+ n_yyyy;   //  -> May 19, 2022
//console.log(end_day);

//const data = require("./data");
const data = require("./data_asp_nyc_2023");


const index_start = data.map(i => i.fullDate).indexOf(today);
//console.log(index);
const index_end = data.map(i => i.fullDate).indexOf(end_day);
//const id_num = index_end + 1;
//console.log(id_num);

const start_index = data.map(i => i.dateNum).indexOf("01/01");
//console.log(start_index);
const end_index = data.map(i => i.dateNum).indexOf("12/31");
//console.log(end_index);


class Controller {
  // getting all data
  async getAllData() {
    // return all data
    return new Promise((resolve, _) => resolve(data));
  }
//
  // getting a single data
  async getSingleData(X) {
    return new Promise((resolve, reject) => {
      // get the data
      let singleData = data.find((Y) => Y.dateMMDDYY === X);

      if (singleData) {
        // return the data
        resolve(singleData);
      } else {
        // return an error
        reject(`Object with id ${X} not found `);
      }
    });
  }
//
 // getting the next 7 days data
 async get7Data() {
  return new Promise((resolve, reject) => {
    // get the data
   // slice from 1..3 - add 1 as the end index is not included
const data_7_days = data.slice(index_start, index_end);

    if (data_7_days) {
      // return the data
      resolve(data_7_days);
    } else {
      // return an error
      reject(`Object 7 days data  not found `);
    }
  });
}
//
// getting full year data
async getYearData() {
    return new Promise((resolve, reject) => {
      // get the data
     // slice from 1..3 - add 1 as the end index is not included
  const year_data = data.slice(start_index, end_index + 1);
  
      if (year_data) {
        // return the data
        resolve(year_data);
      } else {
        // return an error
        reject(`Object Year data  not found `);
      }
    });
  }
  //
  // getting today data
  async getTodayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let todayData = data.filter(function(todayIn) {
    return todayIn.fullDate == today; });
   // console.log(todayData);
//
      if (todayData) {
        // return the data
        resolve(todayData);
      } else {
        // return an error
        reject(`Today object not found `);
      }
    });
  }
  
  // getting yesterday data
  async getYesterdayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let yesterdayData = data.filter(function(yesterdayIn) {
    return yesterdayIn.fullDate == yesterday; });
   // console.log(yesterdayData);
      if (yesterdayData) {
        // return the data
        resolve(yesterdayData);
      } else {
        // return an error
        reject(`Yesterday object not found `);
      }
    });
  }
  
   // getting tomorrow data
   async getTomorrowData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let tomorrowData = data.filter(function(tomorrowIn) {
    return tomorrowIn.fullDate == tomorrow; });
   // console.log(tomorrowData);
      if (tomorrowData) {
        // return the data
        resolve(tomorrowData);
      } else {
        // return an error
        reject(`Tomorrow object not found `);
      }
    });
  }
  //
 // getting holiday data
 async getHolidayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let holidayData = data.filter(function(holidayIn) {
    return holidayIn.aspRules == "Suspended"; });
   // console.log(holidayData);
//
      if (holidayData) {
        // return the data
        resolve(holidayData);
      } else {
        // return an error
        reject(`Holiday object not found `);
      }
    });
  }
  // add below
  // add above
}
module.exports = Controller;