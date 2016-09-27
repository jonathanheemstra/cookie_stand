'use strict';

var hoursOpenPerDay = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var businesses = [];
var hourlyCookieSales = [];
var totalAllLocationsSales = [];

//Constructor
function Stores(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, location) {
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.location = location;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  this.calcCustomersPerHour = function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    }
  };
  this.calcCookiesSoldPerHour = function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
    }
  };
  this.renderTableBody = function () {
    var tableDataDisplay = document.getElementById('businesses_reporting_js');
    for (var i = 0; i < businesses.length; i++) {
      var trEl = document.createElement('tr'); //Create a row for each business location
      var tdEl = document.createElement('td'); //Create a column for the business location name
      tdEl.textContent = businesses[i].location; //Add business location name to column
      trEl.appendChild(tdEl); //Add business location name column to row for current business location[i]
      for (var a = 0; a <= hoursOpenPerDay.length; a++) { //Create a column for each hour of the day loop
        tdEl = document.createElement('td'); //Create a column for earch hour of the day
        tdEl.textContent = businesses[i].cookiesSoldPerHour[a]; //Add hourly sales of cookies per business[i] to hourly column
        trEl.appendChild(tdEl); //Add hourly sales of cookies per business to column for current business location[i] row
      }
      tdEl.textContent = businesses[i].totalDailyCookiesSold; //Create a column for the daily total cookies sold
      trEl.appendChild(tdEl); //Add daily cookies total sold to business location row
    }
    tableDataDisplay.appendChild(trEl); //Add row for each business location to reporting table
  };
  this.calculate = function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.renderTableBody();
  };
  businesses.push(this);
  this.calculate();
}

function renderTableHeader() {
  var tableDataDisplay = document.getElementById('businesses_reporting_js');
  var trEl = document.createElement('tr'); //Create a row for each business location
  var thEl = document.createElement('th'); //Create a table header column to hold hours of the day
  thEl.textContent = ''; //Create a blank space as the first column in the tabel header row
  trEl.appendChild(thEl); //Add blank space to the table header row
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    thEl = document.createElement('th'); //Create a table header row to hold hours of the day
    thEl.textContent = hoursOpenPerDay[i]; //Add hour of the day to the table header
    trEl.appendChild(thEl); //Add hour of the day to the table header row
  }
  thEl = document.createElement('th'); //Create a table header row for daily totals
  thEl.textContent = 'Totals!'; //Add totals to the table header row as last column
  trEl.appendChild(thEl); //Add totals to the table header row as last column
  tableDataDisplay.appendChild(trEl); //Add table header row to daily data table
};
renderTableHeader();

new Stores(23, 65, 6.3, '1st and Pike');
new Stores(3, 24, 1.2, 'SeaTac Airport');
new Stores(11, 38, 3.7, 'Seattle Center');
new Stores(20, 38, 2.3, 'Capitol Hill');
new Stores(2, 16, 4.6, 'Alki Beach');
