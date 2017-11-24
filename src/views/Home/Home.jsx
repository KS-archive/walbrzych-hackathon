import React, { Component } from 'react';
import Map from '../../components/Map/Map';
// import { Header } from './Home_styles';

class Home extends Component {
  render() {
    return (
      <Map
        center={{ lat: 50.7860098, lng: 16.2854904 }}
        zoom={14}
      />
    );
  }
}

export default Home;
