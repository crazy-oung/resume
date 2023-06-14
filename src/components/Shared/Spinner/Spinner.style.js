import styled from "styled-components";

import {
  PrimaryColor,
  MobileViewWidth,
} from "../../../static/Shared/commonStyles";

export const SpinnerCircle = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  box-sizing: border-box;
  top: 175px;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: ${PrimaryColor};
  border-bottom-color: ${PrimaryColor};
  animation: spinner 0.8s ease infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: ${MobileViewWidth}) {
    top: 155px;
  }
`;
