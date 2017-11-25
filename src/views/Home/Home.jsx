import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { getEvents } from '../../actions/index';
import Map from '../../components/Map/Map';
import Sidebar from '../../components/Sidebar/Sidebar';
// import { Header } from './Home_styles';

class Home extends Component {
  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    if (this.props.markers && this.props.markers.length > 0 && this.props.events) {
      return [
        <Sidebar key="Sidebar" open={this.props.sidebar} events={this.props.events} />,
        <Map
          key="Map"
          center={{ lat: 50.7860098, lng: 16.2854904 }}
          zoom={14}
          markers={this.props.markers}
        />,
      ];
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    markers: state.markers,
    sidebar: state.sidebar,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
