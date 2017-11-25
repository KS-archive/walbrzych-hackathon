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
    this.eventRouter.post('/events', (req, res) => {
      //if(!(req.body.page && req.body.limit, req.body.query && req.body.filters)) res.status(400).json({success: false, message: "Missing parameters."});
      Event.getEvent(1).then(result => {
        res.status(200).json({success: true, data: result})
      }).catch(err => {
        res.status(400).json({success: false, message: "Getting events error."});
      });
    });

    this.eventRouter.post('/mock', (req, res) => {

      var EventSearch = require("facebook-events-by-location-core");

      var es = new EventSearch();

      es.search({
        accessToken: "520060218367018|Wf6VqXyBStK4qEajr_QDY6wq6Uw",
        "lat": 50.7669686,
        "lng": 16.2765734,
        distance: 10000,
        sort: 'data'
      }).then(function (events) {

        let _mock = events.events.map(element => {
          console.log(element.place.location,111111)
          return {
            name: element.name,
            profileImg: element.profilePicture,
            coverImg: element.coverPicture,
            description: element.description,
            startTime: element.startTime,
            endTime:element.endTime,
            category: element.category,
            place: {
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
    });

    this.eventRouter.post('/score', (req, res) => {
      if(req.body.id) res.status(400).json({success: false, message: "Missing parameter."})
      Event.findByIdAndUpdate(req.body.id, {$inc: {score: 1}}, err =>{
        if(!err)res.status(200).json({success: true});
        else res.status(400).json({success: false, message: "Adding score error."})
      });
    });

    this.eventRouter.get('/markers', (req,res) => {
      Event.getMarkers().then(results => res.json({success: true, data: results}))
        .catch(err => res.json({success:false, message: "Markers get error."}))
    });


  };

  getRouter(){
    return this.eventRouter;
  };
}

module.exports = new EventRouter().getRouter();
