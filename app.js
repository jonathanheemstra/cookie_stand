'use strict';

var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// 1st and Pike location
var firstAndPike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  location: '1st and Pike',
  hoursOpen: 15,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  customersPerHourReported: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersPerHour.push(randomNumber);
    }
  },
  totalCookiesSoldPerHour: function(){
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var cookiesSoldCalc = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookiesSoldCalc);
      this.totalDailyCookiesSold += cookiesSoldCalc;
    }
  },
  calculate: function (){
    this.customersPerHourReported();
    this.totalCookiesSoldPerHour();
  },
};
firstAndPike.calculate();

function firstAndPikeResults (){
  var firstAndPikeEl = document.getElementById('firstandpike');
  for (var i = 0; i < firstAndPike.customersPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOpenPerDay[i] + ': ' + firstAndPike.cookiesSoldPerHour[i] + ' cookies';
    firstAndPikeEl.appendChild(liEl);
  }
  firstAndPikeEl = document.getElementById('firstandpike');
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + firstAndPike.totalDailyCookiesSold + ' cookies';
  firstAndPikeEl.appendChild(liEl);
}
firstAndPikeResults();

// SeaTac Airport Location
var seaTacAirport = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  location: '1st and Pike',
  hoursOpen: 15,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  customersPerHourReported: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersPerHour.push(randomNumber);
    }
  },
  totalCookiesSoldPerHour: function(){
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var cookiesSoldCalc = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookiesSoldCalc);
      this.totalDailyCookiesSold += cookiesSoldCalc;
    }
  },
  calculate: function (){
    this.customersPerHourReported();
    this.totalCookiesSoldPerHour();
  },
};
seaTacAirport.calculate();

function seaTacAirportResults (){
  var seaTacAirportEl = document.getElementById('seatac');
  for (var i = 0; i < seaTacAirport.customersPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOpenPerDay[i] + ': ' + seaTacAirport.cookiesSoldPerHour[i] + ' cookies';
    seaTacAirportEl.appendChild(liEl);
  }
  seaTacAirportEl = document.getElementById('seatac');
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + seaTacAirport.totalDailyCookiesSold + ' cookies';
  seaTacAirportEl.appendChild(liEl);
}
seaTacAirportResults();

// Seattle Center Location
var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  location: '1st and Pike',
  hoursOpen: 15,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  customersPerHourReported: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersPerHour.push(randomNumber);
    }
  },
  totalCookiesSoldPerHour: function(){
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var cookiesSoldCalc = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookiesSoldCalc);
      this.totalDailyCookiesSold += cookiesSoldCalc;
    }
  },
  calculate: function (){
    this.customersPerHourReported();
    this.totalCookiesSoldPerHour();
  },
};
seattleCenter.calculate();

function seattleCenterResults (){
  var seattleCenterEl = document.getElementById('seattlecenter');
  for (var i = 0; i < seattleCenter.customersPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOpenPerDay[i] + ': ' + seattleCenter.cookiesSoldPerHour[i] + ' cookies';
    seattleCenterEl.appendChild(liEl);
  }
  seattleCenterEl = document.getElementById('seattlecenter');
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + seattleCenter.totalDailyCookiesSold + ' cookies';
  seattleCenterEl.appendChild(liEl);
}
seattleCenterResults();

// Seattle Center Location
var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  location: '1st and Pike',
  hoursOpen: 15,
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  customersPerHourReported: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      this.customersPerHour.push(randomNumber);
    }
  },
  totalCookiesSoldPerHour: function(){
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var cookiesSoldCalc = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookiesSoldCalc);
      this.totalDailyCookiesSold += cookiesSoldCalc;
    }
  },
  calculate: function (){
    this.customersPerHourReported();
    this.totalCookiesSoldPerHour();
  },
};
capitolHill.calculate();

function capitolHillResults (){
  var capitolHillEl = document.getElementById('capitolhill');
  for (var i = 0; i < capitolHill.customersPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOpenPerDay[i] + ': ' + capitolHill.cookiesSoldPerHour[i] + ' cookies';
    capitolHillEl.appendChild(liEl);
  }
  capitolHillEl = document.getElementById('capitolhill');
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + capitolHill.totalDailyCookiesSold + ' cookies';
  capitolHillEl.appendChild(liEl);
}
capitolHillResults();
