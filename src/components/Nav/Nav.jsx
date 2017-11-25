import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { toggleSidebar } from '../../actions/index';
import { Container, Logo, StyledMenuIcon } from './Nav_styles';

class Nav extends Component {
  render() {
    return (
      <Container key="navContainer">
        <Logo src="/img/logo.svg" />
        <StyledMenuIcon color="#fff" onClick={() => this.props.toggleSidebar()} />
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

export default connect(null, mapDispatchToProps)(Nav);
