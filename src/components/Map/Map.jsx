import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { getCookie } from '../../utils/cookies';
import { createMarkersToEvents } from '../../actions';
import { day, night } from '../../utils/mapStyles';

class Map extends Component {
  componentWillMount() {
    this.light = (getCookie('light') === 'true');
  }

  componentDidMount() {
    this.mapComp = new google.maps.Map(this.map, {
      zoom: this.props.zoom,
      center: this.props.center,
      styles: this.light ? day : night,
    });

    this.markers = this.props.markers.map((marker) => {
      return this.createGoogleMarker(marker);
    });

    this.props.createMarkersToEvents(this.markers);
  }

  shouldComponentUpdate() {
    return false;
  }

  createGoogleMarker(data) {
    const r = new google.maps.Marker({
      map: this.mapComp,
      position: new google.maps.LatLng(data.location.lat, data.location.lng),
      title: data.title,
      label: data.label,
    });
    if (data.description) {
      google.maps.event.addListener(r, 'click', function() {
        if (!this.getMap().infoWindow) {
          this.getMap().infoWindow = new google.maps.InfoWindow();
        }
        this.getMap().infoWindow.close();
        this.getMap().infoWindow.setContent(data.description);
        this.getMap().infoWindow.open(this.getMap(), this);
      });
    }
    return r;
  }

  render() {
    return (
      <div style={{ height: '100%' }} ref={(c) => { this.map = c; }} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMarkersToEvents }, dispatch);
}

export default connect(null, mapDispatchToProps)(Map);
