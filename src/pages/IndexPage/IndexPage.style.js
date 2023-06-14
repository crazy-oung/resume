import styled from "styled-components";
import { Link } from "react-router-dom";
import { BorderColor } from "../../static/Shared/commonStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

export const PauseIcon = (
  <FontAwesomeIcon icon={faPause} style={{ paddingRight: "5px" }} />
);
export const PlayIcon = (
  <FontAwesomeIcon icon={faPlay} style={{ paddingRight: "5px" }} />
);
export const StopIcon = (
  <FontAwesomeIcon icon={faStop} style={{ paddingRight: "5px" }} />
);

export const Main = styled.main``;

export const MainContainer = styled.div``;
export const MainArticle = styled.article``;

export const OnUpdateWarning = styled.div`
  height: 40em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DroppingWarningText = styled.p`
  font-size: 2em;
  font-weight: bold;
`;

export const ContentSection = styled.section`
  border-bottom: 2px solid ${BorderColor};
  position: relative;
`;

export const ContentTitle = styled.h2`
  display: flex;
  position: relative;
  align-items: center;
`;
export const ContentTitleButton = styled(Link)`
  font-weight: 500;
  right: 0;
  position: absolute;
`;

export const DueDate = styled.time`
  font-size: 0.9rem;
  font-weight: 500;
  color: #989898;
`;

export const DefaultText = styled.p`
  font-weight: 400;
`;

export const DisableText = styled.small`
  font-weight: 500;
  color: #989898;
`;
