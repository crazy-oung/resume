import React from "react";
import { Link } from "react-router-dom";

import {
  InfoBox,
  InfoArticle,
  InfoSection,
  MyInfo,
  LinkSection,
  InfoLink,
  ButtonSection,
  LinkButton,
} from "./StickyInfo.style";
import { GithubIcon } from "../ProjectPage/ProjectCard.style";

const StickyInfo = () => {
  return (
    <>
      <InfoBox className="column">
        <InfoArticle>
          <InfoSection>
            <MyInfo className="title is-3">한다영</MyInfo>
            <MyInfo className="is-info is-4">Dayoung Han</MyInfo>
            <MyInfo className="is-info  is-4">Seoul, Korea 🇰🇷</MyInfo>
          </InfoSection>

          <LinkSection>
            <InfoLink
              to={{ pathname: "mailto:hdayoungh@gmail.com" }}
              target={"_blank"}
            >
              hdayoungh@gmail.com
            </InfoLink>

            <InfoLink
              target={"_blank"}
              to={{ pathname: "https://github.com/crazy-oung" }}
            >
              {GithubIcon} GitHub
            </InfoLink>
          </LinkSection>

          <ButtonSection>
            <LinkButton
              className="button is-dark is-fullwidth is-large title is-6"
              to="/projects"
            >
              projects
            </LinkButton>
          </ButtonSection>
        </InfoArticle>
      </InfoBox>
    </>
  );
};

export default StickyInfo;
