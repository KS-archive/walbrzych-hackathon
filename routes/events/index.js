const express = require('express');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');

let router = express.Router();

class EventRouter{
  constructor(){
    this.eventRouter = router;
    this.init();
  };

  init(){
    this.eventRouter.get('/test', (req, res) => {
      Event.getEvent(1).then(result => {
        res.json(result)
      }).catch(err => {
        res.json({err: err});
      });
    });

    this.eventRouter.post('/mock', (req, res) => {

      var EventSearch = require("facebook-events-by-location-core");

      var es = new EventSearch();

      es.search({
        accessToken: "520060218367018|Wf6VqXyBStK4qEajr_QDY6wq6Uw",
        "lat": 50.7669686,
        "lng": 16.2765734,
        distance: 10000
      }).then(function (events) {

        let _mock = events.events.map(element => {
          return {name: element.name, profileImg: element.profilePicture,
            coverImg: element.coverPicture, description: element.description,
            startTime: element.startTime, endTime:element.endTime,
            category: element.category, place: {
              name: element.place.location.name,
              lat: element.place.location.latitude,
              lng: element.place.location.longitude,
              street: element.place.location.street,
              zip: element.place.location.zip
            },
            attenders: element.stats.attending,
            interested: element.stats.maybe
          }
        });
        Event.insertMany(_mock, err=> {
          console.log(err)
          if(err) res.json(err);
          else res.json({success: true})
        })
      }).catch(function (error) {
        console.error(JSON.stringify(error));
      });


      //
      // new Event({name: 'aaaa'}).save(err=> {
      //   if(err) res.json(err);
      //   else res.json({success: true})
      // });
    });


  };

  getRouter(){
    return this.eventRouter;
  };
}

module.exports = new EventRouter().getRouter();
