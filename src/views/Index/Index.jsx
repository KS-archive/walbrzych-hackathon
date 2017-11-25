import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { Container, Body } from './Index_styles';

export default class Index extends Component {
  render() {
    return (
      <Container>
        <Body>
          <Nav />
          {this.props.children}
        </Body>
      </Container>
    );
  }
}
