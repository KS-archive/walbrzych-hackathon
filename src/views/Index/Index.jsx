import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { Container, Body } from './Index_styles';

export default class Index extends Component {
  componentDidMount() {
    const preloader = document.getElementById('preloader');
    console.log(preloader);
    preloader.setAttribute('class', 'preload hidden');
    console.log(preloader);
    setTimeout(() => {
      preloader.setAttribute('class', 'preload removed');
    }, 1000);
  }

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
