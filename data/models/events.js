const mongoose = require('mongoose');

class EventModel{
  constructor(){
    this.model = mongoose.model('Event', this.eventModel());
  };

  eventModel(){
    let schema = new mongoose.Schema({
      eventID: String,
      name: String,
      coverImg: String,
      profileImg: [String],
      description: String,
      startTime: String,
      endTime: String,
      category: String,
      attenders: Number,
      interested: Number,
      place: {
        name: String,
        lat: Number,
        lng: Number,
        street: String,
        zip: String
      },
      score: {
        type: Number,
        default: 0
      }
    });

    schema.statics.getEvent = getEvent;
    schema.statics.getMarkers = getMarkers;
    schema.statics.mockFB = mockFB;

    function getMarkers() {
      return new Promise((resolve,reject) => {
        this.model('Event').find({},(err, results) => {
          if(err) reject(err);
          if(results === null) reject(null);
          else {
            let _results = results.map(element => {
              return {
                title: element.name,
                location: {
                  lat: element.place.lat,
                  lng: element.place.lng
                }
              };
            });

            resolve(_results);
          }
        });
      });
    }

    function getEvent(){
      return new Promise((resolve, reject) => {
        this.model('Event').find({},(err, results) => {
          console.log(err, results)
          if(err) reject(err);
          else {
            resolve(results);
          }
        });
      });
    };

    function mockFB(query){
      let _query = {};
      if(!query) console.log('query not attached');
      else {
        return new Promise((resolve, reject) => {
          //this.model('Event')({}).save
        });
      }
    };



    return schema;
  }

  getModel(){
    return this.model;
  };


}



module.exports = new EventModel().getModel();
