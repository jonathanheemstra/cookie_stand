'use strict';

var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
      console.log('Customers per hour at ' + this.location + ' = ' + hoursOpenPerDay[i] + ': ' + randomNumber);
    }
  },
  totalCookiesSoldPerHour: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      var cookiesSoldCalc = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
      this.cookiesSoldPerHour.push(cookiesSoldCalc);
      this.totalDailyCookiesSold += cookiesSoldCalc;
      console.log('Cookies per hour at ' + this.location + ' = ' + hoursOpenPerDay[i] + ': ' + cookiesSoldCalc);
    }
  },
};
firstAndPike.customersPerHourReported();
firstAndPike.totalCookiesSoldPerHour();
var firstAndPikeEl = document.getElementById('firstandpike');
for (var i = 0; i < firstAndPike.customersPerHour.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hoursOpenPerDay[i] + ': ' + firstAndPike.cookiesSoldPerHour[i] + ' cookies';
  firstAndPikeEl.appendChild(liEl);
}
