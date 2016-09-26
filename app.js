'use strict';
var hoursOpenPerDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerHour: 6.3,
  location: '1st and Pike',
  hoursOpen: 15,
  findCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  },
  customersPerHourReported: function() {
    for (var i = 0; i < hoursOpenPerDay.length; i++) {
      console.log(this.findCustomersPerHour());
    }
  },
};

//random number of customers per hour generated for 1st and Pike
console.log('1st and Pike random number of customers per hour = ' + firstAndPike.findCustomersPerHour());
