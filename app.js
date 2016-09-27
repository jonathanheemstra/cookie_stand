'use strict';

var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Constructor
function StoresLocations(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, location) {
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.location = location;
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
    var firstAndPikeEl = document.getElementById('firstandpike');
    for (var i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      firstAndPikeEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
    firstAndPikeEl.appendChild(liEl);
  };
  this.calculate = function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.render();
  };
}

var firstAndPike = new StoresLocations(23, 65, 6.3, '1st and Pike');

//
// // 1st and Pike location
// var firstAndPike = {
//   minCustomersPerHour: 23,
//   maxCustomersPerHour: 65,
//   avgCookiesPerCustomer: 6.3,
//   location: '1st and Pike',
//   customersPerHour: [],
//   cookiesSoldPerHour: [],
//   totalDailyCookiesSold: 0,
//
//   calcCustomersPerHour: function() {
//     for (var i = 0; i < hoursOpenPerDay.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
//     }
//   },
//   calcCookiesSoldPerHour: function() {
//     for (var i = 0; i < hoursOpenPerDay.length; i++) {
//       this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
//       this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
//     }
//   },
//   render: function () {
//     var firstAndPikeEl = document.getElementById('firstandpike');
//     for (var i = 0; i < this.customersPerHour.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
//       firstAndPikeEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
//     firstAndPikeEl.appendChild(liEl);
//   },
//   calculate: function () {
//     this.calcCustomersPerHour();
//     this.calcCookiesSoldPerHour();
//     this.render();
//   }
// };
// firstAndPike.calculate();

// SeaTac Airport Location
var seaTacAirport = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  location: 'SeaTac Airport',
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  calcCustomersPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    var seaTacAirportEl = document.getElementById('seatac');
    for (var i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      seaTacAirportEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
    seaTacAirportEl.appendChild(liEl);
  },
  calculate: function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.render();
  }
};
seaTacAirport.calculate();

// Seattle Center Location
var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  location: 'Seattle Center',
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  calcCustomersPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    var seattleCenterEl = document.getElementById('seattlecenter');
    for (var i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      seattleCenterEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
    seattleCenterEl.appendChild(liEl);
  },
  calculate: function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.render();
  }
};
seattleCenter.calculate();

// Capitol Hill Location
var capitolHill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  location: 'Capitol Hill',
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  calcCustomersPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    var capitolHillEl = document.getElementById('capitolhill');
    for (var i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      capitolHillEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
    capitolHillEl.appendChild(liEl);
  },
  calculate: function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.render();
  }
};
capitolHill.calculate();

// Alki Beach Location
var alkiBeach = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  location: 'Alki Beach',
  customersPerHour: [],
  cookiesSoldPerHour: [],
  totalDailyCookiesSold: 0,

  calcCustomersPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    }
  },
  calcCookiesSoldPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
      this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
    }
  },
  render: function () {
    var alkiBeachEl = document.getElementById('alki');
    for (var i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOpenPerDay[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies';
      alkiBeachEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailyCookiesSold + ' cookies';
    alkiBeachEl.appendChild(liEl);
  },
  calculate: function () {
    this.calcCustomersPerHour();
    this.calcCookiesSoldPerHour();
    this.render();
  }
};
alkiBeach.calculate();
