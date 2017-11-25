import React, { Component } from 'react';
import { StyledDrawer, StyledMenuItem } from './Sidebar_styles';

class Sidebar extends Component {
  render() {
    return (
      <StyledDrawer openSecondary open={this.props.open} width={536}>
        Tekst
      </StyledDrawer>
    );
  }
}

export default Sidebar;
