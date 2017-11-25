import React, { Component } from 'react';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { toggleSidebar } from '../../actions/index';
import { getCookie, setCookie } from '../../utils/cookies';
import { Container, Logo, StyledMenuIcon, StyledLightbulbIcon } from './Nav_styles';

class Nav extends Component {
  componentWillMount() {
    this.light = (getCookie('light') === 'true');
  }

  toggleLight() {
    setCookie('light', !this.light);
    window.location.reload();
  }

  render() {
    return (
      <Container key="navContainer">
        <Logo src="/img/logo.svg" />
        <StyledLightbulbIcon color={this.light ? '#fff' : '#FF9800'} onClick={() => this.toggleLight()} />
        <StyledMenuIcon color="#fff" onClick={() => this.props.toggleSidebar()} />
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
}

export default connect(null, mapDispatchToProps)(Nav);
