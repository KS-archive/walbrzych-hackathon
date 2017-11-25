import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import EventIcon from 'material-ui/svg-icons/action/event';
import ClockIcon from 'material-ui/svg-icons/device/access-time';
import PersonIcon from 'material-ui/svg-icons/social/person';
import Searchbar from '../Searchbar/Searchbar';
import { StyledDrawer, Events, StyledMenuItem, Image, Data, Category, Name, Details, Detail, DetailText } from './Sidebar_styles';

class Sidebar extends Component {
  renderEvent = (event, index) => {
    const data = event.startTime.split(/(T|\+)/);
    const date = data[0];
    const time = Number(data[2].slice(0, 2)) + 1 + date[2].slice(2, 5);
    return (
      <StyledMenuItem
        key={index}
        onClick={() => { google.maps.event.trigger(this.props.markersToEvents[index], 'click'); }}
      >
        <Image src={event.profileImg[0]} />
        <Data>
          <Category>{event.category}</Category>
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

export default connect(mapStateToProps)(Sidebar);
