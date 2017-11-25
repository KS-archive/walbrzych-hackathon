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
      icon: `/img/pins/${data.category}.png`,
    });
    const shortText = (data.description && data.description.length > 150) ? `${data.description.slice(0, 150)}...` : data.description;
    const description = `
      <div style="max-width: 300px; display: flex; flex-direction: column; align-items: center;">
        <img style="max-width: 280px; max-height: 150px;" src="${data.coverImg}"/>
        <h2 style="margin: 10px 0; font-size: 20px; font-weight: 500; color: #212121;">${data.title}</h2>
        <p>${shortText}</p>
        <div style="color: #3C589A; cursor: pointer; font-weight: 500; margin: 10px 0; font-size: 17px;">Zobacz na Facebooku</div>
      </div>
    `
    google.maps.event.addListener(r, 'click', function() {
      if (!this.getMap().infoWindow) {
        this.getMap().infoWindow = new google.maps.InfoWindow();
      }
      this.getMap().panTo(r.position);
      this.getMap().infoWindow.close();
      this.getMap().infoWindow.setContent(description);
      this.getMap().infoWindow.open(this.getMap(), this);
    });
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
