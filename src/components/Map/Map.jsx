import React, { Component } from 'react';
import { StyledMap } from './Map_styles';

const labels = 'AB';
const locations = [
  { lat: 50.7860098, lng: 16.2854904 },
  { lat: 50.7870098, lng: 16.2864904 },
];

class Map extends Component {
  componentDidMount() {
    this.mapComp = new google.maps.Map(this.map, {
      zoom: this.props.zoom,
      center: this.props.center,
    });

    this.markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        map: this.mapComp,
      });
    });

    this.markerCluster = new MarkerClusterer(this.mapComp, this.markers, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div style={{ height: '100%' }} ref={(c) => { this.map = c; }} />
    );
  }
}

export default Map;
