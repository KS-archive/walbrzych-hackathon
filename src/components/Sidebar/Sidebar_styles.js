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
  white-space: unset !important;
  line-height: 1.3 !important;

  > div > div {
    display: flex;
    align-items: center;
    padding: 30px !important;
    border-bottom: 1px solid #eee;

    @media (max-width: 540px) {
      padding: 15px !important;
    }
  }
`;

export const Events = styled.div`
  overflow-y: auto;
  height: calc(100vh - ${navHeight + 70}px);

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;

    @media (max-width: 700px) {
      display: none;
    }
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #757575;
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 30px;
  background: url('${props => props.src}') no-repeat center/cover;

  @media (max-width: 540px) {
    margin-right: 15px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 310px;
  min-height: 100px;
`;

export const Category = styled.div`
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  color: ${props => props.color};
`;

export const Name = styled.div`
  max-width: 310px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  color: ${colorPalette.textColor};
`;

export const Details = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailText = styled.div`
  margin-right: 10px;
  font-size: 16px;
  font-weight: 300;
  color: ${colorPalette.accent2Color};

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;
