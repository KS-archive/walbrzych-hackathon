import styled from 'styled-components';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { colorPalette, navHeight } from '../../utils/constants/styles';

export const StyledDrawer = styled(Drawer)`
  > div {
    height: calc(100vh - ${navHeight}px) !important;
    margin-top: ${navHeight}px;
  }
`;

export const StyledMenuItem = styled(MenuItem)`

`;
