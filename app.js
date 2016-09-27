'use strict';

var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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
