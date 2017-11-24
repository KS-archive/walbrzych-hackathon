import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { getEvents } from '../../actions/index';
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
  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    if (this.props.events && this.props.events.length > 0) {
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
