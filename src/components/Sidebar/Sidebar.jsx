import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import EventIcon from 'material-ui/svg-icons/action/event';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import PersonIcon from 'material-ui/svg-icons/social/person';
import Searchbar from '../Searchbar/Searchbar';
import { toggleSidebar } from '../../actions';
import { StyledDrawer, Events, StyledMenuItem, Image, Data, Category, Name, Details, Detail, DetailText } from './Sidebar_styles';

const colorChooser = category => {
  switch(category) {
    case 'Zwiedzanie': return '#795548';
    case 'Zdrowie': return '#f44336';
    case 'Zakupy': return '#3f51b5';
    case 'Sztuka': return '#9c27b0';
    case 'Sport i rekreacja': return '#2196f3';
    case 'Koncert': return '#673ab7';
    case 'Inne': return '#607d8b';
    case 'Impreza': return '#ff5722';
    case 'Edukacja': return '#ff9800';
    case 'Dla dzieci': return '#03a9f4';
    case 'Cele dobroczynne': return '#e91e63';
  }
};

class Sidebar extends Component {
  renderEvent = (event, index) => {
    const data = event.startTime.split(/(T|\+)/);
    const date = data[0];
    const time = Number(data[2].slice(0, 2)) + 1 + date[2].slice(2, 5);
    return (
      <StyledMenuItem
        key={index}
        onClick={() => { google.maps.event.trigger(this.props.markersToEvents[index], 'click'); this.props.toggleSidebar(false); }}
      >
        <Image src={event.profileImg[0]} />
        <Data>
          <Category color={() => colorChooser(event.category)}>{event.category}</Category>
          <Name>{event.name}</Name>
          <Details>
            <Detail>
              <EventIcon color="#BDBDBD" />
              <DetailText>{date}</DetailText>
            </Detail>
            <Detail>
              <ClockIcon color="#BDBDBD" />
              <DetailText>{time}</DetailText>
            </Detail>
            <Detail>
              <PersonIcon color="#BDBDBD" />
              <DetailText>{event.interested + event.attenders}</DetailText>
            </Detail>
          </Details>
        </Data>
      </StyledMenuItem>
    );
  }

  render() {
    return (
      <StyledDrawer openSecondary open={this.props.open} width={536}>
        <Searchbar />
        <Events>
          {this.props.markersToEvents && this.props.markersToEvents.length > 0 &&
            this.props.events.map(this.renderEvent)}
        </Events>
      </StyledDrawer>
    );
  }
}

function mapStateToProps(state) {
  return {
    markersToEvents: state.markersToEvents,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
