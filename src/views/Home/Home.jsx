import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { getEvents } from '../../actions/index';
import Map from '../../components/Map/Map';
// import { Header } from './Home_styles';

class Home extends Component {
  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    if (this.props.markers && this.props.markers.length > 0) {
      return (
        <Map
          center={{ lat: 50.7860098, lng: 16.2854904 }}
          zoom={14}
          markers={this.props.markers}
        />
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    markers: state.markers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
