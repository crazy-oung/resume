import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import {
  BorderColor,
  PrimaryColor,
  PlaceholderColor,
  DefaultContentWidth,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const StyledNavigation = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;

  padding: 0 20px;

  border-bottom: 1px solid ${BorderColor};
  justify-content: center;

  @media screen and (max-width: ${MobileViewWidth}) {
    border-bottom: none;
    padding: 0 20px;
  }
`;

export const NavigationSectionDesktop = styled.div`
  display: flex;
  position: relative;
  width: ${DefaultContentWidth};
  height: 100%;

  align-items: center;
`;

export const NavigationSectionMobile = styled.div`
  display: none;
  position: fixed;
  width: auto;
  height: 72px;
  bottom: 0;
  border-top: 1.5px solid ${BorderColor};
  background: #fff;

  align-items: center;
  z-index: 10;
  @media screen and (max-width: ${MobileViewWidth}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Logo = styled.figure`
  width: 80px;
  margin-right: 40px;
  cursor: pointer;

  @media screen and (max-width: ${MobileViewWidth}) {
    position: relative;
    height: 28px;
    left: -8px;
  }
`;

export const LinkSection = styled.div`
  display: flex;

  @media screen and (max-width: ${MobileViewWidth}) {
    display: none;
  }
`;

export const ShortcutSection = styled.div`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  display: flex;
  width: 107px;
  color: ${PrimaryColor};

  justify-content: center;
  font-size: 17px;
  cursor: pointer;

  svg {
    stroke: ${PlaceholderColor};
  }

  &.selected {
    color: ${PrimaryColor};
    transition: transform 0.4s ease;

    svg {
      stroke: ${PrimaryColor};
    }
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    display: flex;
    width: calc(100% / 5);
    padding: 16px 0;
    color: ${PlaceholderColor};
    font-size: 11px;

    justify-content: center;
    align-items: center;

    svg {
      left: 50%;
    }
  }
`;
export const MobileMenuContext = styled.div`
  display: flex;
  width: min-content;
  flex-wrap: wrap;
  justify-content: center;
`;
export const MobileIconFigure = styled.figure`
  width: 24px;
  height: 24px;
`;
export const MobileNavText = styled.span`
  text-align: center;
  line-height: normal;
  letter-spacing: normal;
  width: max-content;
`;

export const MenuFocusedOn = styled.div`
  display: "block";
  position: absolute;
  width: 107px;
  height: 2px;

  bottom: -1px;
  background-color: ${PrimaryColor};

  transition: transform 0.4s ease;
  transform: translateX(107px);

  @media screen and (max-width: ${MobileViewWidth}) {
    width: calc(100% / 5);
    left: 0;
    bottom: 70px;
  }
  :after {
  }
`;

export const AuthSection = styled.div`
  display: flex;
  position: absolute;
  height: 20px;
  top: calc(50% - 10px);
  right: 0;
  justify-content: space-around;
  align-items: center;
`;

export const CenterLine = styled.div`
  width: 1px;
  height: 15px;
  margin: 0px 24px;
  background-color: #dadada;
`;

export const AuthSectionLink = styled(Link)`
  all: unset;
  position: relative;
  top: -1px;

  color: ${PrimaryColor};
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;
