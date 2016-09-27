'use strict';

var hoursOpenPerDay = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var businesses = [];

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
  this.render = function () {
    var tableDataDisplay = document.getElementById('businesses_reporting_js');
    //Create TH row - includes headers for each hour

    //Create TR for each Business Location - includes name of Location and hourly data

    //Create TD for each Business Location Data

  };
  // this.render = function () {
  //   var firstAndPikeEl = document.getElementById('firstandpike');
  //   for (var i = 0; i < this.customersPerHour.length; i++) {
  //     var liEl = document.createElement('li');
  //     liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
  //     firstAndPikeEl.appendChild(liEl);
  //   }
  //   liEl = document.createElement('li');
  //   liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
  //   firstAndPikeEl.appendChild(liEl);
  // };
  this.calculate = function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    // this.render();
  };
  businesses.push(this);
  this.calculate();
}

var firstAndPike = new Stores(23, 65, 6.3, '1st and Pike');
var seaTacAirport = new Stores(3, 24, 1.2, 'SeaTac Airport');
var seattleCenter = new Stores(11, 38, 3.7, 'Seattle Center');
var capitolHill = new Stores(20, 38, 2.3, 'Capitol Hill');
var alkiBeach = new Stores(2, 16, 4.6, 'Alki Beach');
