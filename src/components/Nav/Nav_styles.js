import styled from 'styled-components';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { colorPalette } from '../../utils/constants/styles';

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${colorPalette.primary2Color};
`;

export const Filler = styled.div`
  width: 100vw;
  height: 80px;
  position: static;
`;

export const Logo = styled.div`
  width: 160px;
  height: 50px;
  background-image: url('${props => props.src}');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledMenuIcon = styled(MenuIcon)`
  cursor: pointer;
`;
