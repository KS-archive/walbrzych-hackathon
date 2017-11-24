const mongoose = require('mongoose');

class EventModel{
  constructor(){
    this.model = mongoose.model('Event', this.eventModel());
  };

  eventModel(){
    let schema = new mongoose.Schema({
      name: String,
      coverImg: String,
      profileImg: [String],
      description: String,
      startTime: String,
      end: String,
      category: String,
      attenders: Number,
      interested: Number,
      place: {
        name: String,
        location: {
          city: String,
          lat: Number,
          lng: Number
        }
      }
    });

    schema.statics.getEvent = getEvent;
    schema.statics.mockFB = mockFB;


    function getEvent(query){
      let _query = {};
      if(!query) console.log('query not attached');
      else {
        return new Promise((resolve, reject) => {
          this.model('Event').find({},(err, results) => {
            if(err) reject(err);
            if(results === []) reject();
            else {
              resolve(results);
            }
          });
        });
      }
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
