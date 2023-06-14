import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MobileViewWidth,
  BorderColor,
  PrimaryColor,
} from "../../static/Shared/commonStyles";

export const InfoBox = styled.aside``;

export const InfoArticle = styled.article`
  margin-left: 5%;
  position: fixed;
  width: 22vw;
  top: 35%;

  @media (max-width: ${MobileViewWidth}) {
    margin: auto;
    position: relative;
    width: auto;
  }
`;

export const InfoSection = styled.section``;
export const MyInfo = styled.address`
  margin-bottom: 3px;
  position: relative;
`;

export const LinkSection = styled.section``;
export const InfoLink = styled(Link)`
  margin-bottom: 3px;
  display: block;
  color: #4a4a4a;
  text-decoration: underline;
  position: relative;

  &:hover {
    color: ${PrimaryColor};
  }
`;

export const ButtonSection = styled.section`
  margin-top: 1.5rem;
  border-top: 2px solid ${BorderColor};
`;
export const LinkButton = styled(Link)`
  display: block !important;
  margin-top: 1.5rem;
`;
