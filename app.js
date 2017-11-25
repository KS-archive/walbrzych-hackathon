const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();




class Application{
  constructor(){
    require('./data/db');
    this.app = express();
    this.init();

  };

  init(){
    this.app.listen(3000, ()=>{
      console.log('Server on port 3000 is running.')
    });
    this.middleware();
    this.routes();
  }
  middleware(){
    this.app.use(bodyParser.json());
    this.app.use(express.static(path.join(__dirname, '/public')));
    this.app.use(express.static(path.join(__dirname, '/build')));
  }
  routes(){
    //this.app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));
    this.app.use('/api',require('./routes/events'));
  }

};


new Application();
