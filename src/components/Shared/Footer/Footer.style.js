import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  DefaultContentWidth,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 203px;
  background-color: #3e3e3e;

  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  position: relative;
  width: ${DefaultContentWidth};

  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  width: 96px;
  height: fit-content;
`;

export const CenterSection = styled.div`
  display: flex;
  width: 646px;

  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${DefaultContentWidth}) {
    width: 100%;
    max-width: 646px;
    padding: 0 15px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  width: 96px;
  height: fit-content;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const Shortcut = styled.div`
  display: flex;
  justify-content: space-between;
  width: 291px;
  margin-bottom: 42.5px;
`;

export const ShortcutLink = styled(Link)`
  all: unset;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

export const ExternalSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 19.5px;
`;

export const ExternalSectionButton = styled.button`
  padding: 3.5px 13.5px;
  background-color: transparent;
  border: 0.5px solid #9fa9b3;

  border-radius: 15px;
`;

export const ExternalLink = styled(Link)`
  padding: 3.5px 13.5px 3.5px;
  all: unset;
  position: relative;
  top: 2px;
  color: #c9c9c9;

  font-size: 15px;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
`;

export const HangangLogo = styled.figure`
  width: 90px;
  height: 35px;
`;

export const FacebookIconFigure = styled.figure`
  width: 15px;
  height: 31px;
  margin-right: 30px;
`;

export const HomeIconFigure = styled.figure`
  width: 27px;
  height: 31px;
`;

export const CopyRight = styled.span`
  position: absolute;
  bottom: 30px;

  color: #b5b5b5;

  font-family: SegoeUI;
  font-size: 12px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
`;
