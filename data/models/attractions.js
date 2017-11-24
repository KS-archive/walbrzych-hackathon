const mongoose = require('mongoose');

class AttractionModel{
  constructor(){
    this.model = mongoose.model('Attraction', this.attractionModel());
  };

  attractionModel(){
    let schema = new mongoose.Schema({
      name: String,
      mainImg: String,
      images: [String],
      description: String,
      website: String,
      location: {
        lat: Number,
        lng: Number,
      },
      phone: String,
      type: String,
      open: [String]
    });

    schema.static.getAtrractions=this.getAtrractions;


    function getAttraction(query){
      let _query = {};
      if(!query) console.log('query not attached');
      else {
        return new Promise((resolve, reject) => {
          this.model('Attraction').find({})
        });
      }
    };

    return schema;
  }


}



