import styled from 'styled-components';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import { colorPalette, navHeight } from '../../utils/constants/styles';

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${navHeight}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${colorPalette.primary2Color};
`;

export const Logo = styled.div`
  width: 160px;
  height: 50px;
  background-image: url('${props => props.src}');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledLightbulbIcon = styled(LightbulbIcon)`
  cursor: pointer;
  margin: 0 20px 0 auto;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
`;
