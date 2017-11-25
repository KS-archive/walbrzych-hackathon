import { css } from 'styled-components';

// Color palette

export const colorPalette = {
  primary1Color: '#4CAF50',
  primary2Color: '#388E3C',
  primary3Color: '#C8E6C9',
  accent1Color: '#FF9800',
  accent2Color: '#BDBDBD',
  accent3Color: '#757575',
  textColor: '#212121',
  pickerHeaderColor: '#4CAF50',
};

// Media queries

export const media = {
  xs: (...args) => css`
    @media (max-width: 540px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 720px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 960px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1600px) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (min-width: 1601px) {
      ${css(...args)}
    }
  `,
};

// Main dimensions

export const navHeight = 80;
