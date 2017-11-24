import React, { Component } from 'react';
import { Container, Filler, Logo, StyledMenuIcon } from './Nav_styles';

class Nav extends Component {
  render() {
    return [
      <Container key="navContainer">
        <Logo src="/img/logo.svg" />
        <StyledMenuIcon color="#fff" />
      </Container>,
      <Filler key="navFiller" />,
    ];
  }
}

export default Nav;
