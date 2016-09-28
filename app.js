'use strict';

//Declare variables required for page construction
var hoursOpenPerDay = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var businesses = [];
var salesByHour = [];
var totalAllLocationsSales = 0;
var newLocations = document.getElementById('business_info');
var tableDataDisplay = document.getElementById('businesses_reporting_js');

//Constructor Function
var Stores = function(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, location) {
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.location = location;
  this.customersPerHour = [];
  this.cookiesSoldPerHour = [];
  this.totalDailyCookiesSold = 0;
  businesses.push(this); //Push newly constructed object to Businesses array
};
//Method to generate random number of customers per hour based on min/max customers
Stores.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  }
};
//Method to calc cookies sold per hour = (CustomersPerHour * avgCookiesPerCustomer)
Stores.prototype.calcCookiesSoldPerHour = function() {
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    this.cookiesSoldPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer));
    this.totalDailyCookiesSold += this.cookiesSoldPerHour[i];
  }
};
//Method to render the table body
Stores.prototype.renderTableBody = function () {
  var trEl = document.createElement('tr'); //Create a row for each business location
  var tdEl = document.createElement('td'); //Create a column for the business location name
  tdEl.textContent = this.location; //Add business location name to column
  trEl.appendChild(tdEl); //Add business location name column to row for current business location[i]
  for (var a = 0; a < hoursOpenPerDay.length; a++) { //Create a column for each hour of the day loop
    tdEl = document.createElement('td'); //Create a column for earch hour of the day
    tdEl.textContent = this.cookiesSoldPerHour[a]; //Add hourly sales of cookies[a] per business[i] to hourly column
    trEl.appendChild(tdEl); //Add hourly sales of cookies[a] per business to column for current business location[i] row
  }
  tdEl = document.createElement('td'); //Create a column for total cookies sold per business[i] location
  tdEl.textContent = this.totalDailyCookiesSold; //Create a column for the daily total cookies sold
  trEl.appendChild(tdEl); //Add daily cookies total sold to business location row
  tableDataDisplay.appendChild(trEl); //Add row for each business location to reporting table
};

//Construct new objects for each Business
new Stores(23, 65, 6.3, '1st and Pike');
new Stores(3, 24, 1.2, 'SeaTac Airport');
new Stores(11, 38, 3.7, 'Seattle Center');
new Stores(20, 38, 2.3, 'Capitol Hill');
new Stores(2, 16, 4.6, 'Alki Beach');

//Render All Businesses Objects into table
// function renderBusinesses() {
//   tableDataDisplay.innerHTML = '';
//   for (var i = 0; i < businesses.length; i++) {
//     businesses[i].calcCustomersPerHour();
//     businesses[i].calcCookiesSoldPerHour();
//     businesses[i].renderTableBody();
//     tableDataDisplay.appendChild(businesses[i].renderPage());
//   }
// }

//Event listener function to run after submit button is clicked
function addLocations (event) {
  console.log('It\'s WORKING!!!');

  event.preventDefault(); //Prevent the page from reloading after form submission

  var location = event.target.location.value; //Pull text from form in order to build object
  var minCustomersPerHour = parseInt(event.target.min_customers.value); //Pull text from form in order to build object
  var maxCustomersPerHour = parseInt(event.target.max_customers.value); //Pull text from form in order to build object
  var avgCookiesPerCustomer = parseFloat(event.target.avg_cookies.value); //Pull text from form in order to build object

  var storeLocation = new Stores(minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer, location); //Create a new Stores object from submitted Data

  event.target.location.value = null; //Remove text from the form after submission
  event.target.min_customers.value = null; //Remove text from the form after submission
  event.target.max_customers.value = null; //Remove text from the form after submission
  event.target.avg_cookies.value = null; //Remove text from the form after submission

  // businesses.push(this); //Push newly constructed object to Businesses array

  // renderPage();
}


//Render the header, construct objects, run total sales calc, render table footer
function renderPage() {
  renderTableHeader();

  for (var x = 0; x < businesses.length; x++) {
    businesses[x].calcCustomersPerHour();
    businesses[x].calcCookiesSoldPerHour();
    businesses[x].renderTableBody();
  }

  totalSalesCalc();
  renderTableFooter();
}

//Render the table header
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
  thEl.textContent = 'Daily Location Totals'; //Add totals to the table header row as last column
  trEl.appendChild(thEl); //Add totals to the table header row as last column
  tableDataDisplay.appendChild(trEl); //Add table header row to daily data table
}

//Render the table footer
function renderTableFooter() {
  var tableDataDisplay = document.getElementById('businesses_reporting_js');
  var trEl = document.createElement('tr'); //Create a row for the totals
  var tdEl = document.createElement('td'); //Create a column for the totals
  tdEl.textContent = 'Totals'; //Add totals text to column
  trEl.appendChild(tdEl); //Add totals text column to the totals row
  for (var a = 0; a < hoursOpenPerDay.length; a++) { //Create a column for each hour of the day loop
    tdEl = document.createElement('td'); //Create a column for earch hour of the day
    tdEl.textContent = salesByHour[a]; //Add hourly sales of cookies[a] to totals hourly column
    trEl.appendChild(tdEl); //Add hourly sales of cookies[a] to totals row
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalAllLocationsSales; //Create a column for the daily total cookies sold for all business locations
  trEl.appendChild(tdEl); //Add daily cookies total sold for all business locations row
  tableDataDisplay.appendChild(trEl); //Add row for totals
}

//Calc the total sales
function totalSalesCalc() {
  for (var i = 0; i < hoursOpenPerDay.length; i++) {
    var hourlyCookieSales = 0;
    for (var z = 0; z < businesses.length; z++) {
      hourlyCookieSales += businesses[z].cookiesSoldPerHour[i];
    }
    salesByHour.push(hourlyCookieSales);
  }
  for (var y = 0; y < businesses.length; y++) {
    totalAllLocationsSales += businesses[y].totalDailyCookiesSold;
  }
}

//Create Event Listener for clicks on submit button on newLocations form
newLocations.addEventListener('submit', addLocations);

//Execute page render action
renderPage();
