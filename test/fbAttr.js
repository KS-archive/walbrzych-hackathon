var EventSearch = require("facebook-events-by-location-core");

var es = new EventSearch();

es.search({
  "lat": 50.7669686,
  "lng": 16.2765734,
  distance: 1000
}).then(function (events) {
  console.log(JSON.stringify(events));
}).catch(function (error) {
  console.error(JSON.stringify(error));
});
