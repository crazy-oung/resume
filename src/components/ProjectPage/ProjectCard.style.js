import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const GithubIcon = (
  <FontAwesomeIcon icon={faGithub} style={{ paddingRight: "5px" }} />
);

export const ProjectMain = styled.main``;
export const ProjectBox = styled.article``;
export const ImgSection = styled.section``;
export const ContentSection = styled.section``;

export const ProjectTitle = styled.h2`
  margin-right: 10px;
  display: inline;
`;
export const ProjectDesc = styled.strong`
  font: revert;
  display: block;
`;
// details
export const ProjectTechStacks = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font: revert;
  display: block;
`;

export const LinkSection = styled.section`
  border-top: 2px solid #f5f5f5;
  padding-top: 1.5rem;
`;

export const ButtonLink = styled(Link)`
  margin-right: 5px;

  :last-child {
    margin-right: 0;
  }
`;

export const Tag = styled.span`
  margin: 0 2px;

  :first-child {
    margin-left: 10px;
  }
`;

export const ProjectThumbnail = styled.img`
  height: 242px !important;
`;
export const ProjectDue = styled.time`
  display: block;
`;
