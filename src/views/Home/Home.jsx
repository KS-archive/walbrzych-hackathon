import React, { Component } from 'react';
import Map from '../../components/Map/Map';
// import { Header } from './Home_styles';

const markers = [
  {
    title: 'Some title A',
    label: 'A',
    location: {
      lat: 50.7860098,
      lng: 16.2854904,
    },
    description: 'Some description A',
  },
  {
    title: 'Some title B',
    label: 'B',
    location: {
      lat: 50.7870098,
      lng: 16.2864904,
    },
    description: 'Some description B',
  },
];

class Home extends Component {
  render() {
    return (
      <Map
        center={{ lat: 50.7860098, lng: 16.2854904 }}
        zoom={14}
        markers={markers}
      />
    );
  }
}

export default Home;
